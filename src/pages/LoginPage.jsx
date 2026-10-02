import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/icons/logo-icon.svg';
import starYellowGreenIcon from '../assets/icons/star-icon.svg';
import starBlueIcon from '../assets/icons/star-blue-icon.svg';
import CourseCard from '../components/landing/FeaturedCourses/CourseCard';
import { featuredCoursesData, courseSharedIcons } from '../data/courses';
import ornamentRing from '../assets/images/ornament-cone-lime.png';
import ornamentPyramid from '../assets/images/ornament-cone-small.png';
import ornamentSquiggle from '../assets/images/ornament-sphere-1.png';
import student1 from '../assets/images/student-1.png';
import student2 from '../assets/images/student-2.png';
import student3 from '../assets/images/student-3.png';
import student4 from '../assets/images/student-4.png';
import student5 from '../assets/images/student-5.png';
import student6 from '../assets/images/student-6.png';
import student7 from '../assets/images/student-7.png';
import './Auth.css';

const studentAvatars = [
  { id: 1, src: student1, alt: 'Student avatar 1' },
  { id: 2, src: student2, alt: 'Student avatar 2' },
  { id: 3, src: student3, alt: 'Student avatar 3' },
  { id: 4, src: student4, alt: 'Student avatar 4' },
  { id: 5, src: student5, alt: 'Student avatar 5' },
  { id: 6, src: student6, alt: 'Student avatar 6' },
  { id: 7, src: student7, alt: 'Student avatar 7' },
];

const authCourseIcons = {
  ...courseSharedIcons,
  star: starYellowGreenIcon,
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              <CourseCard course={featuredCoursesData[1]} icons={authCourseIcons} />
            </div>

            <div className="auth-card-fg">
              <CourseCard course={featuredCoursesData[2]} icons={authCourseIcons} />
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
                <svg className="auth-social-icon" width="45" height="45" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
              <button
                type="button"
                className="auth-social-btn"
                aria-label="Sign in with Google"
                onClick={() => {}}
              >
                <svg className="auth-social-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.24 10.285V13.8h6.887C18.2 16.14 15.64 17.8 12.24 17.8c-3.28 0-6.02-2.7-6.02-6s2.74-6 6.02-6c1.62 0 3.08.6 4.19 1.62l2.62-2.62C17.37 3.2 14.95 2 12.24 2 6.7 2 2.2 6.5 2.2 12s4.5 10 10.04 10c5.78 0 9.6-4.06 9.6-9.76 0-.66-.07-1.3-.2-1.955H12.24z" />
                </svg>
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
