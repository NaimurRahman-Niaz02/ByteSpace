import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import starIcon from '../../../assets/icons/star-icon.svg';
import ornamentSpiralLime from '../../../assets/images/ornament-spiral-lime.png';
import './GrowthShowcase.css';

export default function CreatorManagementRow({ data }) {
  if (!data) return null;

  const {
    heading,
    description,
    image,
    checkIcon,
    bulletPoints = [],
    floatingStats = {},
  } = data;

  const { revenue1, revenue2, happyStudents } = floatingStats;

  return (
    <div className="showcase-row showcase-row-creator">
      <div className="showcase-row-visual showcase-visual-creator">
        <div className="showcase-visual-wrap showcase-visual-wrap-creator">
          {revenue1 && (
            <FloatingCard className="showcase-card showcase-card-revenue1">
              <div className="revenue-card-meta">
                <span className="revenue-card-title">{revenue1.title}</span>
                <span className="revenue-card-period">{revenue1.period}</span>
              </div>
              <div className="revenue-card-amount-row">
                <span className="revenue-card-amount">{revenue1.amount}</span>
              </div>
              <div className="revenue-card-progress-track">
                <div className="revenue-card-progress-fill" />
              </div>
            </FloatingCard>
          )}

          {revenue2 && (
            <FloatingCard className="showcase-card showcase-card-revenue2">
              <div className="revenue-card-meta">
                <span className="revenue-card-title">{revenue2.title}</span>
                <span className="revenue-card-period">{revenue2.period}</span>
              </div>
              <div className="revenue-card-amount-row">
                <span className="revenue-card-amount">{revenue2.amount}</span>
              </div>
              <span className="revenue-card-badge">{revenue2.badge}</span>
            </FloatingCard>
          )}

          <img
            src={ornamentSpiralLime}
            alt=""
            aria-hidden="true"
            className="showcase-ornament-spiral"
          />

          <div className="showcase-image-frame showcase-creator">
            <img
              src={image}
              alt="Course creator"
              className="showcase-img showcase-img-creator"
              loading="lazy"
            />
          </div>

          {happyStudents && (
            <FloatingCard className="showcase-card showcase-card-students">
              <div className="students-card-header">
                <span className="students-card-title">{happyStudents.title}</span>
                <div className="students-card-rating">
                  <span className="students-card-score">{happyStudents.rating}</span>
                  <span className="students-card-reviews">{happyStudents.reviewsCount}</span>
                  <img src={starIcon} alt="" className="students-card-star" aria-hidden="true" width="16" height="16" />
                </div>
              </div>
              <div className="students-card-avatars-row">
                <div className="students-card-avatar-stack" role="group" aria-label="Student avatars">
                  {happyStudents.avatars?.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Student"
                      className="students-card-avatar"
                      width="43"
                      height="43"
                    />
                  ))}
                  <div className="students-card-avatar-badge">
                    {happyStudents.totalStudents}
                  </div>
                </div>
              </div>
            </FloatingCard>
          )}
        </div>
      </div>

      <div className="showcase-row-text showcase-text-creator">
        <h2 className="showcase-row-heading showcase-heading-creator">
          {heading}
        </h2>
        <p className="showcase-row-desc showcase-desc-creator">
          {description}
        </p>

        {bulletPoints.length > 0 && (
          <ul className="showcase-bullets" aria-label="Creator benefits">
            {bulletPoints.map((bullet) => (
              <li key={bullet.id} className="showcase-bullet">
                <img src={checkIcon} alt="" className="showcase-bullet-icon" aria-hidden="true" />
                <span className="showcase-bullet-text">{bullet.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
