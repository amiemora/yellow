'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import CaseStudySection from './components/CaseStudySection';
import TechMarquee from './components/TechMarquee';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <CaseStudySection />
      <TechMarquee />
      <Footer />
    </main>
  );
}
