import React from 'react';

export function FacebookIcon({ className = 'auth-social-icon', width = 45, height = 45, ...props }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function GoogleIcon({ className = 'auth-social-icon', width = 40, height = 40, ...props }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.24 10.285V13.8h6.887C18.2 16.14 15.64 17.8 12.24 17.8c-3.28 0-6.02-2.7-6.02-6s2.74-6 6.02-6c1.62 0 3.08.6 4.19 1.62l2.62-2.62C17.37 3.2 14.95 2 12.24 2 6.7 2 2.2 6.5 2.2 12s4.5 10 10.04 10c5.78 0 9.6-4.06 9.6-9.76 0-.66-.07-1.3-.2-1.955H12.24z" />
    </svg>
  );
}
