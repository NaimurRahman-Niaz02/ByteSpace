import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import CourseCard from '../FeaturedCourses/CourseCard';
import { featuredCoursesData, courseSharedIcons } from '../../../data/courses';
import chartProgress from '../../../assets/icons/chart-progress.svg';
import coneLime from '../../../assets/images/ornament-cylinder-lime.png';
import './GrowthShowcase.css';

export default function LearnerGrowthRow({ data }) {
  if (!data) return null;

  const { heading, description, image, metrics = [] } = data;
  const sampleCourse = featuredCoursesData[0];

  return (
    <div className="showcase-row showcase-row-learner">
      <div className="showcase-row-text showcase-text-learner">
        <h2 className="showcase-row-heading showcase-heading-learner">
          {heading}
        </h2>
        <p className="showcase-row-desc showcase-desc-learner">
          {description}
        </p>

        {metrics.length > 0 && (
          <div className="showcase-metrics" role="list" aria-label="Learner achievements">
            {metrics.map((metric) => (
              <div key={metric.id} className="showcase-metric" role="listitem">
                <span className="showcase-metric-value">{metric.value}</span>
                <span className="showcase-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="showcase-row-visual showcase-visual-learner">
        <div className="showcase-visual-wrap showcase-visual-wrap-learner">
          <div className="showcase-card-course">
            <CourseCard course={sampleCourse} icons={courseSharedIcons} />
          </div>

          <div className="showcase-image-frame showcase-learner">
            <img
              src={image}
              alt="Professional learner with laptop"
              className="showcase-img showcase-img-learner"
              loading="lazy"
            />
          </div>

          <img
            src={coneLime}
            alt=""
            aria-hidden="true"
            className="showcase-ornament-cone"
          />

          <FloatingCard className="showcase-card showcase-card-progress">
            <span className="showcase-progress-label">Learning Progress</span>
            <div className="showcase-progress-value">55%</div>
            <img
              src={chartProgress}
              alt=""
              aria-hidden="true"
              className="showcase-progress-bar"
              width="180"
              height="8"
            />
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}
