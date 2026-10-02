import React from 'react';
import LearnerGrowthRow from './LearnerGrowthRow';
import CreatorManagementRow from './CreatorManagementRow';
import { getGrowthShowcaseData } from '../../../core/services/featureService';
import './GrowthShowcase.css';

export default function GrowthShowcase() {
  const { learnerGrowth, creatorManagement } = getGrowthShowcaseData();

  return (
    <section className="showcase" aria-label="Professional Growth & Creator Showcase">
      <div className="showcase-glows" aria-hidden="true">
        <div className="showcase-glow showcase-glow-row1-lime" />
        <div className="showcase-glow showcase-glow-row1-blue" />
        <div className="showcase-glow showcase-glow-row2-lime" />
        <div className="showcase-glow showcase-glow-row2-blue" />
      </div>

      <div className="showcase-container">
        <LearnerGrowthRow data={learnerGrowth} />
        <CreatorManagementRow data={creatorManagement} />
      </div>
    </section>
  );
}
