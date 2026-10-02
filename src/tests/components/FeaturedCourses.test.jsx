import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeaturedCourses from '../../components/landing/FeaturedCourses/FeaturedCourses';
import { featuredCoursesData, coursesSectionHeader } from '../../data/courses';
import { categoryTabs } from '../../data/categories';

describe('FeaturedCourses Section', () => {
  test('renders section heading and description accurately', () => {
    render(<FeaturedCourses />);
    expect(screen.getByRole('heading', { level: 2, name: coursesSectionHeader.title })).toBeInTheDocument();
    expect(screen.getByText(coursesSectionHeader.description)).toBeInTheDocument();
  });

  test('renders all 19 category tabs and sets "Featured" as active by default', () => {
    render(<FeaturedCourses />);
    const buttons = screen.getAllByRole('button');
    // Ensure all 19 tab labels exist
    categoryTabs.forEach((tab) => {
      expect(screen.getByRole('button', { name: tab.label })).toBeInTheDocument();
    });

    const featuredTab = screen.getByRole('button', { name: 'Featured' });
    expect(featuredTab).toHaveAttribute('aria-pressed', 'true');
    expect(featuredTab).toHaveClass('category-tab-active');
  });

  test('updates active category tab state on click', () => {
    render(<FeaturedCourses />);
    const webDevTab = screen.getByRole('button', { name: 'Web Development' });
    const featuredTab = screen.getByRole('button', { name: 'Featured' });

    fireEvent.click(webDevTab);
    expect(webDevTab).toHaveAttribute('aria-pressed', 'true');
    expect(webDevTab).toHaveClass('category-tab-active');
    expect(featuredTab).toHaveAttribute('aria-pressed', 'false');
    expect(featuredTab).not.toHaveClass('category-tab-active');
  });

  test('renders exactly 6 course cards with titles, pricing, and instructors', () => {
    render(<FeaturedCourses />);
    featuredCoursesData.forEach((course) => {
      expect(screen.getByRole('heading', { level: 3, name: course.title })).toBeInTheDocument();
    });

    const prices = screen.getAllByText('$25');
    expect(prices).toHaveLength(6);

    const instructors = screen.getAllByText('purepearl studio');
    expect(instructors).toHaveLength(6);
  });
});
