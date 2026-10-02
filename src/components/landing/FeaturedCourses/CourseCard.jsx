import React from 'react';
import './FeaturedCourses.css';

export default function CourseCard({ course, icons = {} }) {
  if (!course) return null;

  const {
    title,
    coverImage,
    lessons,
    duration,
    comments,
    instructor,
    level,
    enrolledCount,
    enrolledAvatars = [],
    price,
    billingPeriod,
    rating,
  } = course;

  return (
    <article className="course-card">
      <div className="course-card-cover-wrap">
        <img src={coverImage} alt={title} className="course-card-cover" loading="lazy" />
        <div className="course-card-pills">
          <span className="course-card-pill">{lessons}</span>
          <span className="course-card-pill">{duration}</span>
          <span className="course-card-pill">{comments}</span>
        </div>
      </div>

      <div className="course-card-content">
        <div className="course-card-header-row">
          <div className="course-card-title-group">
            <h3 className="course-card-title" title={title}>{title}</h3>
            <span className="course-card-instructor">by <span>{instructor}</span></span>
          </div>

          <div className="course-card-rating">
            <span className="course-card-rating-value">{rating}</span>
            {icons.star && (
              <img src={icons.star} alt="" className="course-card-star-icon" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="course-card-middle-row">
          <div className="course-card-level-badge">
            {icons.signal && (
              <img src={icons.signal} alt="" className="course-card-level-icon" aria-hidden="true" />
            )}
            <span className="course-card-level-text">{level}</span>
          </div>

          <div className="course-card-students">
            <div className="course-card-avatar-stack">
              {enrolledAvatars.map((avatar, idx) => (
                <img key={idx} src={avatar} alt="Enrolled student" className="course-card-avatar" />
              ))}
              <div className="course-card-avatar-badge">{enrolledCount}</div>
            </div>
          </div>
        </div>

        <div className="course-card-footer">
          <div className="course-card-pricing">
            <span className="course-card-price">{price}</span>
            <span className="course-card-period">{billingPeriod}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
