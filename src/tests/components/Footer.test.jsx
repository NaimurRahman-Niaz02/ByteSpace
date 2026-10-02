import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../components/common/Footer/Footer';
import { footerData } from '../../core/data/navigation';

describe('Footer Component', () => {
  test('renders brand name, newsletter form, and disclaimer', () => {
    render(<Footer />);
    expect(screen.getByText(footerData.brand.name)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(footerData.newsletter.placeholder)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: footerData.newsletter.buttonText.trim() })).toBeInTheDocument();
    expect(screen.getByText(footerData.newsletter.disclaimer)).toBeInTheDocument();
  });

  test('handles newsletter submission', () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText(footerData.newsletter.placeholder);
    const button = screen.getByRole('button', { name: footerData.newsletter.buttonText.trim() });

    fireEvent.change(input, { target: { value: 'learner@bytespace.com' } });
    fireEvent.click(button);

    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
  });

  test('renders 3 directory columns and bottom bar links', () => {
    render(<Footer />);
    footerData.columns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument();
      });
    });

    expect(screen.getByText(footerData.bottomBar.copyright)).toBeInTheDocument();
  });
});
