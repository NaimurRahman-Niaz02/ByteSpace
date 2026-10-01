import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';
import FloatingCard from '../../common/FloatingCard/FloatingCard';

// Local Assets
import heroBgMesh from '../../../assets/icons/hero-bg-mesh.svg';
import chartProgress from '../../../assets/icons/chart-progress.svg';
import starIcon from '../../../assets/icons/star-icon.svg';
import heroModel from '../../../assets/images/hero-model.png';

// 3D Ornaments
import cylinderLime from '../../../assets/images/ornament-cylinder-lime.png';
import coneBlue from '../../../assets/images/ornament-cone-blue.png';
import coneSmall from '../../../assets/images/ornament-cone-small.png';
import sphere1 from '../../../assets/images/ornament-sphere-1.png';
import sphere2 from '../../../assets/images/ornament-sphere-2.png';
import sphere2Lime from '../../../assets/images/ornament-sphere-2-lime.png';

// Student Avatars
import student1 from '../../../assets/images/student-1.png';
import student2 from '../../../assets/images/student-2.png';
import student3 from '../../../assets/images/student-3.png';
import student4 from '../../../assets/images/student-4.png';
import student5 from '../../../assets/images/student-5.png';
import student6 from '../../../assets/images/student-6.png';
import student7 from '../../../assets/images/student-7.png';

import './Hero.css';

const studentAvatars = [
  { id: 1, src: student1, alt: 'Student avatar 1' },
  { id: 2, src: student2, alt: 'Student avatar 2' },
  { id: 3, src: student3, alt: 'Student avatar 3' },
  { id: 4, src: student4, alt: 'Student avatar 4' },
  { id: 5, src: student5, alt: 'Student avatar 5' },
  { id: 6, src: student6, alt: 'Student avatar 6' },
  { id: 7, src: student7, alt: 'Student avatar 7' },
];

/**
 * Hero Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #1:1695)
 * Desktop Canvas: 1440px x 1024px
 */
export default function Hero() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <section className="bytespace-hero" aria-label="Hero Section">
      {/* Background Ambient Grid Mesh (#12:224) */}
      <img
        src={heroBgMesh}
        alt=""
        aria-hidden="true"
        className="bytespace-hero__mesh"
      />

      {/* Top Navigation Bar (#1:1778) */}
      <Navbar />

      {/* 3D Ornament Cluster (#46:79) */}
      <div className="bytespace-hero__ornaments" aria-hidden="true">
        {/* Lime Cylinder - Top Right (#46:110) */}
        <img
          src={cylinderLime}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--cone-lime"
        />
        {/* White Squiggle - Bottom Right (#46:85) */}
        <img
          src={sphere1}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--sphere-1"
        />
        {/* White Pyramid - Middle Right (#46:80) */}
        <img
          src={coneSmall}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--cone-small"
        />
        {/* Lime Spiral (Large) - Top Left (#46:90) */}
        <img
          src={sphere2Lime}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--sphere-2-large"
        />
        {/* White Squiggle (Small) - Middle Left (#46:95) */}
        <img
          src={sphere2}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--sphere-2-small"
        />
        {/* White Torus Ring - Bottom Left (#46:105) */}
        <img
          src={coneBlue}
          alt=""
          className="bytespace-hero__ornament bytespace-hero__ornament--cone-blue"
        />
      </div>

      {/* Hero Typography & Search Block (#1:1769) */}
      <div className="bytespace-hero__content">
        <div className="bytespace-hero__heading-group">
          <h1 className="bytespace-hero__title">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="bytespace-hero__subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <div className="bytespace-hero__search">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Hero Stage: Model, Ring & Floating Cards */}
      <div className="bytespace-hero__stage">
        {/* Giant Lime Circular Ring (#1:1866) */}
        <div className="bytespace-hero__ring" aria-hidden="true" />

        {/* Central Hero Model (#1:1796) */}
        <div className="bytespace-hero__model-wrapper">
          <img
            src={heroModel}
            alt="ByteSpace student holding notebooks and smiling"
            className="bytespace-hero__model-img"
          />
        </div>

        {/* Floating Cards Container: Row 1 (UI/UX + Progress) and Row 2 (Students) */}
        <div className="bytespace-hero__cards">
          <div className="bytespace-hero__cards-row bytespace-hero__cards-row--top">
            {/* Floating Card 1: UI/UX Design (#46:126) */}
            <FloatingCard
              className="bytespace-hero__card bytespace-hero__card--uiux"
              ariaLabel="UI/UX Design course stats"
            >
              <span className="bytespace-hero__card-title">UI/UX Design</span>
              <div className="bytespace-hero__card-meta">
                <span className="bytespace-hero__card-meta-text">200 Courses</span>
                <span className="bytespace-hero__card-meta-dot">•</span>
                <span className="bytespace-hero__card-meta-text">1000+ Students</span>
              </div>
            </FloatingCard>

            {/* Floating Card 2: Learning Progress (#1:1797) */}
            <FloatingCard
              className="bytespace-hero__card bytespace-hero__card--progress"
              ariaLabel="Learning Progress metric"
            >
              <span className="bytespace-hero__card-label">Learning Progress</span>
              <div className="bytespace-hero__card-metric-value">55%</div>
              <img
                src={chartProgress}
                alt=""
                aria-hidden="true"
                className="bytespace-hero__card-progress-bar"
                width="200"
                height="8"
              />
            </FloatingCard>
          </div>

          <div className="bytespace-hero__cards-row bytespace-hero__cards-row--bottom">
            {/* Floating Card 3: Happy Students (#1:1821) */}
            <FloatingCard
              className="bytespace-hero__card bytespace-hero__card--students"
              ariaLabel="Happy Students rating and avatars"
            >
              <div className="bytespace-hero__students-header">
                <span className="bytespace-hero__card-title">Happy Students</span>
                <div className="bytespace-hero__rating-row">
                  <span className="bytespace-hero__rating-text">4.5 (240)</span>
                  <img
                    src={starIcon}
                    alt=""
                    aria-hidden="true"
                    className="bytespace-hero__star-icon"
                    width="16"
                    height="16"
                  />
                </div>
              </div>

              <div className="bytespace-hero__avatar-stack" role="group" aria-label="Student avatars">
                {studentAvatars.map((student) => (
                  <img
                    key={student.id}
                    src={student.src}
                    alt={student.alt}
                    className="bytespace-hero__avatar-img"
                    width="43"
                    height="43"
                  />
                ))}
                <div className="bytespace-hero__avatar-badge" aria-label="Over 2000 more students">
                  2K+
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
