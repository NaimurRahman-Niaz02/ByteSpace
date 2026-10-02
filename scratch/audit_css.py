import glob
import re
import os

# 1. Collect all class names and IDs used in JSX / JS files
jsx_files = sorted(glob.glob('src/**/*.jsx', recursive=True) + glob.glob('src/**/*.js', recursive=True))
used_classes = set()

# Also detect dynamic classes like bytespace-btn--${variant}, bytespace-btn--${size}
for f in jsx_files:
    with open(f) as fp:
        content = fp.read()
    
    # Static className strings: className="foo bar"
    for m in re.finditer(r'className=["\']([^"\']+)["\']', content):
        for cls in m.group(1).split():
            used_classes.add(cls)
            
    # Template literals: className={`bytespace-btn bytespace-btn--${variant} ...`}
    for m in re.finditer(r'className=\{`([^`]+)`\}', content):
        raw = m.group(1)
        for token in re.findall(r'[a-zA-Z0-9_\-]+', raw):
            used_classes.add(token)
            
    # Dynamic Button variants / sizes in Button.jsx
    if 'Button.jsx' in f:
        for variant in ['primary', 'secondary', 'outline', 'ghost', 'link']:
            used_classes.add(f'bytespace-btn--{variant}')
        for size in ['small', 'medium', 'large']:
            used_classes.add(f'bytespace-btn--{size}')
        used_classes.add('bytespace-btn--full-width')
        used_classes.add('bytespace-btn--loading')

# 2. Parse CSS files cleanly
css_files = sorted(glob.glob('src/**/*.css', recursive=True))

def clean_css_comments(text):
    return re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)

def extract_css_rules(filepath):
    with open(filepath) as fp:
        raw = fp.read()
    
    content = clean_css_comments(raw)
    
    # We will parse top-level and media query blocks
    # A simple token-based parser for CSS
    rules = [] # dict with {selector, declarations, media, line}
    
    i = 0
    length = len(content)
    current_media = None
    
    buffer = ""
    while i < length:
        ch = content[i]
        if ch == '@':
            # Could be @media or @keyframes or @import
            stmt_end = content.find('{', i)
            if stmt_end != -1:
                stmt = content[i:stmt_end].strip()
                if stmt.startswith('@media'):
                    current_media = " ".join(stmt.split())
                    i = stmt_end + 1
                    continue
                elif stmt.startswith('@keyframes'):
                    # skip keyframes block
                    # find matching closing brace
                    depth = 1
                    k = stmt_end + 1
                    while k < length and depth > 0:
                        if content[k] == '{': depth += 1
                        elif content[k] == '}': depth -= 1
                        k += 1
                    i = k
                    continue
                elif stmt.startswith('@import'):
                    i = content.find(';', i) + 1
                    continue
        elif ch == '}':
            if current_media:
                current_media = None
            i += 1
            buffer = ""
            continue
        elif ch == '{':
            selector = " ".join(buffer.strip().split())
            buffer = ""
            # read block until '}'
            block_start = i + 1
            depth = 1
            k = block_start
            while k < length and depth > 0:
                if content[k] == '{': depth += 1
                elif content[k] == '}': depth -= 1
                k += 1
            block_content = content[block_start:k-1].strip()
            i = k
            
            # Parse declarations
            decls = []
            for item in block_content.split(';'):
                item = item.strip()
                if not item or ':' not in item: continue
                p, v = item.split(':', 1)
                decls.append((p.strip().lower(), v.strip()))
                
            rules.append({
                'selector': selector,
                'declarations': decls,
                'media': current_media,
                'raw_block': block_content
            })
            continue
        else:
            buffer += ch
        i += 1
        
    return rules

all_rules = {}
for f in css_files:
    all_rules[f] = extract_css_rules(f)

print("PARSED ALL CSS FILES SUCCESSFULLY.")

