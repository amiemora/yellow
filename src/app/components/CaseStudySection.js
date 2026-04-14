'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnterpriseCaseStudyModal from './EnterpriseCaseStudyModal';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const caseStudies = [
  {
    id: 'ldi',
    className: 'featured enterprise-featured',
    icon: '⚖️',
    tag: 'New · Enterprise Engagement',
    roleTag: 'Fractional CTO & Principal Architect',
    title: 'Autonomous Trial Intelligence Platform',
    desc: 'Architected a fully autonomous, event-driven legal data pipeline that eliminated $1,000+/mo in cloud fees, engineered real-time Trial Readiness Scoring via reactive webhooks, and delivered an enterprise-grade Data Federation layer for B2B commercialization.',
    stats: [
      { label: 'Cloud Cost Eliminated', value: '100%' },
      { label: 'Reactive Latency', value: '<1ms' },
      { label: 'Data Sources Federated', value: '2' },
    ],
    hasDeepdive: true,
    pillars: ['Event-Driven Architecture', 'Data Federation', 'Cost Optimization'],
  },
  {
    id: 'salesgenius',
    className: 'featured',
    icon: '🚀',
    tag: 'Flagship Project',
    title: 'Sales Genius — Enterprise AI CRM',
    desc: 'A full-stack data intelligence platform powered by WAF-hardened scrapers, AI-enriched contact profiles, and a multi-agent automation interface. Built to accelerate B2B sales cycles through data-driven outreach.',
    stats: [
      { label: 'Cloud Functions', value: '48' },
      { label: 'Data Sources', value: '5+' },
      { label: 'Records Processed', value: '10M+' },
    ],
  },
];

const metricCards = [
  {
    icon: '⚙️',
    metric: '48',
    title: 'Scheduled GCP Cloud Functions',
    desc: 'Fully autonomous, serverless extraction pipelines running 24/7 across production workloads.',
  },
  {
    icon: '🕷️',
    metric: '5+',
    title: 'WAF-Hardened Data Extraction',
    desc: 'Concurrent headless browser clusters with fingerprint rotation, CAPTCHA solving, and intelligent retry logic.',
  },
  {
    icon: '🧠',
    metric: 'AI',
    title: 'Vertex AI / Gemini Intelligence',
    desc: 'LLM-powered enrichment layer that generates entity profiles, document summaries, and outreach content.',
  },
  {
    icon: '🐳',
    metric: '85%',
    title: 'Docker-Based Cost Optimization',
    desc: 'Migrated critical workloads from GCE to on-premise Docker Swarm, slashing cloud spend by $24K/year.',
  },
];

export default function CaseStudySection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section" id="casestudy" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <div className="section-label">Enterprise Case Studies</div>
            <h2 className="section-title">
              Architecture That Delivers ROI
            </h2>
            <p className="section-subtitle">
              Production-grade systems engineered for scale, cost efficiency, and autonomous operation.
            </p>
          </motion.div>

          <motion.div
            className="cs-showcase-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {/* Enterprise Case Study Cards */}
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className={`cs-showcase-card ${study.className || ''}`}
                variants={fadeUp}
                id={`cs-card-${study.id}`}
              >
                {study.tag && (
                  <div className={`bento-tag ${study.id === 'ldi' ? 'enterprise-tag' : ''}`}>
                    {study.id === 'ldi' && <span className="enterprise-tag-pulse" />}
                    {study.tag}
                  </div>
                )}
                <div className="bento-icon">{study.icon}</div>
                {study.roleTag && (
                  <div className="cs-role-tag">{study.roleTag}</div>
                )}
                <h3 className="bento-title">{study.title}</h3>
                <p className="bento-desc">{study.desc}</p>

                {study.pillars && (
                  <div className="cs-pillars-row">
                    {study.pillars.map((pillar) => (
                      <span key={pillar} className="cs-pillar-badge">{pillar}</span>
                    ))}
                  </div>
                )}

                {study.stats && (
                  <div className="cs-stats-row">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="cs-stat-value">{stat.value}</div>
                        <div className="cs-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {study.hasDeepdive && (
                  <button
                    className="cs-deepdive-btn"
                    onClick={() => setModalOpen(true)}
                    id="cs-deepdive-trigger"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                    View Architecture Deep Dive
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Supporting Metric Cards */}
          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            style={{ marginTop: '16px' }}
          >
            {metricCards.map((card, i) => (
              <motion.div
                key={i}
                className="bento-card"
                variants={fadeUp}
              >
                <div className="bento-icon">{card.icon}</div>
                <div className="bento-metric">{card.metric}</div>
                <h3 className="bento-title">{card.title}</h3>
                <p className="bento-desc">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EnterpriseCaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
