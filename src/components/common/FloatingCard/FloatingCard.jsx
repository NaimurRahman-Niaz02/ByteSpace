import React from 'react';
import './FloatingCard.css';

/**
 * Reusable FloatingCard Component
 * Implements glassmorphism backdrop blur and Figma multi-stop shadow 'A'
 */
export default function FloatingCard({
  children,
  className = '',
  style = {},
  ariaLabel,
  ...props
}) {
  return (
    <div
      className={`bytespace-floating-card ${className}`}
      style={style}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}
