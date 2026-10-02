import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthShowcase from '../components/auth/AuthShowcase/AuthShowcase';
import {
  logoIcon,
  FacebookIcon,
  GoogleIcon,
} from '../assets';
import './Auth.css';

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
        <AuthShowcase
          title="Sign in with ease"
          subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />

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
