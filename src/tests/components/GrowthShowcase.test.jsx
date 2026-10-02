import React from 'react';
import { render, screen } from '@testing-library/react';
import GrowthShowcase from '../../components/landing/GrowthShowcase/GrowthShowcase';
import { growthShowcaseData } from '../../data/features';

describe('GrowthShowcase Section', () => {
  test('renders Row 1 heading, description, and metrics accurately', () => {
    render(<GrowthShowcase />);
    const { learnerGrowth } = growthShowcaseData;

    expect(
      screen.getByRole('heading', { level: 2, name: learnerGrowth.heading })
    ).toBeInTheDocument();
    expect(screen.getByText(learnerGrowth.description)).toBeInTheDocument();

    learnerGrowth.metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  test('renders Row 2 heading, description, and bullet points accurately', () => {
    render(<GrowthShowcase />);
    const { creatorManagement } = growthShowcaseData;

    expect(
      screen.getByRole('heading', { level: 2, name: creatorManagement.heading })
    ).toBeInTheDocument();
    expect(screen.getByText(creatorManagement.description)).toBeInTheDocument();

    creatorManagement.bulletPoints.forEach((bullet) => {
      expect(screen.getByText(bullet.text)).toBeInTheDocument();
    });
  });

  test('renders floating cards with correct metrics and values', () => {
    render(<GrowthShowcase />);
    // Progress card
    expect(screen.getByText('Learning Progress')).toBeInTheDocument();

    // Revenue cards
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('$120.29')).toBeInTheDocument();
    expect(screen.getByText('Year to Date')).toBeInTheDocument();
    expect(screen.getByText('$1,200.38')).toBeInTheDocument();

    // Happy students card
    expect(screen.getByText('Happy Students')).toBeInTheDocument();
    expect(screen.getAllByText('4.5').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('(240)')).toBeInTheDocument();
    expect(screen.getByText('2K+')).toBeInTheDocument();
  });
});