# CATEGORY 1 & 2: DUPLICATE PROPERTIES & OVERRIDDEN PROPERTIES IN SAME BLOCK
print("\n" + "="*50)
print("CATEGORY 1 & 2: DUPLICATE / OVERRIDDEN IN SAME BLOCK")
print("="*50)

for f, rules in all_rules.items():
    for r in rules:
        seen = {}
        for p, v in r['declarations']:
            if p in seen:
                print(f"File: {f}")
                print(f"  Media: {r['media']}")
                print(f"  Selector: {r['selector']}")
                print(f"  Property '{p}' declared multiple times:")
                print(f"    Earlier: {seen[p]}")
                print(f"    Later:   {v}")
                print()
            seen[p] = v

# CATEGORY 3: DUPLICATE SELECTORS IN SAME FILE (SAME MEDIA SCOPE)
print("\n" + "="*50)
print("CATEGORY 3: DUPLICATE SELECTORS IN SAME FILE & MEDIA SCOPE")
print("="*50)

for f, rules in all_rules.items():
    scope_selectors = {}
    for r in rules:
        scope = r['media']
        sel = r['selector']
        key = (scope, sel)
        if key in scope_selectors:
            scope_selectors[key].append(r)
        else:
            scope_selectors[key] = [r]
            
    for (scope, sel), matching in scope_selectors.items():
        if len(matching) > 1:
            print(f"File: {f}")
            print(f"  Media: {scope}")
            print(f"  Selector defined {len(matching)} times: {sel}")
            for idx, m in enumerate(matching, 1):
                props_summary = ", ".join([f"{p}: {v}" for p, v in m['declarations'][:3]])
                print(f"    Block {idx}: {props_summary} ...")
            print()

# CATEGORY 4: UNUSED CLASSES
print("\n" + "="*50)
print("CATEGORY 4: UNUSED CLASS SELECTORS")
print("="*50)

unused_selectors = []
for f, rules in all_rules.items():
    if 'variables.css' in f or 'typography.css' in f or 'index.css' in f:
        continue
    for r in rules:
        sel = r['selector']
        # Extract class names in selector
        # Split by comma for selector list
        for single_sel in sel.split(','):
            single_sel = single_sel.strip()
            classes = re.findall(r'\.([a-zA-Z0-9_\-]+)', single_sel)
            for c in classes:
                # exclude CSS module / standard pseudoclasses / keyframe names
                if c not in used_classes:
                    # check if c is used as a substring or base
                    # let's be strict: exact check
                    unused_selectors.append((f, single_sel, c))

# Group by (file, class)
seen_unused = set()
for f, sel, c in unused_selectors:
    if (f, c) not in seen_unused:
        seen_unused.add((f, c))
        print(f"File: {f} -> Unused class: .{c} (in selector: {sel})")

# CATEGORY 5: !IMPORTANT USAGES
print("\n" + "="*50)
print("CATEGORY 5: !IMPORTANT AUDIT")
print("="*50)

for f, rules in all_rules.items():
    for r in rules:
        for p, v in r['declarations']:
            if '!important' in v:
                print(f"File: {f} | Media: {r['media']} | Selector: {r['selector']}")
                print(f"  {p}: {v}")

# CATEGORY 6: REPEATED LITERAL VALUES
print("\n" + "="*50)
print("CATEGORY 6: REPEATED LITERAL VALUES")
print("="*50)

color_patterns = re.compile(r'#(?:[0-9a-fA-F]{3,8})|rgba?\([^)]+\)')
colors_count = {}

for f, rules in all_rules.items():
    for r in rules:
        for p, v in r['declarations']:
            for col in color_patterns.findall(v):
                col_clean = " ".join(col.split()).lower()
                colors_count[col_clean] = colors_count.get(col_clean, 0) + 1

print("Colors repeated >= 5 times across codebase:")
for col, count in sorted(colors_count.items(), key=lambda x: -x[1]):
    if count >= 5:
        print(f"  {col}: {count} occurrences")
