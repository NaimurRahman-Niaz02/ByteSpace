import React from 'react';
import './DiversePaths.css';

export default function CategoryCard({ category }) {
  if (!category) return null;

  const { title, icon, coursesCount } = category;

  return (
    <div className="category-card">
      <div className="category-card-icon-wrap" aria-hidden="true">
        <img src={icon} alt="" className="category-card-icon" loading="lazy" />
      </div>

      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        {coursesCount && <span className="category-card-count">{coursesCount}</span>}
      </div>
    </div>
  );
}
