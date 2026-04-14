'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    transition: { duration: 0.3 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const engineeringPillars = [
  {
    icon: '🗄️',
    accentColor: 'var(--accent-cyan)',
    accentGlow: 'rgba(6, 182, 212, 0.12)',
    accentBorder: 'rgba(6, 182, 212, 0.2)',
    label: 'Enterprise Data Warehouse',
    title: 'PostgreSQL EDW Migration',
    description:
      'Architected a complete migration from a fragmented Firestore NoSQL document store to a centralized, relationally-mapped PostgreSQL Enterprise Data Warehouse. Designed normalized schemas with proper indexing strategies to support complex cross-entity queries that were impossible in the previous architecture.',
    metrics: [
      { value: '10x', label: 'Query Performance Gain' },
      { value: '100%', label: 'Data Integrity' },
    ],
    techTags: ['PostgreSQL', 'Schema Design', 'Index Optimization', 'Cloud SQL'],
  },
  {
    icon: '⚡',
    accentColor: 'var(--accent-yellow)',
    accentGlow: 'rgba(250, 204, 21, 0.12)',
    accentBorder: 'rgba(250, 204, 21, 0.2)',
    label: 'Event-Driven Webhook Dispatcher',
    title: 'Outbox Pattern with CDC Streaming',
    description:
      'Engineered a bullet-proof event-driven webhook dispatcher using the transactional outbox pattern. Change Data Capture (CDC) streams database mutations into an event queue, triggering asynchronous webhook deliveries with guaranteed at-least-once semantics, exponential backoff, and dead-letter queue handling.',
    metrics: [
      { value: '<50ms', label: 'Event Propagation' },
      { value: '99.9%', label: 'Delivery Guarantee' },
    ],
    techTags: ['CDC Streams', 'Outbox Pattern', 'Webhooks', 'Event Queue'],
  },
  {
    icon: '🔐',
    accentColor: 'var(--accent-purple)',
    accentGlow: 'rgba(139, 92, 246, 0.12)',
    accentBorder: 'rgba(139, 92, 246, 0.2)',
    label: 'External API Productization',
    title: 'B2B Enterprise REST API',
    description:
      'Decoupled the internal CRM data layer into a standalone, production-ready REST API product. Implemented robust request validation via Pydantic schemas, rate limiting, API key authentication, and comprehensive OpenAPI documentation — architected for external enterprise partner consumption and monetization.',
    metrics: [
      { value: 'B2B', label: 'Market-Ready API' },
      { value: '3+', label: 'Revenue Streams Enabled' },
    ],
    techTags: ['REST API', 'Pydantic', 'Cloud Run', 'API Gateway'],
  },
];

const roiItems = [
  {
    icon: '💰',
    value: '$0 → Revenue',
    label: 'New Monetization Channel',
    description: 'Transformed internal tooling into a licensable enterprise data product',
  },
  {
    icon: '🔄',
    value: 'Real-Time',
    label: 'CDC Event Streaming',
    description: 'Sub-50ms event propagation with guaranteed delivery across systems',
  },
  {
    icon: '🤝',
    value: '3+ Partners',
    label: 'External Integration Ready',
    description: 'Production API enabling cross-selling to LDI, DG, and LexVault ecosystems',
  },
];

