import React from 'react';
import LearnerGrowthRow from './LearnerGrowthRow';
import CreatorManagementRow from './CreatorManagementRow';
import { growthShowcaseData } from '../../../data/features';
import './GrowthShowcase.css';

/**
 * GrowthShowcase Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:1159)
 * - Canvas width: 1440px, Section background: #FAFAFA
 * - Row 1 (#34:1157): Learner Growth (Text Left, Visual & Floating Cards Right)
 * - Row 2 (#34:1158): Creator Management (Visual & Floating Cards Left, Text Right)
 * - Vertical padding: 120px, Gap between rows: 120px
 */
export default function GrowthShowcase() {
  const { learnerGrowth, creatorManagement } = growthShowcaseData;

  return (
    <section
      className="bytespace-showcase"
      aria-label="Professional Growth & Creator Showcase"
    >
      <div className="bytespace-showcase__container">
        {/* Row 1: Learner Growth */}
        <LearnerGrowthRow data={learnerGrowth} />

        {/* Row 2: Creator Management */}
        <CreatorManagementRow data={creatorManagement} />
      </div>
    </section>
  );
}
