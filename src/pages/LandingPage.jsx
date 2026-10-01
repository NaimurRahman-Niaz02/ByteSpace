import React from 'react';
import Hero from '../components/landing/Hero/Hero';
import PartnerLogos from '../components/landing/PartnerLogos/PartnerLogos';
import FeaturedCourses from '../components/landing/FeaturedCourses/FeaturedCourses';
import DiversePaths from '../components/landing/DiversePaths/DiversePaths';
import GrowthShowcase from '../components/landing/GrowthShowcase/GrowthShowcase';
import CTASection from '../components/landing/CTASection/CTASection';
import Testimonials from '../components/landing/Testimonials/Testimonials';
import Footer from '../components/common/Footer/Footer';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main>
        <Hero />
        <PartnerLogos />
        <FeaturedCourses />
        <DiversePaths />
        <GrowthShowcase />
        <CTASection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
