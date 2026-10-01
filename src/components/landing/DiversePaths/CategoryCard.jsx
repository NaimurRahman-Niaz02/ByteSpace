import React from 'react';
import './DiversePaths.css';

/**
 * CategoryCard Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:725)
 * Card elements:
 * - Lime icon circle (40px radius, 12px padding)
 * - Category SVG icon (36px x 36px)
 * - Category title (Label XL 20px)
 * - Courses count label (Body S 14px)
 * - Border: 1px solid #CED0D3
 * - Border radius: 24px
 */
export default function CategoryCard({ category }) {
  if (!category) return null;

  const { title, icon, coursesCount } = category;

  return (
    <div className="bytespace-category-card">
      <div className="bytespace-category-card__icon-wrapper" aria-hidden="true">
        <img
          src={icon}
          alt=""
          className="bytespace-category-card__icon"
          loading="lazy"
        />
      </div>

      <div className="bytespace-category-card__content">
        <h3 className="bytespace-category-card__title">{title}</h3>
        {coursesCount && (
          <span className="bytespace-category-card__count">{coursesCount}</span>
        )}
      </div>
    </div>
  );
}
