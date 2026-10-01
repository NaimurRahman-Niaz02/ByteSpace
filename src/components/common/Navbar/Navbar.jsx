import React, { useState } from 'react';
import {
  brandInfo,
  headerNavLinks,
  headerAuthActions,
  headerCartAction,
} from '../../../data/navigation';
import './Navbar.css';

/**
 * Navbar Component
 * Matches Figma Node #1:1778 (Header_Frame)
 * Height 120px, ByteSpace logo (Clash Display 24px + Lime icon), Nav links (16px), Actions + Cart
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bytespace-navbar" role="banner">
      <div className="bytespace-navbar__container">
        {/* Brand Logo */}
        <a href="/" className="bytespace-navbar__brand" aria-label="ByteSpace Home">
          <img
            src={brandInfo.logoIcon}
            alt=""
            aria-hidden="true"
            className="bytespace-navbar__logo-icon"
            width="29"
            height="32"
          />
          <span className="bytespace-navbar__brand-name">{brandInfo.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="bytespace-navbar__nav" aria-label="Main Navigation">
          <ul className="bytespace-navbar__nav-list">
            {headerNavLinks.map((item) => (
              <li key={item.id} className="bytespace-navbar__nav-item">
                <a
                  href={item.href}
                  className={`bytespace-navbar__nav-link ${
                    item.isActive ? 'bytespace-navbar__nav-link--active' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Sign In / Join Us & Shopping Cart */}
        <div className="bytespace-navbar__actions">
          <div className="bytespace-navbar__auth">
            {headerAuthActions.map((action) => (
              <a
                key={action.id}
                href={action.href}
                className="bytespace-navbar__auth-link"
              >
                {action.label}
              </a>
            ))}
          </div>

          <a
            href="#cart"
            className="bytespace-navbar__cart-btn"
            aria-label={headerCartAction.ariaLabel}
          >
            <img
              src={headerCartAction.icon}
              alt=""
              aria-hidden="true"
              className="bytespace-navbar__cart-icon"
              width="24"
              height="24"
            />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className={`bytespace-navbar__hamburger ${
              mobileMenuOpen ? 'bytespace-navbar__hamburger--active' : ''
            }`}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bytespace-navbar__hamburger-bar" />
            <span className="bytespace-navbar__hamburger-bar" />
            <span className="bytespace-navbar__hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown / Drawer */}
      <div
        className={`bytespace-navbar__mobile-menu ${
          mobileMenuOpen ? 'bytespace-navbar__mobile-menu--open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="bytespace-navbar__mobile-list">
          {headerNavLinks.map((item) => (
            <li key={`mobile-${item.id}`}>
              <a
                href={item.href}
                className={`bytespace-navbar__mobile-link ${
                  item.isActive ? 'bytespace-navbar__mobile-link--active' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="bytespace-navbar__mobile-divider" />
          {headerAuthActions.map((action) => (
            <li key={`mobile-${action.id}`}>
              <a
                href={action.href}
                className="bytespace-navbar__mobile-link"
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
