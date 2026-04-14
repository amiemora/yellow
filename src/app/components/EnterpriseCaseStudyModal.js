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
    icon: '🐳',
    accentColor: 'var(--accent-cyan)',
    accentGlow: 'rgba(6, 182, 212, 0.12)',
    accentBorder: 'rgba(6, 182, 212, 0.2)',
    label: 'Hardware & Cost Optimization',
    title: 'Bare-Metal Infrastructure Migration',
    description:
      'Conducted a comprehensive cloud-to-hardware TCO analysis comparing GCE VM pricing against on-premise bare-metal performance. Provisioned and configured dedicated server hardware — allocating 64GB RAM, 16 CPU cores, and tuning Docker daemon settings for maximum container density. Established secure remote access via SSH tunneling for full fleet administration. Deployed a residential IP proxy rotation fleet with ISP-level routing to bypass enterprise WAFs. Result: 100% cloud cost elimination with superior throughput.',
    metrics: [
      { value: '100%', label: 'Cloud Cost Reduction' },
      { value: '64GB', label: 'RAM Allocated' },
    ],
    techTags: ['Hardware Provisioning', 'Residential Proxies', 'SSH/VPN', 'Docker Swarm'],
  },
  {
    icon: '⚡',
    accentColor: 'var(--accent-yellow)',
    accentGlow: 'rgba(250, 204, 21, 0.12)',
    accentBorder: 'rgba(250, 204, 21, 0.2)',
    label: 'Event-Driven Architecture',
    title: 'The Autonomous "Listening" Engine',
    description:
      'Engineered a two-part event-driven system using Firebase Cloud Functions: a "Pulse" cron-job manager that dynamically schedules cases for scraping based on trial proximity, and a reactive webhook that instantly recalculates algorithmic Trial Readiness Scores the exact millisecond new court filings hit the database.',
    metrics: [
      { value: '24/7', label: 'Autonomous Operation' },
      { value: '<1ms', label: 'Reactive Latency' },
    ],
    techTags: ['Cloud Functions', 'Webhooks', 'Cron Jobs', 'TRS Algorithm'],
  },
  {
    icon: '🏗️',
    accentColor: 'var(--accent-purple)',
    accentGlow: 'rgba(139, 92, 246, 0.12)',
    accentBorder: 'rgba(139, 92, 246, 0.2)',
    label: 'Data Federation',
    title: 'Enterprise Data Federation (Headless CRM)',
    description:
      'To prepare the client for commercialization APIs, I migrated their primary data firehose from Firestore into a scalable PostgreSQL database (LitSignal API). Engineered a complex "Reverse Data Federation" architecture in React that efficiently queries lightweight private state from Firebase, pulls massive text payloads from PostgreSQL concurrently, and instantly stitches them together in-memory.',
    metrics: [
      { value: '2', label: 'Federated Data Sources' },
      { value: 'B2B', label: 'API-Ready Architecture' },
    ],
    techTags: ['PostgreSQL', 'Firestore', 'REST API', 'In-Memory Joins'],
  },
];

const roiItems = [
  {
    icon: '💰',
    value: '$1,000+/mo',
    label: 'Recurring SaaS Fees Eliminated',
    description: 'Completely removed third-party cloud compute dependency',
  },
  {
    icon: '🔄',
    value: '24/7',
    label: 'Autonomous Self-Healing Pipeline',
    description: 'Replaced static, manual dashboards with fully autonomous monitoring',
  },
  {
    icon: '🔑',
    value: 'B2B',
    label: 'Enterprise API Commercialization',
    description: 'Decoupled internal tracking into a secure, licensable data product',
  },
];

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Firestore', category: 'Database' },
  { name: 'Cloud Functions', category: 'Serverless' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Google Cloud Run', category: 'Infrastructure' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'Genkit (Gemini AI)', category: 'AI / ML' },
];

export default function EnterpriseCaseStudyModal({ isOpen, onClose }) {
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
          id="ldi-modal-overlay"
        >
          <motion.div
            className="cs-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            id="ldi-modal"
          >
            {/* Close Button */}
            <button className="cs-modal-close" onClick={onClose} aria-label="Close modal" id="ldi-modal-close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <motion.div className="cs-modal-header" variants={fadeUp}>
              <div className="cs-modal-header-badge">
                <span className="cs-modal-header-badge-dot" />
                Enterprise Engagement · Fractional CTO
              </div>
              <h2 className="cs-modal-header-title">
                Autonomous Trial Intelligence Platform
              </h2>
              <p className="cs-modal-header-subtitle">
                A deep-dive into the event-driven, cost-optimized data federation architecture I delivered for a legal-tech enterprise client.
              </p>
              <div className="cs-modal-header-role">
                <span className="cs-modal-role-tag">Fractional CTO</span>
                <span className="cs-modal-role-tag">Principal Architect</span>
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
                The client was hemorrhaging <strong>thousands of dollars monthly</strong> running heavy LLM (Gemini) web-scraping jobs repeatedly in the cloud on millions of unstructured legal documents, while simultaneously suffering from critical <strong>UI dashboard lag</strong> caused by monolithic data coupling between their frontend and backend systems.
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
                Need this level of architectural rigor for your platform?
              </p>
              <a
                className="btn-primary"
                href="mailto:xamiemmorales@gmail.com?subject=Enterprise%20Architecture%20Engagement"
                id="ldi-modal-cta"
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
