import React from 'react';
import './FeaturedCourses.css';

/**
 * CategoryTabs Component
 * Source of truth: design/landing-page/design-context.md (Figma #21:33, #21:56, #21:63)
 * Renders 19 category pills in 3 balanced rows on desktop,
 * and handles active selection styling.
 */
export default function CategoryTabs({ tabs = [], activeTabId, onSelectTab }) {
  // Group tabs by row (1, 2, 3) for desktop 3-row layout fidelity
  const row1 = tabs.filter((t) => t.row === 1);
  const row2 = tabs.filter((t) => t.row === 2);
  const row3 = tabs.filter((t) => t.row === 3);

  const renderTab = (tab) => {
    const isActive = activeTabId === tab.id;
    return (
      <button
        key={tab.id}
        type="button"
        className={`bytespace-category-tab ${isActive ? 'bytespace-category-tab--active' : ''} ${
          tab.isAccent ? 'bytespace-category-tab--accent' : ''
        }`}
        onClick={() => onSelectTab && onSelectTab(tab.id)}
        aria-pressed={isActive}
      >
        {tab.label}
      </button>
    );
  };

  return (
    <div className="bytespace-category-tabs" role="toolbar" aria-label="Course Categories">
      <div className="bytespace-category-tabs__row bytespace-category-tabs__row--1">
        {row1.map(renderTab)}
      </div>
      <div className="bytespace-category-tabs__row bytespace-category-tabs__row--2">
        {row2.map(renderTab)}
      </div>
      <div className="bytespace-category-tabs__row bytespace-category-tabs__row--3">
        {row3.map(renderTab)}
      </div>
    </div>
  );
}
