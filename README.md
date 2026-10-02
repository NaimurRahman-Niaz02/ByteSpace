# ByteSpace

A modern, responsive EdTech platform interface built with React, featuring course discovery, learning paths, creator-focused sections, authentication UI, and a reusable component architecture.

**[Live Demo](https://byte-space-gilt.vercel.app/)** — `https://byte-space-gilt.vercel.app`

![App Screenshot](screenshots/landing-page.png)

---

## Setup Instructions

****Prerequisites:**** Node.js and npm

```bash
git clone https://github.com/NaimurRahman-Niaz02/ByteSpace.git
cd ByteSpace
npm install
npm start      # http://localhost:3000
```

### Available Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Start the Create React App development server |
| `npm run build` | Create an optimized production build          |
| `npm test`      | Run the Jest test suite                       |
| `npm run eject` | Eject Create React App configuration          |

No environment variables are currently required.

---

## Approach

### 1. Component-Driven Architecture

The application is structured around reusable React components rather than building the UI as large page level components. This keeps page composition, presentation, data and reusable UI logic separated.

```text
src/
├── components/
│   ├── common/        # Shared UI components
│   ├── landing/       # Landing page sections
│   └── auth/          # Authentication components
├── pages/             # Route-level composition
├── core/
│   ├── data/          # Static domain data
│   └── services/      # Data-access abstraction
├── assets/            # Images, SVGs and icons
└── tests/             # Automated tests
```



### 2. Service Layer Abstraction

Instead of importing static data directly into presentation components, the application uses a dedicated service layer.

```text
Component
    ↓
Service
    ↓
Static Domain Data
```

The current implementation uses local JavaScript data, but the service boundary makes it possible to replace the data source with a REST or GraphQL API later without tightly coupling API logic to the UI.

### 3. Centralized Design System

The interface uses custom CSS with CSS variables instead of Tailwind or Bootstrap.

Design tokens are centralized in: ```src/styles/variables.css```

Typography is managed through: ```src/styles/typography.css```

The token system covers colors, spacing, radii, shadows, gradients and layout values.

### 4. Responsive-First Layout

The interface is implemented with custom CSS media queries:

```text
Desktop : >= 1025px
Tablet  : 769px–1024px
Mobile  : <= 768px
```

### 5. Lightweight State Management

The application uses React's built-in state management:

* `useState`
* `useEffect`
* `useRef`

---

## Features

* ✅ ****Responsive EdTech UI**** — Desktop, tablet, and mobile layouts
* ✅ ****Reusable React Components**** — Shared UI primitives and section components
* ✅ ****Course Catalog UI**** — Course cards with category, rating, pricing, lessons, duration, and level
* ✅ ****Category Navigation**** — Interactive course category tabs
* ✅ ****Authentication UI**** — Login and registration pages with shared `AuthShowcase`
* ✅ ****Mobile Navigation**** — Drawer with outside-click handling
* ✅ ****Custom Design System**** — CSS variables, typography, gradients, and reusable visual tokens
* ✅ ****Automated Testing**** — Jest + React Testing Library
* ✅ ****Performance Instrumentation**** — `web-vitals` integration

---

## Tech Stack

| Category      | Technology                   | Purpose                              |
| ------------- | ---------------------------- | ------------------------------------ |
| Framework     | React 19                     | UI development                       |
| Routing       | React Router 7               | Client-side navigation               |
| Build         | Create React App             | Development and production builds    |
| Styling       | Vanilla CSS3                 | Component styling                    |
| Design Tokens | CSS Custom Properties        | Centralized visual system            |
| Testing       | Jest + React Testing Library | Automated UI and integration testing |
| Performance   | Web Vitals                   | Frontend performance instrumentation |

---

## Key Technical Decisions

### 1. Service Layer Instead of Direct Data Imports

Domain data lives under `src/core/data/`, while components consume it through `src/core/services/`. This establishes a clear boundary between the UI and data source and provides a straightforward path toward future API integration.

### 2. Shared Authentication Showcase

Both authentication pages use the same `AuthShowcase` component.

```text
LoginPage
     └── AuthShowcase

RegisterPage
     └── AuthShowcase
```

This avoids duplicating the large visual composition shared by the login and registration interfaces.

### 3. Centralized Asset Management

Static assets are exposed through: ```src/assets/index.js```. This provides a single import layer for images, SVGs, icons, and decorative elements instead of scattering asset paths across components.

### 4. Vanilla CSS Design System

Rather than introducing a utility framework, the project uses custom CSS and shared variables. This keeps styling explicit while allowing consistent colors, spacing, typography, shadows, and responsive behavior across components.

### 5. Built-in React State

The current application does not require Redux, Zustand, or another global state library. Local component state is sufficient for the current interaction model and keeps the dependency footprint small.

---

## Project Structure

```text
ByteSpace/
├── public/
│   └── index.html                    # HTML entry point
│
├── src/
│   ├── assets/
│   │   ├── icons/                    # SVG icons
│   │   ├── images/                   # Images and 3D decorative assets
│   │   ├── icons.jsx                 # Reusable JSX-based icons
│   │   └── index.js                  # Centralized asset exports
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthShowcase/         # Shared authentication section
│   │   │
│   │   ├── common/
│   │   │   ├── Button/               # Reusable button component
│   │   │   ├── FloatingCard/         # Floating metric card
│   │   │   ├── Footer/               # Site footer and newsletter
│   │   │   ├── Navbar/               # Responsive navigation
│   │   │   └── SearchBar/            # Reusable search input
│   │   │
│   │   └── landing/
│   │       ├── CTASection/           # Call-to-action section
│   │       ├── DiversePaths/         # Learning path cards
│   │       ├── FeaturedCourses/      # Course grid and category tabs
│   │       ├── GrowthShowcase/       # Learner and creator showcase
│   │       ├── Hero/                 # Hero section and visual cards
│   │       ├── PartnerLogos/         # Partner logo section
│   │       └── Testimonials/         # Testimonial section
│   │
│   ├── core/
│   │   ├── data/
│   │   │   ├── categories.js         # Categories and learning paths
│   │   │   ├── courses.js            # Course data
│   │   │   ├── features.js           # Hero, growth and CTA content
│   │   │   ├── navigation.js         # Navigation and footer data
│   │   │   ├── partners.js           # Partner information
│   │   │   └── testimonials.js       # Testimonial data
│   │   │
│   │   └── services/
│   │       ├── categoryService.js      # Category data access
│   │       ├── courseService.js        # Course data access
│   │       ├── featureService.js       # Feature data access
│   │       ├── navigationService.js    # Navigation data access
│   │       ├── partnerService.js       # Partner data access
│   │       └── testimonialService.js   # Testimonial data access
│   │
│   ├── pages/
│   │   ├── Auth.css                  # Shared authentication styles
│   │   ├── LandingPage.jsx           # Landing page composition
│   │   ├── LoginPage.jsx             # Login page
│   │   └── RegisterPage.jsx          # Registration page
│   │
│   ├── styles/
│   │   ├── typography.css            # Typography and font definitions
│   │   └── variables.css             # Global design tokens
│   │
│   ├── tests/
│   │   ├── components/               # Component tests
│   │   ├── data/                     # Data and service tests
│   │   ├── pages/                    # Page-level tests
│   │   └── App.test.js               # Application and routing test
│   │
│   ├── App.css                       # Application-level styles
│   ├── App.js                        # React Router configuration
│   ├── index.css                     # Global styles and reset
│   ├── index.js                      # Application entry point
│   └── setupTests.js                 # Jest and Testing Library setup
│
├── .gitignore                        
├── package.json                      
├── package-lock.json                 
└── README.md                         
```


---

## Testing

The project uses **Jest** and **React Testing Library**.

Current test suite:

* **9 test suites**
* **31 automated tests**

Tests cover:

* Application and routing behavior
* Authentication pages
* Component rendering
* User interactions
* Course/category data
* Service-layer integrity
* Newsletter interaction

Run the complete suite with: ```npm test -- --watchAll=false```

---

## Current Limitations

| Limitation                        | Context                                                                 |
| --------------------------------- | ----------------------------------------------------------------------- |
| ****Frontend only****             | No backend API or database is currently integrated                      |
| ****Mock authentication****       | Login and registration simulate submission and redirect to `/`          |
| ****Social login placeholders**** | Google and Facebook buttons have no authentication provider behind them |
| ****Static data****               | Course, category, partner, and testimonial data is stored locally       |
| ****Search callback only****      | Hero search captures the query but does not currently filter courses    |
| ****Mock newsletter****           | Subscription only updates local UI state                                |
| ****No protected routes****       | Authentication and authorization are not yet connected to routing       |
| ****No Error Boundary****         | A top-level React Error Boundary is not currently implemented           |

---

## What I'd Improve With More Time

1. **Backend integration** — replace the static service implementations with REST/GraphQL API calls
2. **Authentication** — implement real account creation, login, session management, OAuth, and protected routes
3. **Course search** — connect the hero search input to the course filtering system
4. **Persistent data** — add database-backed courses, users, and newsletter subscriptions
5. **Performance** — introduce route-level code splitting and optimize large raster assets
6. **Resilience** — add a React Error Boundary and richer application-level error states

---

## Future Architecture

The existing service abstraction provides a natural path toward a backend-powered application:

```text
                  React Components
                         ↓
                    Service Layer
                         ↓
                     REST API
                         ↓
                      Backend
                         ↓
                      Database
```
