/**
 * ByteSpace Navigation & Header/Footer Data
 * Source of truth: design/landing-page/design-context.md (Figma #1:1778, #34:1256)
 */

import logoIcon from '../assets/icons/logo-icon.svg';
import cartIcon from '../assets/icons/cart-icon.svg';
import searchIcon from '../assets/icons/search-icon.svg';

export const brandInfo = {
  name: 'ByteSpace',
  logoIcon: logoIcon,
  tagline: 'Unlock your creativity and master new skills',
};

export const headerNavLinks = [
  { id: 'nav-home', label: 'Home', href: '/', isActive: true },
  { id: 'nav-courses', label: 'Courses', href: '#courses', isActive: false },
  { id: 'nav-creators', label: 'Creators', href: '#creators', isActive: false },
];

export const headerAuthActions = [
  { id: 'auth-signin', label: 'Sign In', href: '/login', variant: 'ghost' },
  { id: 'auth-join', label: 'Join Us', href: '/register', variant: 'link' },
];

export const headerCartAction = {
  id: 'header-cart',
  label: 'Shopping Cart',
  icon: cartIcon,
  ariaLabel: 'View shopping cart',
};

export const heroSearchData = {
  placeholder: 'Search course, creator, category...',
  buttonText: 'Search',
  icon: searchIcon,
};

export const footerData = {
  brand: {
    name: 'ByteSpace',
    logoIcon: logoIcon,
    description: 'Stay Up to date with our latest features and releases by joining our newsletter.',
  },
  newsletter: {
    placeholder: 'Enter your email',
    buttonText: 'Search ',
    disclaimer: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
  },
  columns: [
    {
      id: 'footer-col-browse',
      title: 'Browse',
      links: [
        { label: 'Featured Courses', href: '#courses' },
        { label: 'Featured Categories', href: '#categories' },
        { label: 'Business', href: '#business' },
        { label: 'IT', href: '#it' },
        { label: 'Design', href: '#design' },
      ],
    },
    {
      id: 'footer-col-categories',
      title: 'Categories',
      links: [
        { label: 'Development', href: '#development' },
        { label: 'Marketing', href: '#marketing' },
        { label: 'Photography', href: '#photography' },
        { label: 'Finance', href: '#finance' },
        { label: 'Sport', href: '#sport' },
      ],
    },
    {
      id: 'footer-col-platform',
      title: 'Platform',
      links: [
        { label: 'Become a Creator', href: '#creator' },
        { label: 'Affiliate Program', href: '#affiliate' },
        { label: 'Contact', href: '#contact' },
        { label: 'Help', href: '#help' },
        { label: 'About', href: '#about' },
      ],
    },
  ],
  bottomBar: {
    copyright: '@ 2023 ByteSpace. All rights reserved.',
    legalLinks: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookies Settings', href: '#cookies' },
    ],
  },
};
