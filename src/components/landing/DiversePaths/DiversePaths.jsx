import React from 'react';
import CategoryCard from './CategoryCard';
import {
  diverseLearningPaths,
  categoriesSectionHeader,
} from '../../../data/categories';
import './DiversePaths.css';

/**
 * DiversePaths Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:684, #34:725)
 * Section structure:
 * - Section Header: Heading S ("Explore Diverse Learning Paths at Bytespace") + Description
 * - Categories Grid: 6 CategoryCard items in 3 cols x 2 rows (desktop, 40px gap, ~1202px wide)
 */
export default function DiversePaths() {
  return (
    <section
      className="bytespace-diverse-paths"
      aria-labelledby="diverse-paths-heading"
    >
      <div className="bytespace-diverse-paths__container">
        {/* Section Header (Figma #34:684) */}
        <header className="bytespace-diverse-paths__header">
          <h2
            id="diverse-paths-heading"
            className="bytespace-diverse-paths__title"
          >
            {categoriesSectionHeader.title}
          </h2>
          <p className="bytespace-diverse-paths__description">
            {categoriesSectionHeader.description}
          </p>
        </header>

        {/* Categories Grid (Figma #34:725) */}
        <div
          className="bytespace-diverse-paths__grid"
          role="region"
          aria-label="Diverse learning paths list"
        >
          {diverseLearningPaths.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
