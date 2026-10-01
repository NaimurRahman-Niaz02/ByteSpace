import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialsData, testimonialsHeaderData } from '../../../data/testimonials';
import './Testimonials.css';

/**
 * Testimonials Section Component
 * Source of truth: design/landing-page/design-context.md (Figma #34:1175)
 * Approximate desktop dimensions: 1440px x 784px
 * Background: #FAFAFA
 * Features:
 * - 3 ambient radial gradient glow shapes (Lime and Blue, blur: 20px)
 * - Section Header ("Discover What Our Community Is Saying")
 * - 3 Testimonial Cards in a 3-column row with 40px gap
 */
export default function Testimonials() {
  return (
    <section className="bytespace-testimonials" aria-labelledby="testimonials-heading">
      {/* 3 Ambient Radial Gradient Glows (#34:1175) */}
      <div className="bytespace-testimonials__glows" aria-hidden="true">
        <div className="bytespace-testimonials__glow bytespace-testimonials__glow--lime-1" />
        <div className="bytespace-testimonials__glow bytespace-testimonials__glow--blue-1" />
        <div className="bytespace-testimonials__glow bytespace-testimonials__glow--blue-2" />
      </div>

      <div className="bytespace-testimonials__container">
        {/* Section Header */}
        <header className="bytespace-testimonials__header">
          <h2 id="testimonials-heading" className="bytespace-testimonials__title">
            {testimonialsHeaderData.title}
          </h2>
          {testimonialsHeaderData.description && (
            <p className="bytespace-testimonials__description">
              {testimonialsHeaderData.description}
            </p>
          )}
        </header>

        {/* 3 Testimonials Grid */}
        <div
          className="bytespace-testimonials__grid"
          role="region"
          aria-label="Community reviews"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
