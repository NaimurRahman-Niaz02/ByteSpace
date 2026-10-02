import {
  featuredCoursesData,
  coursesSectionHeader,
  courseSharedIcons,
} from '../data/courses';

export const getFeaturedCourses = () => featuredCoursesData;

export const getCourseById = (id) =>
  featuredCoursesData.find((course) => course.id === id);

export const getCoursesSectionHeader = () => coursesSectionHeader;

export const getCourseSharedIcons = () => courseSharedIcons;
