import React from 'react';
import './FeaturedCourses.css';

/**
 * CourseCard Component
 * Source of truth: design/landing-page/design-context.md (Figma #33:683, #13:249)
 * Card elements:
 * - Cover image
 * - Metadata row (lessons, duration, comments)
 * - Course title
 * - Instructor & difficulty/level
 * - Student avatar stack + count & rating (star icon)
 * - Price & lifetime billing & arrow action button
 */
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
    <article className="bytespace-course-card">
      {/* Course Cover Image with floating metadata pills */}
      <div className="bytespace-course-card__cover-wrapper">
        <img
          src={coverImage}
          alt={title}
          className="bytespace-course-card__cover"
          loading="lazy"
        />
        {/* Floating Metadata Pills inside cover at bottom */}
        <div className="bytespace-course-card__pills">
          <span className="bytespace-course-card__pill">{lessons}</span>
          <span className="bytespace-course-card__pill">{duration}</span>
          <span className="bytespace-course-card__pill">{comments}</span>
        </div>
      </div>

      <div className="bytespace-course-card__content">
        {/* Row 1: Title & Subtitle on left, Rating on right */}
        <div className="bytespace-course-card__header-row">
          <div className="bytespace-course-card__title-group">
            <h3 className="bytespace-course-card__title" title={title}>
              {title}
            </h3>
            <span className="bytespace-course-card__instructor">
              by <span>{instructor}</span>
            </span>
          </div>

          <div className="bytespace-course-card__rating">
            <span className="bytespace-course-card__rating-value">{rating}</span>
            {icons.star && (
              <img
                src={icons.star}
                alt=""
                className="bytespace-course-card__star-icon"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* Row 2: Difficulty badge & Student avatar stack */}
        <div className="bytespace-course-card__middle-row">
          <div className="bytespace-course-card__level-badge">
            {icons.signal && (
              <img
                src={icons.signal}
                alt=""
                className="bytespace-course-card__level-icon"
                aria-hidden="true"
              />
            )}
            <span className="bytespace-course-card__level-text">{level}</span>
          </div>

          <div className="bytespace-course-card__students">
            <div className="bytespace-course-card__avatar-stack">
              {enrolledAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Enrolled student"
                  className="bytespace-course-card__avatar"
                />
              ))}
              <div className="bytespace-course-card__avatar-badge">
                {enrolledCount}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Price */}
        <div className="bytespace-course-card__footer">
          <div className="bytespace-course-card__pricing">
            <span className="bytespace-course-card__price">{price}</span>
            <span className="bytespace-course-card__period">{billingPeriod}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
