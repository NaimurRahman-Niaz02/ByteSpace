/**
 * ByteSpace Features & Growth Showcase Data
 * Source of truth: design/landing-page/design-context.md (Figma #34:1157, #34:1158, #34:1161)
 */

import featureLearnerImg from '../../assets/images/feature-learner.png';
import featureCreatorImg from '../../assets/images/feature-creator.png';
import heroModelImg from '../../assets/images/hero-model.png';

import checkCircleIcon from '../../assets/icons/check-circle-icon.svg';
import chartProgressIcon from '../../assets/icons/chart-progress.svg';
import chartRevenueIcon from '../../assets/icons/chart-revenue.svg';
import starIcon from '../../assets/icons/star-icon.svg';

import student1Img from '../../assets/images/student-1.png';
import student2Img from '../../assets/images/student-2.png';
import student3Img from '../../assets/images/student-3.png';
import student4Img from '../../assets/images/student-4.png';
import student5Img from '../../assets/images/student-5.png';
import student6Img from '../../assets/images/student-6.png';
import student7Img from '../../assets/images/student-7.png';

/**
 * Hero Section Stats & Floating Cards Data
 */
export const heroContentData = {
  title: 'Get Access to Hundreds Courses Available',
  subtitle:
    'Unlock your creativity, gain valuable knowledge, and master new skills with interactive courses taught by industry leaders.',
  heroImage: heroModelImg,
  floatingCards: {
    uiux: {
      title: 'UI/UX Design',
    },
    learningProgress: {
      title: 'Learning Progress',
      chart: chartProgressIcon,
    },
    happyStudents: {
      title: 'Happy Students',
      rating: 4.8,
      starIcon: starIcon,
      studentCount: '12K+',
      avatars: [student1Img, student2Img, student3Img, student4Img, student5Img],
    },
  },
};

/**
 * Professional Growth Showcase (Figma #34:1157 & #34:1158)
 */
export const growthShowcaseData = {
  // Row 1: Learner Growth (#34:1157)
  learnerGrowth: {
    heading: 'Your Path to Professional Growth Starts Here!',
    description:
      'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.',
    image: featureLearnerImg,
    metrics: [
      { id: 'metric-students', value: '12K', label: 'Students' },
      { id: 'metric-courses', value: '70+', label: 'Courses' },
      { id: 'metric-creators', value: '16', label: 'Creators' },
    ],
    floatingCard: {
      title: 'Learning Progress',
      chart: chartProgressIcon,
    },
  },

  // Row 2: Creator Management (#34:1158)
  creatorManagement: {
    heading: 'Create & Manage Courses Easily.',
    description:
      'ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.',
    image: featureCreatorImg,
    checkIcon: checkCircleIcon,
    bulletPoints: [
      { id: 'bullet-1', text: 'Share Your Expertise' },
      { id: 'bullet-2', text: 'Monetize Your Passion' },
      { id: 'bullet-3', text: 'Flexibility and Autonomy' },
      { id: 'bullet-4', text: 'Build a Community' },
    ],
    floatingStats: {
      revenue1: {
        title: 'Total Revenue',
        period: 'July 1-28',
        amount: '$120.29',
        badge: '+12$',
        chart: chartRevenueIcon,
      },
      revenue2: {
        title: 'Year to Date',
        period: '2023',
        amount: '$1,200.38',
        badge: '+12$',
        chart: chartRevenueIcon,
      },
      happyStudents: {
        title: 'Happy Students',
        rating: '4.5',
        reviewsCount: '(240)',
        totalStudents: '2K+',
        avatars: [
          student1Img,
          student2Img,
          student3Img,
          student4Img,
          student5Img,
          student6Img,
          student7Img,
        ],
      },
    },
  },
};

/**
 * Creator CTA Frame Data (Figma #34:1161)
 */
export const creatorCTAData = {
  headlinePrefix: 'Unlock Your Potential as a ',
  headlineHighlight: 'Creator',
  headlineSuffix: ' with ByteSpace',
  description:
    'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.',
  buttonText: 'Join as Creator',
  buttonHref: '/signup',
};
