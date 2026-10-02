import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('renders Hero heading on home page', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /Get Access to Hundreds Courses Available/i,
  });
  expect(headingElement).toBeInTheDocument();
});
