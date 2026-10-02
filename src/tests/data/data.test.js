import { brandInfo, headerNavLinks, footerData } from '../../data/navigation';
import { partnersData } from '../../data/partners';
import { categoryTabs, diverseLearningPaths } from '../../data/categories';
import { featuredCoursesData } from '../../data/courses';
import { heroContentData, growthShowcaseData, creatorCTAData } from '../../data/features';
import { testimonialsData } from '../../data/testimonials';

describe('ByteSpace Data Layer Integrity Tests', () => {
  test('navigation.js exports brand, header links, and footer data', () => {
    expect(brandInfo.name).toBe('ByteSpace');
    expect(brandInfo.logoIcon).toBeDefined();
    expect(headerNavLinks).toHaveLength(3);
    expect(footerData.columns).toHaveLength(3);
    expect(footerData.bottomBar.copyright).toBe('@ 2023 ByteSpace. All rights reserved.');
  });

  test('partners.js exports all 5 partner logos', () => {
    expect(partnersData).toHaveLength(5);
    partnersData.forEach((partner) => {
      expect(partner.logo).toBeDefined();
      expect(partner.name).toBeDefined();
    });
  });

  test('categories.js exports 19 filter tabs and 6 diverse learning paths', () => {
    expect(categoryTabs).toHaveLength(19);
    expect(categoryTabs[0].label).toBe('Featured');
    expect(categoryTabs[0].isActive).toBe(true);

    expect(diverseLearningPaths).toHaveLength(6);
    diverseLearningPaths.forEach((path) => {
      expect(path.icon).toBeDefined();
      expect(path.title).toBeDefined();
    });
  });

  test('courses.js exports all 6 Figma courses with complete metadata', () => {
    expect(featuredCoursesData).toHaveLength(6);
    featuredCoursesData.forEach((course) => {
      expect(course.coverImage).toBeDefined();
      expect(course.title).toBeDefined();
      expect(course.lessons).toBe('17 Lessons');
      expect(course.duration).toBe('2 hours 16 mins');
      expect(course.comments).toBe('59 Comments');
      expect(course.price).toBe('$25');
      expect(course.rating).toBe(4.5);
    });
  });

  test('features.js exports Hero, Growth Showcase, and Creator CTA', () => {
    expect(heroContentData.title).toBe('Get Access to Hundreds Courses Available');
    expect(heroContentData.heroImage).toBeDefined();

    expect(growthShowcaseData.learnerGrowth.metrics).toHaveLength(3);
    expect(growthShowcaseData.creatorManagement.bulletPoints).toHaveLength(4);

    expect(creatorCTAData.headlineHighlight).toBe('Creator');
  });

  test('testimonials.js exports 3 community testimonials', () => {
    expect(testimonialsData).toHaveLength(3);
    const names = testimonialsData.map((t) => t.name);
    expect(names).toEqual(['Sarah M.', 'James L.', 'Alex B.']);
    testimonialsData.forEach((t) => {
      expect(t.avatar).toBeDefined();
      expect(t.quote).toBeDefined();
      expect(t.role).toBeDefined();
    });
  });
});
