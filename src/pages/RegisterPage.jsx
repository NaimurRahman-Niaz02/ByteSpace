import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthShowcase from '../components/auth/AuthShowcase/AuthShowcase';
import { logoIcon } from '../assets';
import './Auth.css';

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
        <AuthShowcase
          title="Sign up and come in"
          subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
        />

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
