import React from 'react';
import './Button.css';

/**
 * Reusable Button Component for ByteSpace
 * Variants:
 *  - 'primary' (Electric Lime #D4FB20 background, Shuttle Gray #242528 text, radius 24px)
 *  - 'ghost' (transparent with light text, hover effect)
 *  - 'link' (subtle link style)
 *  - 'icon' (circular or compact icon-only action)
 */
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
    'bytespace-btn',
    `bytespace-btn--${variant}`,
    `bytespace-btn--${size}`,
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
        <span className="bytespace-btn__icon bytespace-btn__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      {children && <span className="bytespace-btn__text">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="bytespace-btn__icon bytespace-btn__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}
