import React from 'react';
import './Testimonials.css';

/**
 * TestimonialCard Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:1182)
 * Card elements:
 * - Avatar circle (52px x 52px, radius 100px)
 * - Author name (Heading XS 20px)
 * - Author role (Body L 18px / Body S 14px in #003BE2)
 * - Star rating (5 filled star-icon.svg)
 * - Quote / Review text (Black/700 #4F4F4F)
 * - Card background #FFFFFF, border 1px solid #CED0D3, border-radius 16px
 */
export default function TestimonialCard({ testimonial }) {
  if (!testimonial) return null;

  const { name, role, avatar, quote } = testimonial;

  return (
    <article className="bytespace-testimonial-card">
      {/* 80px Circular Avatar */}
      <div className="bytespace-testimonial-card__avatar-frame">
        <img
          src={avatar}
          alt={name}
          className="bytespace-testimonial-card__avatar"
          loading="lazy"
        />
      </div>

      {/* Author Name and Role */}
      <div className="bytespace-testimonial-card__author-info">
        <h3 className="bytespace-testimonial-card__name">{name}</h3>
        <span className="bytespace-testimonial-card__role">{role}</span>
      </div>

      {/* Quote / Review Text */}
      <blockquote className="bytespace-testimonial-card__quote">
        “{quote}”
      </blockquote>
    </article>
  );
}
