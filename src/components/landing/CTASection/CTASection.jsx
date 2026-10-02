import React from 'react';
import Button from '../../common/Button/Button';
import { creatorCTAData } from '../../../data/features';
import ctaSpiralLime from '../../../assets/images/cta-spiral-lime.png';
import ctaSquiggleWhite from '../../../assets/images/cta-squiggle-white.png';
import ctaConeWhite from '../../../assets/images/cta-cone-white.png';
import ctaTorusLime from '../../../assets/images/cta-torus-lime.png';
import ctaPyramidLime from '../../../assets/images/cta-pyramid-lime.png';
import ctaCylinderWhite from '../../../assets/images/cta-cylinder-white.png';
import './CTASection.css';

/**
 * CTASection Component
 * Source of truth: Figma #34:1161 & Reference Design
 * Background: Persian Blue/800 (#003BE2) with subtle white mesh grid
 * 7 Decorative 3D ornaments:
 * 1. Top-Left Lime Spiral
 * 2. Top-Left White Squiggle
 * 3. Bottom-Left White Cone
 * 4. Bottom-Left Lime Torus Ring
 * 5. Top-Right Lime Pyramid
 * 6. Top-Right White Cylinder
 * 7. Bottom-Right Lime Spiral
 */
export default function CTASection() {
  const {
    headlinePrefix,
    headlineHighlight,
    headlineSuffix,
    description,
    buttonText,
    buttonHref,
  } = creatorCTAData;

  const handleButtonClick = () => {
    if (buttonHref) {
      window.location.href = buttonHref;
    }
  };

  return (
    <section className="bytespace-cta" aria-labelledby="cta-heading">
      {/* Decorative 3D ornaments */}
      <div className="bytespace-cta__ornaments" aria-hidden="true">
        {/* 1. Top-Left Lime Spiral */}
        <img
          src={ctaSpiralLime}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--spiral-top-left"
        />
        {/* 2. Top-Left White Squiggle */}
        <img
          src={ctaSquiggleWhite}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--squiggle-top-left"
        />
        {/* 3. Bottom-Left White Cone */}
        <img
          src={ctaConeWhite}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--cone-bottom-left"
        />
        {/* 4. Bottom-Left Lime Torus Ring */}
        <img
          src={ctaTorusLime}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--torus-bottom-left"
        />
        {/* 5. Top-Right Lime Pyramid */}
        <img
          src={ctaPyramidLime}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--pyramid-top-right"
        />
        {/* 6. Top-Right White Cylinder */}
        <img
          src={ctaCylinderWhite}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--cylinder-top-right"
        />
        {/* 7. Bottom-Right Lime Spiral */}
        <img
          src={ctaSpiralLime}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--spiral-bottom-right"
        />
      </div>

      <div className="bytespace-cta__container">
        {/* Centered Heading */}
        <h2 id="cta-heading" className="bytespace-cta__heading">
          {headlinePrefix}
          <span className="bytespace-cta__highlight">{headlineHighlight}</span>
          {headlineSuffix}
        </h2>

        {/* Centered Description (3 balanced lines) */}
        <p className="bytespace-cta__description">{description}</p>

        {/* Join as Creator Button */}
        <div className="bytespace-cta__action">
          <Button
            variant="primary"
            size="large"
            onClick={handleButtonClick}
            className="bytespace-cta__button"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
