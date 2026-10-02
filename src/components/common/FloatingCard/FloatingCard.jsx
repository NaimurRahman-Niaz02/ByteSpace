import React from 'react';
import './FloatingCard.css';

export default function FloatingCard({
  children,
  className = '',
  style = {},
  ariaLabel,
  ...props
}) {
  return (
    <div
      className={`floating-card ${className}`}
      style={style}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}
