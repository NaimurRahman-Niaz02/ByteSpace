import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/icons/logo-icon.svg';
import starYellowGreenIcon from '../assets/icons/star-icon.svg';
import starBlueIcon from '../assets/icons/star-blue-icon.svg';

// Discover CourseCard & Courses Data
import CourseCard from '../components/landing/FeaturedCourses/CourseCard';
import { featuredCoursesData, courseSharedIcons } from '../data/courses';

// 3D Ornaments
import ornamentRing from '../assets/images/ornament-cone-lime.png';
import ornamentPyramid from '../assets/images/ornament-cone-small.png';
import ornamentSquiggle from '../assets/images/ornament-sphere-1.png';

// Student Avatars for Happy Students
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
            alt="ByteSpace"
            className="bytespace-auth__logo-icon"
          />
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

            {/* Background Course Card (Build Digital Asset) */}
            <div className="bytespace-auth__card-bg">
              <CourseCard
                course={featuredCoursesData[1]}
                icons={authCourseIcons}
              />
            </div>

            {/* Foreground Course Card (the Power of Big Data) */}
            <div className="bytespace-auth__card-fg">
              <CourseCard
                course={featuredCoursesData[2]}
                icons={authCourseIcons}
              />
            </div>

            {/* Happy Students Floating Card */}
            <div className="bytespace-auth__happy-students" aria-label="Happy Students rating and avatars">
              <div className="bytespace-auth__students-header">
                <span className="bytespace-auth__students-title">Happy Students</span>
                <div className="bytespace-auth__students-rating">
                  <span className="bytespace-auth__students-rating-text">4.5 (240)</span>
                  <img
                    src={starBlueIcon}
                    alt=""
                    aria-hidden="true"
                    className="bytespace-auth__students-star"
                    width="16"
                    height="16"
                  />
                </div>
              </div>

              <div className="bytespace-auth__avatar-stack" role="group" aria-label="Student avatars">
                {studentAvatars.map((student) => (
                  <img
                    key={student.id}
                    src={student.src}
                    alt={student.alt}
                    className="bytespace-auth__avatar"
                    width="32"
                    height="32"
                  />
                ))}
                <div className="bytespace-auth__avatar-badge" aria-label="Over 2000 more students">
                  2K+
                </div>
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
            <h2 className="bytespace-auth__card-title bytespace-auth__card-title--register">
              Welcome to ByteSpace
            </h2>

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

            <p className="bytespace-auth__footer-text bytespace-auth__footer-text--register">
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
