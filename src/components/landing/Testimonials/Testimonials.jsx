import React from 'react';
import TestimonialCard from './TestimonialCard';
import { getTestimonials, getTestimonialsHeader } from '../../../core/services/testimonialService';
import './Testimonials.css';

export default function Testimonials() {
  const testimonialsData = getTestimonials();
  const testimonialsHeaderData = getTestimonialsHeader();

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-glows" aria-hidden="true">
        <div className="testimonials-glow testimonials-glow-lime-1" />
        <div className="testimonials-glow testimonials-glow-lime-2" />
        <div className="testimonials-glow testimonials-glow-blue" />
      </div>

      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2 id="testimonials-heading" className="testimonials-title">
            {testimonialsHeaderData.title}
          </h2>
          {testimonialsHeaderData.description && (
            <p className="testimonials-desc">
              {testimonialsHeaderData.description}
            </p>
          )}
        </header>

        <div className="testimonials-grid" role="region" aria-label="Community reviews">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
