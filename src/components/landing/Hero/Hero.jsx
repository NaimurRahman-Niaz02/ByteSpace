import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';
import FloatingCard from '../../common/FloatingCard/FloatingCard';
import HeroCard from './HeroCard';

import {
  heroBgMesh,
  chartProgress,
  starIcon,
  heroModel,
  cylinderLime,
  coneBlue,
  coneSmall,
  sphere1,
  sphere2,
  sphere2Lime,
  studentAvatars,
} from '../../../assets';
import './Hero.css';

export default function Hero() {
  const handleSearch = (query) => { console.log('Search query:', query); };

  return (
    <section className="hero" aria-label="Hero Section">
      <img src={heroBgMesh} alt="" aria-hidden="true" className="hero-mesh" />
      <Navbar />

      <div className="hero-ornaments" aria-hidden="true">
        <img src={cylinderLime} alt="" className="hero-ornament hero-ornament-cone-lime" />
        <img src={sphere1} alt="" className="hero-ornament hero-ornament-sphere-1" />
        <img src={coneSmall} alt="" className="hero-ornament hero-ornament-cone-small" />
        <img src={sphere2Lime} alt="" className="hero-ornament hero-ornament-sphere-large" />
        <img src={sphere2} alt="" className="hero-ornament hero-ornament-sphere-small" />
        <img src={coneBlue} alt="" className="hero-ornament hero-ornament-cone-blue" />
      </div>

      <div className="hero-content">
        <div className="hero-heading">
          <h1 className="hero-title"> Get Access to Hundreds Courses Available </h1>
          <p className="hero-subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <div className="hero-search">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="hero-stage">
        <div className="hero-ring" aria-hidden="true" />

        <div className="hero-model-wrap">
          <img
            src={heroModel}
            alt="ByteSpace student holding notebooks and smiling"
            className="hero-model-img"
          />
        </div>

        <div className="hero-cards">
          <div className="hero-cards-row hero-cards-row-top">
            <FloatingCard className="hero-card hero-card-uiux" ariaLabel="UI/UX Design course stats">
              <span className="hero-card-title">UI/UX Design</span>
              <div className="hero-card-meta">
                <span className="hero-card-meta-text">200 Courses</span>
                <span className="hero-card-meta-dot">•</span>
                <span className="hero-card-meta-text">1000+ Students</span>
              </div>
            </FloatingCard>

            <FloatingCard className="hero-card hero-card-progress" ariaLabel="Learning Progress metric">
              <span className="hero-card-label">Learning Progress</span>
              <div className="hero-card-metric-value">55%</div>
              <img src={chartProgress} alt="" aria-hidden="true" className="hero-card-progress-bar" width="200" height="8" />
            </FloatingCard>
          </div>

          <div className="hero-cards-row hero-cards-row-bottom">
            <HeroCard starIcon={starIcon} avatars={studentAvatars} />
          </div>
        </div>
      </div>
    </section>
  );
}
