import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  icon = null,
  iconPosition = 'left',
  ariaLabel,
  ...props
}) {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    size && size !== 'default' ? `btn-${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn-icon-wrap btn-icon-left" aria-hidden="true">{icon}</span>
      )}
      {children && <span className="btn-text">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="btn-icon-wrap btn-icon-right" aria-hidden="true">{icon}</span>
      )}
    </button>
  );
}
