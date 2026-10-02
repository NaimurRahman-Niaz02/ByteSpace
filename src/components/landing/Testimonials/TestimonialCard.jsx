import React from 'react';
import './Testimonials.css';

export default function TestimonialCard({ testimonial }) {
  if (!testimonial) return null;

  const { name, role, avatar, quote } = testimonial;

  return (
    <article className="testimonial-card">
      <div className="testimonial-avatar-frame">
        <img
          src={avatar}
          alt={name}
          className="testimonial-avatar"
          loading="lazy"
        />
      </div>

      <div className="testimonial-author-info">
        <h3 className="testimonial-name">{name}</h3>
        <span className="testimonial-role">{role}</span>
      </div>

      <blockquote className="testimonial-quote">
        “{quote}”
      </blockquote>
    </article>
  );
}
