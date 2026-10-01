import React, { useState } from 'react';
import searchIcon from '../../../assets/icons/search-icon.svg';
import Button from '../Button/Button';
import './SearchBar.css';

/**
 * Reusable SearchBar Component
 * Matches Figma Node #1:1772
 * Desktop: Input 461px x 52px, radius 24px, #FFFFFF, search icon, Search button 52px height #D4FB20
 */
export default function SearchBar({
  placeholder = 'Course, topic, creator',
  buttonText = 'Search',
  onSearch,
  className = '',
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      className={`bytespace-searchbar ${className}`}
      onSubmit={handleSubmit}
      role="search"
      aria-label="Course search"
    >
      <div className="bytespace-searchbar__input-wrapper">
        <img
          src={searchIcon}
          alt=""
          aria-hidden="true"
          className="bytespace-searchbar__icon"
          width="24"
          height="24"
        />
        <input
          type="text"
          className="bytespace-searchbar__input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={placeholder}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="bytespace-searchbar__btn"
      >
        {buttonText}
      </Button>
    </form>
  );
}
