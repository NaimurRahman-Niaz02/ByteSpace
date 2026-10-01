import React from 'react';
import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';
import { creatorCTAData } from '../../../data/features';

describe('CTASection Component', () => {
  test('renders heading with highlighted Creator text', () => {
    render(<CTASection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByText(creatorCTAData.headlineHighlight)).toHaveClass('bytespace-cta__highlight');
  });

  test('renders description and Join as Creator button', () => {
    render(<CTASection />);
    expect(screen.getByText(creatorCTAData.description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: creatorCTAData.buttonText })).toBeInTheDocument();
  });
});
