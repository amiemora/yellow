'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <span className="hero-badge-dot" />
            Available for Freelance &amp; Contract Work
          </motion.div>

          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            <span className="hero-title-gradient">AI Automation</span> &amp;{' '}
            Data Pipeline Architect
          </motion.h1>

          <motion.p
            className="hero-description"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            I architect end-to-end cloud systems that automate complex workflows,
            extract critical business intelligence, and significantly reduce
            operational overhead.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <a className="btn-primary" href="mailto:xamiemmorales@gmail.com" id="cta-hire">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Hire Me
            </a>
            <a className="btn-secondary" href="#services" id="cta-demos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Interactive Demos
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            <div>
              <div className="hero-stat-value">48+</div>
              <div className="hero-stat-label">Cloud Functions in Production</div>
            </div>
            <div>
              <div className="hero-stat-value">85%</div>
              <div className="hero-stat-label">Cost Reduction Achieved</div>
            </div>
            <div>
              <div className="hero-stat-value">10M+</div>
              <div className="hero-stat-label">Records Processed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
