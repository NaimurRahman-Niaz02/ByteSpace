import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/icons/logo-icon.svg';
import starIcon from '../assets/icons/star-icon.svg';

// Images for visual stage
import courseBigData from '../assets/images/course-big-data.png';
import courseDigitalAsset from '../assets/images/course-digital-asset.png';
import ornamentRing from '../assets/images/ornament-cone-lime.png';
import ornamentPyramid from '../assets/images/ornament-cone-small.png';
import ornamentSquiggle from '../assets/images/ornament-sphere-1.png';

// Student Avatars
import student1 from '../assets/images/student-1.png';
import student2 from '../assets/images/student-2.png';
import student3 from '../assets/images/student-3.png';
import student4 from '../assets/images/student-4.png';
import student5 from '../assets/images/student-5.png';

import './Auth.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { fullName, email, password });
    // Navigate to home after simulated registration
    navigate('/');
  };

  return (
    <div className="bytespace-auth" data-testid="register-page">
      {/* Top Header */}
      <header className="bytespace-auth__header">
        <Link to="/" className="bytespace-auth__brand" aria-label="ByteSpace Home">
          <img
            src={logoIcon}
            alt=""
            aria-hidden="true"
            className="bytespace-auth__logo-icon"
          />
          <span className="bytespace-auth__brand-name">ByteSpace</span>
        </Link>
      </header>

      {/* Main Split Content */}
      <main className="bytespace-auth__container">
        {/* Left Column: Messaging & Visual Stage */}
        <div className="bytespace-auth__left">
          <h1 className="bytespace-auth__heading">Sign up and come in</h1>
          <p className="bytespace-auth__subtitle">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          <div className="bytespace-auth__stage" aria-hidden="true">
            {/* Top-Left Torus Ring */}
            <img
              src={ornamentRing}
              alt=""
              className="bytespace-auth__ornament-ring"
            />

            {/* Tilted Background Card */}
            <div className="bytespace-auth__card-bg">
              <div className="bytespace-auth__card-bg-header">
                <img
                  src={courseDigitalAsset}
                  alt=""
                  className="bytespace-auth__card-bg-img"
                />
              </div>
              <h3 className="bytespace-auth__card-bg-title">Build Digital Assets...</h3>
              <div className="bytespace-auth__card-footer">
                <span className="bytespace-auth__card-price">$25<span className="bytespace-auth__card-price-sub">/lifetime</span></span>
                <span className="bytespace-auth__tag">Beginner</span>
              </div>
            </div>

            {/* Foreground Main Course Card */}
            <div className="bytespace-auth__card-fg">
              <div className="bytespace-auth__card-fg-header">
                <img
                  src={courseBigData}
                  alt="the Power of Big Data"
                  className="bytespace-auth__card-fg-img"
                />
                <div className="bytespace-auth__card-tags">
                  <span className="bytespace-auth__tag">17 Lessons</span>
                  <span className="bytespace-auth__tag">2 hours 16 mins</span>
                  <span className="bytespace-auth__tag">59 Comments</span>
                </div>
              </div>
              <div className="bytespace-auth__card-body">
                <div className="bytespace-auth__card-title-row">
                  <h3 className="bytespace-auth__card-title">the Power of Big Data</h3>
                  <div className="bytespace-auth__card-rating">
                    <span>4.5</span>
                    <img src={starIcon} alt="" className="bytespace-auth__card-rating-icon" />
                  </div>
                </div>
                <span className="bytespace-auth__card-author">by purepearl studio</span>
                <div className="bytespace-auth__card-footer">
                  <span className="bytespace-auth__card-price">$25<span className="bytespace-auth__card-price-sub">/lifetime</span></span>
                  <div className="bytespace-auth__avatar-stack">
                    <img src={student1} alt="" className="bytespace-auth__avatar" />
                    <img src={student2} alt="" className="bytespace-auth__avatar" />
                    <img src={student3} alt="" className="bytespace-auth__avatar" />
                    <span className="bytespace-auth__avatar-badge">26+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Happy Students Lime Pill Badge */}
            <div className="bytespace-auth__badge-students">
              <div className="bytespace-auth__badge-header">
                <span className="bytespace-auth__badge-title">Happy Students</span>
                <span className="bytespace-auth__badge-rating">4.5 (240) ★</span>
              </div>
              <div className="bytespace-auth__avatar-stack">
                <img src={student1} alt="" className="bytespace-auth__avatar" />
                <img src={student2} alt="" className="bytespace-auth__avatar" />
                <img src={student3} alt="" className="bytespace-auth__avatar" />
                <img src={student4} alt="" className="bytespace-auth__avatar" />
                <img src={student5} alt="" className="bytespace-auth__avatar" />
                <span className="bytespace-auth__avatar-badge">2K+</span>
              </div>
            </div>

            {/* Bottom-Left 3D Pyramid */}
            <img
              src={ornamentPyramid}
              alt=""
              className="bytespace-auth__pyramid"
            />

            {/* Bottom-Right 3D Squiggle */}
            <img
              src={ornamentSquiggle}
              alt=""
              className="bytespace-auth__squiggle"
            />
          </div>
        </div>

        {/* Right Column: White Registration Card */}
        <div className="bytespace-auth__right">
          <div className="bytespace-auth__card">
            <span className="bytespace-auth__card-eyebrow">Create an Account</span>
            <h2 className="bytespace-auth__card-title">Welcome to ByteSpace</h2>

            <form className="bytespace-auth__form" onSubmit={handleSubmit}>
              <div className="bytespace-auth__field">
                <label htmlFor="register-name" className="bytespace-auth__label">
                  Full Name
                </label>
                <input
                  id="register-name"
                  type="text"
                  className="bytespace-auth__input"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="bytespace-auth__field">
                <label htmlFor="register-email" className="bytespace-auth__label">
                  Email
                </label>
                <input
                  id="register-email"
                  type="email"
                  className="bytespace-auth__input"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="bytespace-auth__field">
                <label htmlFor="register-password" className="bytespace-auth__label">
                  Password
                </label>
                <input
                  id="register-password"
                  type="password"
                  className="bytespace-auth__input"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="bytespace-auth__btn-wrapper">
                <button type="submit" className="bytespace-auth__submit-btn">
                  Continue
                </button>
              </div>
            </form>

            <p className="bytespace-auth__footer-text" style={{ marginTop: '32px' }}>
              Already have an account?
              <Link to="/login" className="bytespace-auth__footer-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
