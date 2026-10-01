import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

describe('LoginPage Component', () => {
  test('renders Login page headings and inputs', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Sign in with ease')).toBeInTheDocument();
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
    expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
  });

  test('allows entering email and password on Login page', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'secretpass' } });

    expect(emailInput.value).toBe('user@example.com');
    expect(passwordInput.value).toBe('secretpass');
  });

  test('renders logo without ByteSpace text label and visual stage elements', () => {
    const { container } = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const brandLink = screen.getByRole('link', { name: /ByteSpace/i });
    expect(brandLink.querySelector('.bytespace-auth__brand-name')).toBeNull();

    expect(screen.getByText('Build Digital Asset')).toBeInTheDocument();
    expect(screen.getByText('the Power of Big Data')).toBeInTheDocument();
    expect(screen.getByText('Happy Students')).toBeInTheDocument();
    expect(screen.getByText('2K+')).toBeInTheDocument();
  });
});

describe('RegisterPage Component', () => {
  test('renders Register page headings and inputs', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Sign up and come in')).toBeInTheDocument();
    expect(screen.getByText('Welcome to ByteSpace')).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
    expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
  });

  test('allows entering form data on Register page', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(nameInput, { target: { value: 'Jamie Davis' } });
    fireEvent.change(emailInput, { target: { value: 'jamie@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'mysecurepassword' } });

    expect(nameInput.value).toBe('Jamie Davis');
    expect(emailInput.value).toBe('jamie@example.com');
    expect(passwordInput.value).toBe('mysecurepassword');
  });

  test('renders logo without ByteSpace text label and visual stage elements', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const brandLink = screen.getByRole('link', { name: /ByteSpace/i });
    expect(brandLink.querySelector('.bytespace-auth__brand-name')).toBeNull();

    expect(screen.getByText('Build Digital Asset')).toBeInTheDocument();
    expect(screen.getByText('the Power of Big Data')).toBeInTheDocument();
    expect(screen.getByText('Happy Students')).toBeInTheDocument();
    expect(screen.getByText('2K+')).toBeInTheDocument();
  });
});
