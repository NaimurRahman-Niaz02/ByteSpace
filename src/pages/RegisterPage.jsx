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

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="auth-page" data-testid="register-page">
      <header className="auth-header">
        <Link to="/" className="auth-brand" aria-label="ByteSpace Home">
          <img src={logoIcon} alt="ByteSpace" className="auth-logo-icon" />
        </Link>
      </header>

      <main className="auth-container">
        <div className="auth-left">
          <h1 className="auth-heading">Sign up and come in</h1>
          <p className="auth-subtitle">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
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
            <span className="auth-card-eyebrow">Create an Account</span>
            <h2 className="auth-card-title auth-card-title-register">
              Welcome to ByteSpace
            </h2>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-field">
                <label htmlFor="register-name" className="auth-label">
                  Full Name
                </label>
                <input
                  id="register-name"
                  type="text"
                  className="auth-input"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="auth-field">
                <label htmlFor="register-email" className="auth-label">
                  Email
                </label>
                <input
                  id="register-email"
                  type="email"
                  className="auth-input"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-field">
                <label htmlFor="register-password" className="auth-label">
                  Password
                </label>
                <input
                  id="register-password"
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
                  Continue
                </button>
              </div>
            </form>

            <p className="auth-footer-text auth-footer-text-register">
              Already have an account?
              <Link to="/login" className="auth-footer-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
