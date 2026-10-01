import React from 'react';
import Button from '../../common/Button/Button';
import { creatorCTAData } from '../../../data/features';
import heroBgMesh from '../../../assets/icons/hero-bg-mesh.svg';
import ornamentConeLime from '../../../assets/images/ornament-cone-lime.png';
import ornamentSphere2 from '../../../assets/images/ornament-sphere-2.png';
import ornamentConeSmall from '../../../assets/images/ornament-cone-small.png';
import './CTASection.css';

/**
 * CTASection Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:1161)
 * Approximate desktop dimensions: 1440px x 488px
 * Background: Persian Blue/800 (#003BE2)
 * Highlighted "Creator" text in Electric Lime/400 (#D4FB20)
 * Centered composition with decorative 3D background elements
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
      {/* Background Ambient Grid Mesh */}
      <img
        src={heroBgMesh}
        alt=""
        aria-hidden="true"
        className="bytespace-cta__mesh"
      />
      {/* Decorative 3D ornaments (#46:78) */}
      <div className="bytespace-cta__ornaments" aria-hidden="true">
        <img
          src={ornamentConeLime}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--cone-lime"
        />
        <img
          src={ornamentSphere2}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--sphere"
        />
        <img
          src={ornamentConeSmall}
          alt=""
          className="bytespace-cta__ornament bytespace-cta__ornament--cone-small"
        />
      </div>

      <div className="bytespace-cta__container">
        {/* Centered Heading with Highlighted "Creator" */}
        <h2 id="cta-heading" className="bytespace-cta__heading">
          {headlinePrefix}
          <span className="bytespace-cta__highlight">{headlineHighlight}</span>
          {headlineSuffix}
        </h2>

        {/* Centered Description (max-width: 964px) */}
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
