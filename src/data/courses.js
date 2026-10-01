/**
 * ByteSpace Featured Courses Data
 * Source of truth: design/landing-page/design-context.md (Figma #33:683)
 */

import courseFigmaImg from '../assets/images/course-figma.png';
import courseDigitalAssetImg from '../assets/images/course-digital-asset.png';
import courseBigDataImg from '../assets/images/course-big-data.png';
import courseProductivityImg from '../assets/images/course-productivity.png';
import courseMoneyImg from '../assets/images/course-money.png';
import courseStartupImg from '../assets/images/course-startup.png';

import starIcon from '../assets/icons/star-icon.svg';
import starGrayIcon from '../assets/icons/star-gray-icon.svg';
import signalIcon from '../assets/icons/signal-icon.svg';
import arrowForwardIcon from '../assets/icons/arrow-forward.svg';
import student1Img from '../assets/images/student-1.png';
import student2Img from '../assets/images/student-2.png';
import student8Img from '../assets/images/student-8.png';
import student9Img from '../assets/images/student-9.png';

export const coursesSectionHeader = {
  title: 'Discover Your Passion, Build Your Skills',
  description:
    'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.',
};

export const courseSharedIcons = {
  star: starGrayIcon,
  signal: signalIcon,
  arrowForward: arrowForwardIcon,
};

export const courseYellowGreenStarIcon = starIcon;

export const featuredCoursesData = [
  {
    id: 'course-1',
    nodeId: '13:249',
    title: 'Learn Figma from Basic',
    coverImage: courseFigmaImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
  {
    id: 'course-2',
    nodeId: '33:518',
    title: 'Build Digital Asset',
    coverImage: courseDigitalAssetImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
  {
    id: 'course-3',
    nodeId: '33:551',
    title: 'the Power of Big Data',
    coverImage: courseBigDataImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
  {
    id: 'course-4',
    nodeId: '33:584',
    title: 'Balancing Productivity and Self-Care',
    coverImage: courseProductivityImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
  {
    id: 'course-5',
    nodeId: '33:615',
    title: 'Mastering Money Management',
    coverImage: courseMoneyImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
  {
    id: 'course-6',
    nodeId: '33:646',
    title: 'From Idea to Startup Success',
    coverImage: courseStartupImg,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    level: 'Beginner',
    enrolledCount: '26+',
    enrolledAvatars: [student1Img, student2Img, student8Img, student9Img],
    price: '$25',
    billingPeriod: '/lifetime',
    rating: 4.5,
  },
];
