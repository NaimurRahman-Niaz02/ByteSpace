import React, { useState } from 'react';
import Button from '../Button/Button';
import { getFooterData } from '../../../core/services/navigationService';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { brand, newsletter, columns = [], bottomBar } = getFooterData();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <div className="footer-brand">
              <img src={brand.logoIcon} alt="" className="footer-logo-icon" aria-hidden="true" />
              <span className="footer-brand-name">{brand.name}</span>
            </div>

            <p className="footer-brand-desc">{brand.description}</p>

            <form className="footer-form" onSubmit={handleSubscribe} aria-label="Newsletter subscription">
              <div className="footer-input-wrap">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-input"
                  required
                  aria-label="Email address"
                />
                <Button type="submit" variant="primary" className="footer-submit-btn">
                  {newsletter.buttonText.trim()}
                </Button>
              </div>

              {isSubscribed && (
                <p className="footer-success" role="status">
                  Thank you for subscribing!
                </p>
              )}

              <p className="footer-disclaimer">{newsletter.disclaimer}</p>
            </form>
          </div>

          <div className="footer-nav" role="navigation" aria-label="Footer links">
            {columns.map((column) => (
              <div key={column.id} className="footer-col">
                <ul className="footer-col-list">
                  {column.links.map((link, idx) => (
                    <li key={idx} className="footer-col-item">
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copyright">{bottomBar.copyright}</p>
          <ul className="footer-legal-links">
            {bottomBar.legalLinks.map((legal, idx) => (
              <li key={idx} className="footer-legal-item">
                <a href={legal.href} className="footer-legal-link">
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
