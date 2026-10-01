import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import { testimonialsData, testimonialsHeaderData } from '../../../data/testimonials';

describe('Testimonials Section', () => {
  test('renders header title', () => {
    render(<Testimonials />);
    expect(
      screen.getByRole('heading', { level: 2, name: testimonialsHeaderData.title })
    ).toBeInTheDocument();
  });

  test('renders exactly 3 testimonial cards with names and roles', () => {
    render(<Testimonials />);
    expect(testimonialsData).toHaveLength(3);
    testimonialsData.forEach((t) => {
      expect(screen.getByRole('heading', { level: 3, name: t.name })).toBeInTheDocument();
      expect(screen.getByText(t.role)).toBeInTheDocument();
    });
  });
});
