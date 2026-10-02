import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import CourseCard from '../FeaturedCourses/CourseCard';
import { featuredCoursesData, courseSharedIcons } from '../../../data/courses';
import chartProgress from '../../../assets/icons/chart-progress.svg';
import coneLime from '../../../assets/images/ornament-cylinder-lime.png';
import './GrowthShowcase.css';

/**
 * LearnerGrowthRow Component
 * Source of truth: Figma #34:1157, Frame 11
 * Desktop layout: [Text Content Left] [Visual Composition Right]
 * Visual composition: CourseCard in background-left, Student cutout in foreground,
 * Lime spiral ornament on right, Learning Progress 55% floating card on bottom-right.
 */
export default function LearnerGrowthRow({ data }) {
  if (!data) return null;

  const { heading, description, image, metrics = [] } = data;
  const sampleCourse = featuredCoursesData[0];

  return (
    <div className="bytespace-showcase-row bytespace-showcase-row--learner">
      {/* Left: Text & Metrics */}
      <div className="bytespace-showcase-row__text bytespace-showcase-row__text--learner">
        <h2 className="bytespace-showcase-row__heading bytespace-showcase-row__heading--learner">
          {heading}
        </h2>
        <p className="bytespace-showcase-row__description bytespace-showcase-row__description--learner">
          {description}
        </p>

        {metrics.length > 0 && (
          <div className="bytespace-showcase-metrics" role="list" aria-label="Learner achievements">
            {metrics.map((metric) => (
              <div key={metric.id} className="bytespace-showcase-metric" role="listitem">
                <span className="bytespace-showcase-metric__value">{metric.value}</span>
                <span className="bytespace-showcase-metric__label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: Visual Composition */}
      <div className="bytespace-showcase-row__visual bytespace-showcase-row__visual--learner">
        <div className="bytespace-showcase-visual-wrapper bytespace-showcase-visual-wrapper--learner">
          {/* Background Course Card (Figma #34:1157 Course_Card_1) */}
          <div className="bytespace-showcase-card-course">
            <CourseCard course={sampleCourse} icons={courseSharedIcons} />
          </div>

          {/* Main Learner Cutout Image (no box/shadow) */}
          <div className="bytespace-showcase-image-frame bytespace-showcase-image-frame--learner">
            <img
              src={image}
              alt="Professional learner with laptop"
              className="bytespace-showcase-image bytespace-showcase-image--learner"
              loading="lazy"
            />
          </div>

          {/* 3D Decorative Lime Cone Ornament */}
          <img
            src={coneLime}
            alt=""
            className="bytespace-showcase-ornament bytespace-showcase-ornament--cone-lime"
            aria-hidden="true"
          />

          {/* Floating Card: Learning Progress (exact Hero card) */}
          <FloatingCard
            className="bytespace-showcase-card bytespace-showcase-card--progress"
            ariaLabel="Learning Progress metric"
          >
            <span className="bytespace-showcase-progress-card__label">Learning Progress</span>
            <div className="bytespace-showcase-progress-card__metric-value">55%</div>
            <img
              src={chartProgress}
              alt=""
              aria-hidden="true"
              className="bytespace-showcase-progress-card__bar"
              width="200"
              height="8"
            />
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}
