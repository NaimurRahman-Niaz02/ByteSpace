import React from 'react';
import CategoryCard from './CategoryCard';
import {
  diverseLearningPaths,
  categoriesSectionHeader,
} from '../../../data/categories';
import './DiversePaths.css';

export default function DiversePaths() {
  return (
    <section className="diverse-paths" aria-labelledby="diverse-paths-heading">
      <div className="diverse-paths-container">
        <header className="diverse-paths-header">
          <h2 id="diverse-paths-heading" className="diverse-paths-title">
            {categoriesSectionHeader.title}
          </h2>
          <p className="diverse-paths-desc">
            {categoriesSectionHeader.description}
          </p>
        </header>

        <div className="diverse-paths-grid" role="region" aria-label="Diverse learning paths list">
          {diverseLearningPaths.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
