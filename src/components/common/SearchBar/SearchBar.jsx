import React, { useState } from 'react';
import { searchIcon } from '../../../assets';
import Button from '../Button/Button';
import './SearchBar.css';

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
      className={`searchbar ${className}`}
      onSubmit={handleSubmit}
      role="search"
      aria-label="Course search"
    >
      <div className="searchbar-input-wrap">
        <img src={searchIcon} alt="" aria-hidden="true" className="searchbar-icon" width="24" height="24" />
        <input
          type="text"
          className="searchbar-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={placeholder}
        />
      </div>
      <Button type="submit" variant="primary" className="searchbar-btn">
        {buttonText}
      </Button>
    </form>
  );
}
