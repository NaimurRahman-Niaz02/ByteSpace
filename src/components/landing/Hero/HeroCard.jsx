import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';

export default function HeroCard({
  variant = 'hero',
  title = 'Happy Students',
  rating = '4.5 (240)',
  starIcon,
  avatars = [],
  badgeCount = '2K+',
  className = '',
  ariaLabel = 'Happy Students rating and avatars',
}) {
  const isAuth = variant === 'auth';

  if (isAuth) {
    return (
      <div className={`auth-happy-students ${className}`.trim()} aria-label={ariaLabel}>
        <div className="auth-students-header">
          <span className="auth-students-title">{title}</span>
          <div className="auth-students-rating">
            <span className="auth-students-rating-text">{rating}</span>
            {starIcon && (
              <img src={starIcon} alt="" aria-hidden="true" className="auth-students-star" width="16" height="16" />
            )}
          </div>
        </div>

        <div className="auth-avatar-stack" role="group" aria-label="Student avatars">
          {avatars.map((student) => (
            <img key={student.id} src={student.src} alt={student.alt} className="auth-avatar" width="32" height="32" />
          ))}
          <div className="auth-avatar-badge" aria-label="Over 2000 more students">
            {badgeCount}
          </div>
        </div>
      </div>
    );
  }

  return (
    <FloatingCard className={`hero-card hero-card-students ${className}`.trim()} ariaLabel={ariaLabel}>
      <div className="hero-students-header">
        <span className="hero-card-title">{title}</span>
        <div className="hero-rating-row">
          <span className="hero-rating-text">{rating}</span>
          {starIcon && (
            <img src={starIcon} alt="" aria-hidden="true" className="hero-star-icon" width="16" height="16" />
          )}
        </div>
      </div>

      <div className="hero-avatar-stack" role="group" aria-label="Student avatars">
        {avatars.map((student) => (
          <img key={student.id} src={student.src} alt={student.alt} className="hero-avatar-img" width="43" height="43" />
        ))}
        <div className="hero-avatar-badge" aria-label="Over 2000 more students">
          {badgeCount}
        </div>
      </div>
    </FloatingCard>
  );
}
