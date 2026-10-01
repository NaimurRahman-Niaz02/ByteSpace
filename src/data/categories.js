/**
 * ByteSpace Categories Data
 * Source of truth: design/landing-page/design-context.md (Figma #21:33, #21:56, #21:63, #34:725)
 */

import categoryDesignIcon from '../assets/icons/category-design.svg';
import categoryDevelopmentIcon from '../assets/icons/category-development.svg';
import categoryItSoftwareIcon from '../assets/icons/category-it-software.svg';
import categoryBusinessIcon from '../assets/icons/category-business.svg';
import categoryMarketingIcon from '../assets/icons/category-marketing.svg';
import categoryPhotographyIcon from '../assets/icons/category-photography.svg';

/**
 * 19 Category filter pills for Featured Courses Section
 * Formatted into 3 rows matching Figma design canvas
 */
export const categoryTabs = [
  // Row 1 (Figma #21:33)
  { id: 'cat-featured', label: 'Featured', isActive: true, row: 1 },
  { id: 'cat-music', label: 'Music', isActive: false, row: 1 },
  { id: 'cat-drawing-painting', label: 'Drawing & Painting', isActive: false, row: 1 },
  { id: 'cat-marketing', label: 'Marketing', isActive: false, row: 1 },
  { id: 'cat-animation', label: 'Animation', isActive: false, row: 1 },
  { id: 'cat-social-media', label: 'Social Media', isActive: false, row: 1 },
  { id: 'cat-ui-ux-design', label: 'UI/UX Design', isActive: false, row: 1 },
  { id: 'cat-creative-marketing', label: 'Creative Marketing', isActive: false, row: 1 },

  // Row 2 (Figma #21:56)
  { id: 'cat-digital-illustration', label: 'Digital Illustration', isActive: false, row: 2 },
  { id: 'cat-film-video', label: 'Film & Video', isActive: false, row: 2 },
  { id: 'cat-crafts', label: 'Crafts', isActive: false, row: 2 },
  { id: 'cat-freelance', label: 'Freelance & Entrepreneurship', isActive: false, row: 2 },
  { id: 'cat-graphic-design', label: 'Graphic Design', isActive: false, row: 2 },
  { id: 'cat-photography', label: 'Photography', isActive: false, row: 2 },

  // Row 3 (Figma #21:63)
  { id: 'cat-productivity', label: 'Productivity', isActive: false, row: 3 },
  { id: 'cat-web-development', label: 'Web Development', isActive: false, row: 3 },
  { id: 'cat-data-science', label: 'Data Science', isActive: false, row: 3 },
  { id: 'cat-cooking', label: 'Cooking', isActive: false, row: 3 },
  { id: 'cat-more', label: '+ More', isActive: false, isAccent: true, row: 3 },
];

/**
 * 6 Diverse Learning Path Cards (Figma #34:725)
 */
export const diverseLearningPaths = [
  {
    id: 'path-design',
    title: 'Design',
    icon: categoryDesignIcon,
    coursesCount: '45+ Courses',
    href: '#design',
  },
  {
    id: 'path-development',
    title: 'Development',
    icon: categoryDevelopmentIcon,
    coursesCount: '60+ Courses',
    href: '#development',
  },
  {
    id: 'path-it-software',
    title: 'IT & Software',
    icon: categoryItSoftwareIcon,
    coursesCount: '38+ Courses',
    href: '#it-software',
  },
  {
    id: 'path-business',
    title: 'Business',
    icon: categoryBusinessIcon,
    coursesCount: '25+ Courses',
    href: '#business',
  },
  {
    id: 'path-marketing',
    title: 'Marketing',
    icon: categoryMarketingIcon,
    coursesCount: '32+ Courses',
    href: '#marketing',
  },
  {
    id: 'path-photography',
    title: 'Photography',
    icon: categoryPhotographyIcon,
    coursesCount: '18+ Courses',
    href: '#photography',
  },
];

export const categoriesSectionHeader = {
  title: 'Explore Diverse Learning Paths at Bytespace',
  description: 'Whether you want to learn design, coding, or business, our curated paths guide you step-by-step.',
};
