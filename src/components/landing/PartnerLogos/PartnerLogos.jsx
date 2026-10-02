import React from 'react';
import { partnersData } from '../../../data/partners';
import './PartnerLogos.css';

export default function PartnerLogos() {
  return (
    <section className="partners" aria-label="Partner Organizations">
      <div className="partners-container">
        <div className="partners-track" role="list">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partners-item" role="listitem">
              <img
                src={partner.logo}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="partners-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
