import React from 'react';
import './FeaturedCourses.css';

export default function CategoryTabs({ tabs = [], activeTabId, onSelectTab }) {
  const row1 = tabs.filter((t) => t.row === 1);
  const row2 = tabs.filter((t) => t.row === 2);
  const row3 = tabs.filter((t) => t.row === 3);

  const renderTab = (tab) => {
    const isActive = activeTabId === tab.id;
    if (tab.id === 'cat-more') {
      return (
        <button
          key={tab.id}
          type="button"
          className="category-tab-more"
          onClick={() => onSelectTab && onSelectTab(tab.id)}
        >
          {tab.label}
        </button>
      );
    }

    return (
      <button
        key={tab.id}
        type="button"
        className={`category-tab ${isActive ? 'category-tab-active' : ''} ${
          tab.isAccent ? 'category-tab-accent' : ''
        }`}
        onClick={() => onSelectTab && onSelectTab(tab.id)}
        aria-pressed={isActive}
      >
        {tab.label}
      </button>
    );
  };

  return (
    <div className="category-tabs" role="toolbar" aria-label="Course Categories">
      <div className="category-tabs-row category-tabs-row-1">
        {row1.map(renderTab)}
      </div>
      <div className="category-tabs-row category-tabs-row-2">
        {row2.map(renderTab)}
      </div>
      <div className="category-tabs-row category-tabs-row-3">
        {row3.map(renderTab)}
      </div>
    </div>
  );
}