const techStack = [
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Google Cloud Run', category: 'Infrastructure' },
  { name: 'Python / FastAPI', category: 'API Layer' },
  { name: 'Pydantic', category: 'Validation' },
  { name: 'Firebase', category: 'Auth / Legacy' },
  { name: 'Firestore', category: 'Source DB' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Cloud SQL', category: 'Managed DB' },
  { name: 'CDC Streams', category: 'Event Layer' },
  { name: 'OpenAPI / Swagger', category: 'Documentation' },
];

export default function LitSignalCaseStudyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cs-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          id="litsignal-modal-overlay"
        >
          <motion.div
            className="cs-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            id="litsignal-modal"
          >
            {/* Close Button */}
            <button className="cs-modal-close" onClick={onClose} aria-label="Close modal" id="litsignal-modal-close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <motion.div className="cs-modal-header" variants={fadeUp}>
              <div className="cs-modal-header-badge litsignal-badge">
                <span className="cs-modal-header-badge-dot" />
                Enterprise Data Platform · Cloud Architecture
              </div>
              <h2 className="cs-modal-header-title">
                LitSignal — Enterprise Data Federation
              </h2>
              <p className="cs-modal-header-subtitle">
                A deep-dive into the event-driven data warehouse architecture, CDC streaming pipeline, and B2B API productization I engineered for enterprise partner integration.
              </p>
              <div className="cs-modal-header-role">
                <span className="cs-modal-role-tag">Lead Cloud Architect</span>
                <span className="cs-modal-role-tag">Systems Engineer</span>
              </div>
            </motion.div>

            {/* Architectural Challenge */}
            <motion.div className="cs-modal-challenge" variants={fadeUp}>
              <div className="cs-modal-challenge-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                The Architectural Challenge
              </div>
              <p className="cs-modal-challenge-text">
                The client&apos;s CRM was built on a <strong>fragmented Firestore NoSQL architecture</strong> that made cross-entity queries impossible, created tight coupling between frontend and backend, and blocked any possibility of external partner integration. The business needed to <strong>monetize their data as a product</strong>, but the architecture couldn&apos;t support it.
              </p>
            </motion.div>

            {/* Engineering Pillars */}
            <motion.div
              className="cs-modal-pillars"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <div className="cs-modal-section-label">Engineering Solutions</div>
              {engineeringPillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  className="cs-pillar-card"
                  variants={fadeUp}
                  style={{
                    '--pillar-accent': pillar.accentColor,
                    '--pillar-glow': pillar.accentGlow,
                    '--pillar-border': pillar.accentBorder,
                  }}
                >
                  <div className="cs-pillar-header">
                    <div className="cs-pillar-icon-wrapper">
                      <span className="cs-pillar-icon">{pillar.icon}</span>
                    </div>
                    <div className="cs-pillar-label">{pillar.label}</div>
                  </div>
                  <h3 className="cs-pillar-title">{pillar.title}</h3>
                  <p className="cs-pillar-desc">{pillar.description}</p>

                  <div className="cs-pillar-metrics">
                    {pillar.metrics.map((metric, j) => (
                      <div key={j} className="cs-pillar-metric">
                        <div className="cs-pillar-metric-value">{metric.value}</div>
                        <div className="cs-pillar-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="cs-pillar-tags">
                    {pillar.techTags.map((tag) => (
                      <span key={tag} className="cs-pillar-tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Business ROI */}
            <motion.div className="cs-modal-roi" variants={fadeUp}>
              <div className="cs-modal-section-label">Business Impact Delivered</div>
              <div className="cs-roi-grid">
                {roiItems.map((item, i) => (
                  <div key={i} className="cs-roi-card">
                    <div className="cs-roi-icon">{item.icon}</div>
                    <div className="cs-roi-value">{item.value}</div>
                    <div className="cs-roi-label">{item.label}</div>
                    <div className="cs-roi-desc">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div className="cs-modal-techstack" variants={fadeUp}>
              <div className="cs-modal-section-label">Technology Stack</div>
              <div className="cs-tech-grid">
                {techStack.map((tech, i) => (
                  <div key={i} className="cs-tech-item">
                    <span className="cs-tech-name">{tech.name}</span>
                    <span className="cs-tech-category">{tech.category}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div className="cs-modal-cta" variants={fadeUp}>
              <p className="cs-modal-cta-text">
                Need to productize your data layer or architect enterprise-grade APIs?
              </p>
              <a
                className="btn-primary"
                href="mailto:xamiemmorales@gmail.com?subject=Enterprise%20Data%20Architecture%20Consultation"
                id="litsignal-modal-cta"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Discuss Your Architecture
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
