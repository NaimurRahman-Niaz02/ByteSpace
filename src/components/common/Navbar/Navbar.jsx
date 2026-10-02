import React, { useState, useEffect, useRef } from 'react';
import {
  getBrandInfo,
  getHeaderNavLinks,
  getHeaderAuthActions,
  getHeaderCartAction,
} from '../../../core/services/navigationService';
import './Navbar.css';

export default function Navbar() {
  const brandInfo = getBrandInfo();
  const headerNavLinks = getHeaderNavLinks();
  const headerAuthActions = getHeaderAuthActions();
  const headerCartAction = getHeaderCartAction();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutsideClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        <a href="/" className="navbar-brand" aria-label="ByteSpace Home">
          <img
            src={brandInfo.logoIcon}
            alt=""
            aria-hidden="true"
            className="navbar-logo-icon"
            width="29"
            height="32"
          />
          <span className="navbar-brand-name">{brandInfo.name}</span>
        </a>

        <nav className="navbar-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {headerNavLinks.map((item) => (
              <li key={item.id} className="navbar-nav-item">
                <a
                  href={item.href}
                  className={`navbar-nav-link ${
                    item.isActive ? 'navbar-nav-link-active' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-auth">
            {headerAuthActions.map((action) => (
              <a
                key={action.id}
                href={action.href}
                className="navbar-auth-link"
              >
                {action.label}
              </a>
            ))}
          </div>

          <a
            href="#cart"
            className="navbar-cart-btn"
            aria-label={headerCartAction.ariaLabel}
          >
            <img
              src={headerCartAction.icon}
              alt=""
              aria-hidden="true"
              className="navbar-cart-icon"
              width="24"
              height="24"
            />
          </a>

          <button
            ref={hamburgerRef}
            type="button"
            className={`navbar-hamburger ${
              mobileMenuOpen ? 'navbar-hamburger-active' : ''
            }`}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-hamburger-bar" />
            <span className="navbar-hamburger-bar" />
            <span className="navbar-hamburger-bar" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="navbar-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={menuRef}
        className={`navbar-mobile-menu ${
          mobileMenuOpen ? 'navbar-mobile-menu-open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="navbar-mobile-list">
          {headerNavLinks.map((item) => (
            <li key={`mobile-${item.id}`}>
              <a
                href={item.href}
                className={`navbar-mobile-link ${
                  item.isActive ? 'navbar-mobile-link-active' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-divider" />
          {headerAuthActions.map((action) => (
            <li key={`mobile-${action.id}`}>
              <a
                href={action.href}
                className="navbar-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
