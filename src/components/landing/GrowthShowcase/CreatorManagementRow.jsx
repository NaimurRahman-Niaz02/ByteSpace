import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import starIcon from '../../../assets/icons/star-icon.svg';
import './GrowthShowcase.css';

/**
 * CreatorManagementRow Component
 * Source of truth: Figma #34:1158
 * Desktop layout: [Visual Composition Left] [Text Content Right]
 */
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
    <div className="bytespace-showcase-row bytespace-showcase-row--creator">
      {/* Left: Visual Composition */}
      <div className="bytespace-showcase-row__visual bytespace-showcase-row__visual--creator">
        <div className="bytespace-showcase-visual-wrapper bytespace-showcase-visual-wrapper--creator">
          {/* Main Creator Image */}
          <div className="bytespace-showcase-image-frame bytespace-showcase-image-frame--creator">
            <img
              src={image}
              alt="Course creator"
              className="bytespace-showcase-image"
              loading="lazy"
            />
          </div>

          {/* Floating Revenue Card 1: Total Revenue */}
          {revenue1 && (
            <FloatingCard className="bytespace-showcase-card bytespace-showcase-card--revenue1">
              <div className="bytespace-revenue-card__meta">
                <span className="bytespace-revenue-card__title">{revenue1.title}</span>
                <span className="bytespace-revenue-card__period">{revenue1.period}</span>
              </div>
              <div className="bytespace-revenue-card__amount-row">
                <span className="bytespace-revenue-card__amount">{revenue1.amount}</span>
                <span className="bytespace-revenue-card__badge">{revenue1.badge}</span>
              </div>
              <div className="bytespace-revenue-card__chart">
                <img
                  src={revenue1.chart}
                  alt=""
                  className="bytespace-revenue-card__chart-img"
                  aria-hidden="true"
                />
              </div>
            </FloatingCard>
          )}

          {/* Floating Revenue Card 2: Year to Date */}
          {revenue2 && (
            <FloatingCard className="bytespace-showcase-card bytespace-showcase-card--revenue2">
              <div className="bytespace-revenue-card__meta">
                <span className="bytespace-revenue-card__title">{revenue2.title}</span>
                <span className="bytespace-revenue-card__period">{revenue2.period}</span>
              </div>
              <div className="bytespace-revenue-card__amount-row">
                <span className="bytespace-revenue-card__amount">{revenue2.amount}</span>
                <span className="bytespace-revenue-card__badge">{revenue2.badge}</span>
              </div>
              <div className="bytespace-revenue-card__chart">
                <img
                  src={revenue2.chart}
                  alt=""
                  className="bytespace-revenue-card__chart-img"
                  aria-hidden="true"
                />
              </div>
            </FloatingCard>
          )}

          {/* Floating Card: Happy Students */}
          {happyStudents && (
            <FloatingCard className="bytespace-showcase-card bytespace-showcase-card--students">
              <div className="bytespace-students-card__header">
                <span className="bytespace-students-card__title">{happyStudents.title}</span>
                <div className="bytespace-students-card__rating">
                  <span className="bytespace-students-card__score">{happyStudents.rating}</span>
                  <span className="bytespace-students-card__reviews">{happyStudents.reviewsCount}</span>
                  <img
                    src={starIcon}
                    alt=""
                    className="bytespace-students-card__star"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="bytespace-students-card__avatars-row">
                <div className="bytespace-students-card__avatar-stack">
                  {happyStudents.avatars?.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Student"
                      className="bytespace-students-card__avatar"
                    />
                  ))}
                  <div className="bytespace-students-card__avatar-badge">
                    {happyStudents.totalStudents}
                  </div>
                </div>
              </div>
            </FloatingCard>
          )}
        </div>
      </div>

      {/* Right: Text & Bullet Points */}
      <div className="bytespace-showcase-row__text bytespace-showcase-row__text--creator">
        <h2 className="bytespace-showcase-row__heading">{heading}</h2>
        <p className="bytespace-showcase-row__description">{description}</p>

        {bulletPoints.length > 0 && (
          <ul className="bytespace-showcase-bullets" aria-label="Creator benefits">
            {bulletPoints.map((bullet) => (
              <li key={bullet.id} className="bytespace-showcase-bullet">
                <img
                  src={checkIcon}
                  alt=""
                  className="bytespace-showcase-bullet__icon"
                  aria-hidden="true"
                />
                <span className="bytespace-showcase-bullet__text">{bullet.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
