'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnterpriseCaseStudyModal from './EnterpriseCaseStudyModal';
import LitSignalCaseStudyModal from './LitSignalCaseStudyModal';

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
    title: 'LDI — Autonomous Trial Intelligence Platform',
    challenge:
      'A legacy, manual data discovery process bottlenecked by enterprise WAFs (Cloudflare/TylerTech) and strict 50k pagination limits.',
    architecture:
      'Designed a resilient, on-premise Docker Swarm proxy fleet executing 24/7 autonomous daily discovery sweeps with an intelligent Pre-Scrape Verification Layer and native Angular facet-filters to bypass pagination throttling.',
    product:
      'Engineered a bespoke React/Firebase dashboard with dynamic pagination, real-time sync, and a custom Trial Readiness Score (TRS) auto-tracking engine.',
    roi: 'Eliminated SaaS scraping costs and replaced 40+ hours/week of manual research with an autonomous enterprise pipeline.',
    stats: [
      { label: 'Cloud Cost Eliminated', value: '100%' },
      { label: 'Reactive Latency', value: '<1ms' },
      { label: 'Manual Hours Replaced', value: '40+/wk' },
    ],
    hasDeepdive: 'ldi',
    pillars: ['Docker Swarm Fleet', 'WAF Bypass Engine', 'TRS Auto-Tracker'],
  },
  {
    id: 'litsignal',
    className: 'featured enterprise-featured litsignal-featured',
    icon: '🔗',
    tag: 'Enterprise API · Data Platform',
    roleTag: 'Lead Cloud Architect & Systems Engineer',
    title: 'LitSignal — Enterprise Data Federation',
    challenge:
      'Transitioning a fragmented, highly-coupled NoSQL (Firestore) CRM architecture into a centralized, relationally-mapped Enterprise Data Warehouse.',
    architecture:
      'Architected a high-performance PostgreSQL backend with an event-driven webhook dispatcher utilizing the outbox pattern with Change Data Capture (CDC) synchronization, deployed on Google Cloud Run.',
    product:
      'A decoupled, production-ready REST API configured for external enterprise partner integration with robust Pydantic validation.',
    roi: 'Transformed a rigid internal tool into a monetizable, external-facing Enterprise API product — enabling new revenue streams and cross-selling opportunities.',
    stats: [
      { label: 'Data Sources Federated', value: '2' },
      { label: 'API Architecture', value: 'B2B' },
      { label: 'Revenue Streams Enabled', value: '3+' },
    ],
    hasDeepdive: 'litsignal',
    pillars: ['CDC Sync Engine', 'Outbox Webhooks', 'PostgreSQL Warehouse'],
  },
  {
    id: 'salesgenius',
    className: 'featured',
    icon: '🚀',
    tag: 'Flagship Product',
    roleTag: 'Engineering Lead & Product Architect',
    title: 'Sales Genius — Enterprise AI CRM',
    challenge:
      'Building a full-stack data intelligence platform that could automate B2B sales cycles through data-driven outreach at enterprise scale.',
    architecture:
      'WAF-hardened scraping fleet, AI-enriched contact profiling via Vertex AI / Gemini, and a multi-agent automation interface backed by 48 serverless cloud functions.',
    product:
      'An end-to-end CRM powering automated lead discovery, enrichment, and personalized outreach generation — processing 10M+ records across 5+ data sources.',
    roi: 'Accelerated B2B sales cycles by 3x through autonomous data intelligence and AI-generated outreach at scale.',
    stats: [
      { label: 'Cloud Functions', value: '48' },
      { label: 'Data Sources', value: '5+' },
      { label: 'Records Processed', value: '10M+' },
    ],
    pillars: ['Vertex AI Enrichment', 'Serverless Fleet', 'Multi-Agent AI'],
  },
];

const infraCards = [
  {
    icon: '🐘',
    metric: 'SQL + NoSQL',
    title: 'Database Architecture & Migration',
    desc: 'Expert-level PostgreSQL schema design, Firestore NoSQL document modeling, and complex cross-database migrations. From normalized relational schemas with optimized indexing to real-time document stores — I architect the data layer.',
  },
  {
    icon: '📡',
    metric: 'Live',
    title: 'Fleet Telemetry Dashboards',
    desc: 'Real-time, granular visibility into container health, AI qualification rates, and system latency across distributed Docker worker fleets.',
  },
  {
    icon: '🐳',
    metric: '85%',
    title: 'Docker-Based Cloud Cost Optimization',
    desc: 'Execution of zero-downtime migrations from expensive GCP instances to on-premise, daemon-based Docker environments, yielding 85%+ reductions in OPEX.',
  },
  {
    icon: '🔗',
    metric: 'CDC',
    title: 'Data Federation & Event-Driven Systems',
    desc: 'Bridging SQL and NoSQL worlds — PostgreSQL data warehouses paired with Firestore real-time stores, CDC streaming, and asynchronous webhook dispatchers for enterprise interoperability.',
  },
  {
    icon: '🛡️',
    metric: '24/7',
    title: 'WAF-Resilient Extraction Pipelines',
    desc: 'Autonomous headless browser clusters with fingerprint rotation, proxy orchestration, and intelligent retry logic — operating continuously behind enterprise WAFs.',
  },
];

export default function CaseStudySection() {
  const [ldiModalOpen, setLdiModalOpen] = useState(false);
  const [litsignalModalOpen, setLitsignalModalOpen] = useState(false);

  const openModal = (id) => {
    if (id === 'ldi') setLdiModalOpen(true);
    if (id === 'litsignal') setLitsignalModalOpen(true);
  };

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
            <div className="section-label">Enterprise Architecture Portfolio</div>
            <h2 className="section-title">
              Architecture That Delivers ROI
            </h2>
            <p className="section-subtitle">
              Production-grade systems engineered for scale, cost efficiency,
              and autonomous operation — delivered as a Fractional CTO.
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
                  <div className={`bento-tag ${study.id !== 'salesgenius' ? 'enterprise-tag' : ''}`}>
                    {study.id === 'ldi' && <span className="enterprise-tag-pulse" />}
                    {study.tag}
                  </div>
                )}
                <div className="bento-icon">{study.icon}</div>
                {study.roleTag && (
                  <div className="cs-role-tag">{study.roleTag}</div>
                )}
                <h3 className="bento-title">{study.title}</h3>

                {/* Challenge → Architecture → ROI narrative */}
                <div className="cs-narrative">
                  <div className="cs-narrative-block">
                    <span className="cs-narrative-label">The Challenge</span>
                    <p className="cs-narrative-text">{study.challenge}</p>
                  </div>
                  <div className="cs-narrative-block">
                    <span className="cs-narrative-label">The Architecture</span>
                    <p className="cs-narrative-text">{study.architecture}</p>
                  </div>
                  <div className="cs-narrative-block">
                    <span className="cs-narrative-label">The ROI</span>
                    <p className="cs-narrative-text">{study.roi}</p>
                  </div>
                </div>

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
                    onClick={() => openModal(study.hasDeepdive)}
                    id={`cs-deepdive-trigger-${study.id}`}
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

          {/* CTO Infrastructure & Telemetry Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ marginTop: '48px' }}
          >
            <div className="section-label">CTO Telemetry & Infrastructure</div>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            style={{ marginTop: '16px' }}
          >
            {infraCards.map((card, i) => (
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
        isOpen={ldiModalOpen}
        onClose={() => setLdiModalOpen(false)}
      />
      <LitSignalCaseStudyModal
        isOpen={litsignalModalOpen}
        onClose={() => setLitsignalModalOpen(false)}
      />
    </>
  );
}
