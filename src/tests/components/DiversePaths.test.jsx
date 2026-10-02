import React from 'react';
import { render, screen } from '@testing-library/react';
import DiversePaths from '../../components/landing/DiversePaths/DiversePaths';
import { diverseLearningPaths, categoriesSectionHeader } from '../../core/data/categories';

describe('DiversePaths Section', () => {
  test('renders section heading and description accurately', () => {
    render(<DiversePaths />);
    expect(
      screen.getByRole('heading', { level: 2, name: categoriesSectionHeader.title })
    ).toBeInTheDocument();
    expect(screen.getByText(categoriesSectionHeader.description)).toBeInTheDocument();
  });

  test('renders exactly 6 category cards with correct titles and course counts', () => {
    render(<DiversePaths />);
    expect(diverseLearningPaths).toHaveLength(6);

    diverseLearningPaths.forEach((category) => {
      expect(
        screen.getByRole('heading', { level: 3, name: category.title })
      ).toBeInTheDocument();
    });

    diverseLearningPaths
      .filter((category) => Boolean(category.coursesCount))
      .forEach((category) => {
        const countMatches = screen.getAllByText(
          new RegExp(String(category.coursesCount), 'i')
        );
        expect(countMatches.length).toBeGreaterThan(0);
      });
  });

  test('renders all 6 category SVG icons', () => {
    render(<DiversePaths />);
    const iconImages = screen.getAllByRole('img');
    expect(iconImages).toHaveLength(6);

    iconImages.forEach((img) => {
      expect(img).toHaveAttribute('src');
    });
  });
});