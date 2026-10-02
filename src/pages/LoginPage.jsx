import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CourseCard from '../components/landing/FeaturedCourses/CourseCard';
import { getFeaturedCourses, getCourseSharedIcons } from '../core/services/courseService';
import {
  logoIcon,
  starYellowGreenIcon,
  starBlueIcon,
  ornamentRing,
  ornamentPyramid,
  ornamentSquiggle,
  studentAvatars,
  FacebookIcon,
  GoogleIcon,
} from '../assets';
import './Auth.css';

const authCourseIcons = {
  ...getCourseSharedIcons(),
  star: starYellowGreenIcon,
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const courses = getFeaturedCourses();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="auth-page" data-testid="login-page">
      <header className="auth-header">
        <Link to="/" className="auth-brand" aria-label="ByteSpace Home">
          <img src={logoIcon} alt="ByteSpace" className="auth-logo-icon" />
        </Link>
      </header>

      <main className="auth-container">
        <div className="auth-left">
          <h1 className="auth-heading">Sign in with ease</h1>
          <p className="auth-subtitle">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          <div className="auth-stage" aria-hidden="true">
            <img src={ornamentRing} alt="" className="auth-ornament-ring" />

            <div className="auth-card-bg">
              <CourseCard course={courses[1]} icons={authCourseIcons} />
            </div>

            <div className="auth-card-fg">
              <CourseCard course={courses[2]} icons={authCourseIcons} />
            </div>

            <div className="auth-happy-students" aria-label="Happy Students rating and avatars">
              <div className="auth-students-header">
                <span className="auth-students-title">Happy Students</span>
                <div className="auth-students-rating">
                  <span className="auth-students-rating-text">4.5 (240)</span>
                  <img src={starBlueIcon} alt="" aria-hidden="true" className="auth-students-star" width="16" height="16" />
                </div>
              </div>

              <div className="auth-avatar-stack" role="group" aria-label="Student avatars">
                {studentAvatars.map((student) => (
                  <img key={student.id} src={student.src} alt={student.alt} className="auth-avatar" width="32" height="32" />
                ))}
                <div className="auth-avatar-badge" aria-label="Over 2000 more students">
                  2K+
                </div>
              </div>
            </div>

            <img src={ornamentPyramid} alt="" className="auth-pyramid" />
            <img src={ornamentSquiggle} alt="" className="auth-squiggle" />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <span className="auth-card-eyebrow">Sign In</span>
            <h2 className="auth-card-title">Welcome Back</h2>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-field">
                <label htmlFor="login-email" className="auth-label">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  className="auth-input"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-field">
                <label htmlFor="login-password" className="auth-label">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  className="auth-input"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="auth-btn-wrap">
                <button type="submit" className="auth-submit-btn">
                  Sign In
                </button>
              </div>
            </form>

            <div className="auth-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">or</span>
            </div>

            <div className="auth-socials">
              <button
                type="button"
                className="auth-social-btn"
                aria-label="Sign in with Facebook"
                onClick={() => {}}
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                className="auth-social-btn"
                aria-label="Sign in with Google"
                onClick={() => {}}
              >
                <GoogleIcon />
              </button>
            </div>

            <p className="auth-footer-text">
              New user?
              <Link to="/register" className="auth-footer-link">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
