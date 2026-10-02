import React from 'react';
import Button from '../../common/Button/Button';
import { getCreatorCTAData } from '../../../core/services/featureService';
import {
  ctaSpiralLime,
  ctaSquiggleWhite,
  ctaConeWhite,
  ctaTorusLime,
  ctaPyramidLime,
  ctaCylinderWhite,
} from '../../../assets';
import './CTASection.css';

export default function CTASection() {
  const {
    headlinePrefix,
    headlineHighlight,
    headlineSuffix,
    description,
    buttonText,
    buttonHref,
  } = getCreatorCTAData();

  const handleButtonClick = () => {
    if (buttonHref) {
      window.location.href = buttonHref;
    }
  };

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-ornaments" aria-hidden="true">
        <img src={ctaSpiralLime} alt="" className="cta-ornament cta-ornament-spiral-tl" />
        <img src={ctaSquiggleWhite} alt="" className="cta-ornament cta-ornament-squiggle-tl" />
        <img src={ctaConeWhite} alt="" className="cta-ornament cta-ornament-cone-bl" />
        <img src={ctaTorusLime} alt="" className="cta-ornament cta-ornament-torus-bl" />
        <img src={ctaPyramidLime} alt="" className="cta-ornament cta-ornament-pyramid-tr" />
        <img src={ctaCylinderWhite} alt="" className="cta-ornament cta-ornament-cylinder-tr" />
        <img src={ctaSpiralLime} alt="" className="cta-ornament cta-ornament-spiral-br" />
      </div>

      <div className="cta-container">
        <h2 id="cta-heading" className="cta-heading">
          {headlinePrefix}
          <span className="cta-highlight">{headlineHighlight}</span>
          {headlineSuffix}
        </h2>

        <p className="cta-description">{description}</p>

        <div className="cta-action">
          <Button
            variant="primary"
            size="large"
            onClick={handleButtonClick}
            className="cta-btn"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
