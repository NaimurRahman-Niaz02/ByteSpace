import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import CourseCard from './CourseCard';
import { categoryTabs } from '../../../data/categories';
import {
  featuredCoursesData,
  coursesSectionHeader,
  courseSharedIcons,
} from '../../../data/courses';
import './FeaturedCourses.css';

export default function FeaturedCourses() {
  const [activeTabId, setActiveTabId] = useState('cat-featured');

  return (
    <section className="featured-courses" aria-labelledby="featured-courses-heading">
      <div className="featured-courses-container">
        <header className="featured-courses-header">
          <h2 id="featured-courses-heading" className="featured-courses-title">
            {coursesSectionHeader.title}
          </h2>
          <p className="featured-courses-desc">
            {coursesSectionHeader.description}
          </p>
        </header>

        <CategoryTabs
          tabs={categoryTabs}
          activeTabId={activeTabId}
          onSelectTab={setActiveTabId}
        />

        <div className="featured-courses-grid" role="region" aria-label="Featured courses list">
          {featuredCoursesData.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              icons={courseSharedIcons}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
