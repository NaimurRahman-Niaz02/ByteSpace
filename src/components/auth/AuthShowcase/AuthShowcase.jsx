import React from 'react';
import CourseCard from '../../landing/FeaturedCourses/CourseCard';
import HeroCard from '../../landing/Hero/HeroCard';
import { getFeaturedCourses, getCourseSharedIcons } from '../../../core/services/courseService';
import {
  starYellowGreenIcon,
  starBlueIcon,
  ornamentRing,
  ornamentPyramid,
  ornamentSquiggle,
  studentAvatars as defaultStudentAvatars,
} from '../../../assets';

export default function AuthShowcase({
  title,
  subtitle,
  courses,
  courseIcons,
  studentAvatars = defaultStudentAvatars,
}) {
  const featuredCourses = courses || getFeaturedCourses();
  const icons = courseIcons || {
    ...getCourseSharedIcons(),
    star: starYellowGreenIcon,
  };

  return (
    <div className="auth-left">
      <h1 className="auth-heading">{title}</h1>
      <p className="auth-subtitle">{subtitle}</p>

      <div className="auth-stage" aria-hidden="true">
        <img src={ornamentRing} alt="" className="auth-ornament-ring" />

        <div className="auth-card-bg">
          <CourseCard course={featuredCourses[1]} icons={icons} />
        </div>

        <div className="auth-card-fg">
          <CourseCard course={featuredCourses[2]} icons={icons} />
        </div>

        <HeroCard
          variant="auth"
          starIcon={starBlueIcon}
          avatars={studentAvatars}
        />

        <img src={ornamentPyramid} alt="" className="auth-pyramid" />
        <img src={ornamentSquiggle} alt="" className="auth-squiggle" />
      </div>
    </div>
  );
}
