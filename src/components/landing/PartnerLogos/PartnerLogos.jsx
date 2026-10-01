import React from 'react';
import { partnersData } from '../../../data/partners';
import './PartnerLogos.css';

/**
 * Partner Logos Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #1:1794, #1:1708)
 * Canvas: 1440px x 202px, background: Shuttle Gray/50 (#F5F5F6)
 * 5 partner SVG logos aligned in a flex row with 72px gap
 */
export default function PartnerLogos() {
  return (
    <section className="bytespace-partners" aria-label="Partner Organizations">
      <div className="bytespace-partners__container">
        <div className="bytespace-partners__track" role="list">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="bytespace-partners__item"
              role="listitem"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="bytespace-partners__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
