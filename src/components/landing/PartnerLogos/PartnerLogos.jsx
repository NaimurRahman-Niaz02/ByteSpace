import React from 'react';
import { getPartners } from '../../../core/services/partnerService';
import './PartnerLogos.css';

export default function PartnerLogos() {
  const partners = getPartners();

  return (
    <section className="partners" aria-label="Partner Organizations">
      <div className="partners-container">
        <div className="partners-track" role="list">
          {partners.map((partner) => (
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
