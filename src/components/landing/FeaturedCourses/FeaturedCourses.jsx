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

/**
 * FeaturedCourses Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #12:101, #21:33, #33:683)
 * Section structure:
 * - Section Header (Centered Heading M & Body L)
 * - CategoryTabs (19 pills in 3 rows desktop)
 * - Course Grid (6 cards in 3 cols x 2 rows desktop, 40px gap)
 */
export default function FeaturedCourses() {
  const [activeTabId, setActiveTabId] = useState('cat-featured');

  return (
    <section
      className="bytespace-featured-courses"
      aria-labelledby="featured-courses-heading"
    >
      <div className="bytespace-featured-courses__container">
        {/* Section Header (Figma #12:101) */}
        <header className="bytespace-featured-courses__header">
          <h2
            id="featured-courses-heading"
            className="bytespace-featured-courses__title"
          >
            {coursesSectionHeader.title}
          </h2>
          <p className="bytespace-featured-courses__description">
            {coursesSectionHeader.description}
          </p>
        </header>

        {/* Category Tabs (Figma #21:33, #21:56, #21:63) */}
        <CategoryTabs
          tabs={categoryTabs}
          activeTabId={activeTabId}
          onSelectTab={setActiveTabId}
        />

        {/* Course Cards Grid (Figma #33:683) */}
        <div
          className="bytespace-featured-courses__grid"
          role="region"
          aria-label="Featured courses list"
        >
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
