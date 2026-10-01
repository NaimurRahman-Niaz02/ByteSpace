import React from 'react';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import ornamentSphereImg from '../../../assets/images/ornament-sphere-1.png';
import './GrowthShowcase.css';

/**
 * LearnerGrowthRow Component
 * Source of truth: Figma #34:1157
 * Desktop layout: [Text Content Left] [Visual Composition Right]
 */
export default function LearnerGrowthRow({ data }) {
  if (!data) return null;

  const { heading, description, image, metrics = [], floatingCard } = data;

  return (
    <div className="bytespace-showcase-row bytespace-showcase-row--learner">
      {/* Left: Text & Metrics */}
      <div className="bytespace-showcase-row__text">
        <h2 className="bytespace-showcase-row__heading">{heading}</h2>
        <p className="bytespace-showcase-row__description">{description}</p>

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
        <div className="bytespace-showcase-visual-wrapper">
          {/* Main Learner Image */}
          <div className="bytespace-showcase-image-frame">
            <img
              src={image}
              alt="Professional learner with laptop"
              className="bytespace-showcase-image"
              loading="lazy"
            />
          </div>

          {/* 3D Decorative Sphere */}
          <img
            src={ornamentSphereImg}
            alt=""
            className="bytespace-showcase-ornament bytespace-showcase-ornament--sphere"
            aria-hidden="true"
          />

          {/* Floating Card: Learning Progress */}
          {floatingCard && (
            <FloatingCard className="bytespace-showcase-card bytespace-showcase-card--progress">
              <div className="bytespace-showcase-card__header">
                <span className="bytespace-showcase-card__title">{floatingCard.title}</span>
              </div>
              <div className="bytespace-showcase-card__chart-wrapper">
                <img
                  src={floatingCard.chart}
                  alt=""
                  className="bytespace-showcase-card__chart"
                  aria-hidden="true"
                />
              </div>
            </FloatingCard>
          )}
        </div>
      </div>
    </div>
  );
}
