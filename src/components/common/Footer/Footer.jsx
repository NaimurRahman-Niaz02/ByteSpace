import React, { useState } from 'react';
import Button from '../Button/Button';
import { footerData } from '../../../data/navigation';
import './Footer.css';

/**
 * Footer Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:1256)
 * Approximate desktop dimensions: 1440px x 525px
 * Background: #FFFFFF
 * Structure:
 * 1. Top Section: Newsletter subscription block (left) & 3 navigation columns (right: Browse, Categories, Platform)
 * 2. Bottom Bar: Copyright notice & legal links (Privacy Policy, Terms of Service, Cookies Settings)
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { brand, newsletter, columns = [], bottomBar } = footerData;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bytespace-footer" aria-label="Site footer">
      <div className="bytespace-footer__container">
        {/* Main Directory & Newsletter Row */}
        <div className="bytespace-footer__main">
          {/* Newsletter Column (Left) */}
          <div className="bytespace-footer__newsletter">
            <div className="bytespace-footer__brand">
              <img
                src={brand.logoIcon}
                alt=""
                className="bytespace-footer__logo-icon"
                aria-hidden="true"
              />
              <span className="bytespace-footer__brand-name">{brand.name}</span>
            </div>

            <p className="bytespace-footer__brand-description">
              {brand.description}
            </p>

            <form
              className="bytespace-footer__form"
              onSubmit={handleSubscribe}
              aria-label="Newsletter subscription"
            >
              <div className="bytespace-footer__input-wrapper">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bytespace-footer__input"
                  required
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bytespace-footer__submit-btn"
                >
                  {newsletter.buttonText.trim()}
                </Button>
              </div>

              {isSubscribed && (
                <p className="bytespace-footer__success" role="status">
                  Thank you for subscribing!
                </p>
              )}

              <p className="bytespace-footer__disclaimer">
                {newsletter.disclaimer}
              </p>
            </form>
          </div>

          {/* 3 Navigation Columns (Right) */}
          <div className="bytespace-footer__nav" role="navigation" aria-label="Footer links">
            {columns.map((column) => (
              <div key={column.id} className="bytespace-footer__col">
                <h4 className="bytespace-footer__col-title">{column.title}</h4>
                <ul className="bytespace-footer__col-list">
                  {column.links.map((link, idx) => (
                    <li key={idx} className="bytespace-footer__col-item">
                      <a href={link.href} className="bytespace-footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="bytespace-footer__divider" aria-hidden="true" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="bytespace-footer__bottom">
          <p className="bytespace-footer__copyright">{bottomBar.copyright}</p>
          <ul className="bytespace-footer__legal-links">
            {bottomBar.legalLinks.map((legal, idx) => (
              <li key={idx} className="bytespace-footer__legal-item">
                <a href={legal.href} className="bytespace-footer__legal-link">
                  {legal.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
