'use client';

import { motion } from 'framer-motion';

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
  visible: { transition: { staggerChildren: 0.12 } },
};

const experiences = [
  {
    role: 'Fractional CTO & Principal Architect',
    company: 'DepoGenius / LDI / LitSignal',
    location: 'Austin, TX',
    period: 'Aug 2024 — Present',
    current: true,
    highlights: [
      'Own end-to-end technical strategy and infrastructure budget across three enterprise products — aligning architectural decisions with revenue targets and client retention KPIs.',
      'Architected the LitSignal Enterprise Data Federation — migrating a coupled Firestore (NoSQL) backend to a centralized PostgreSQL EDW with normalized relational schemas, CDC streaming, and outbox-pattern webhook dispatch.',
      'Provisioned and configured on-premise server hardware (CPU/RAM allocation, Docker daemon tuning, OS hardening) and established secure remote access via SSH tunneling — enabling full fleet administration from any location.',
      'Executed a comprehensive cloud-to-hardware TCO analysis and migrated workloads from GCE VMs to an on-premise Docker Swarm fleet, eliminating $24K+/yr in cloud costs while doubling throughput with 64GB RAM and 16-core bare-metal performance.',
      'Engineered a residential IP proxy rotation fleet with ISP-level routing, fingerprint randomization, and automated pool health monitoring to maintain 24/7 uptime behind enterprise WAFs (Cloudflare, TylerTech).',
      'Engineered complex cross-database query patterns — concurrent PostgreSQL and Firestore reads with in-memory joins, delivering sub-second load times across 10M+ federated records.',
    ],
    tags: ['PostgreSQL', 'Firestore', 'Docker', 'Hardware Provisioning', 'Residential Proxies', 'SSH/VPN', 'GCP', 'Vertex AI'],
  },
  {
    role: 'Co-Founder & Technical Lead',
    company: 'Eazl.ai',
    location: 'Austin, TX',
    period: 'Sep 2023 — Jan 2024',
    highlights: [
      'Led architectural design and full-stack development of an AI prompt management platform integrating multiple LLMs (Gemini, Claude, ChatGPT).',
      'Architected an AI cost estimator using token-level usage forecasting, reducing customer API spend by 20%.',
      'Designed Firestore NoSQL data models for user session state, prompt versioning, and real-time collaboration features.',
      'Designed subscription infrastructure with Stripe API integration, payment lifecycle management, and webhook-driven billing automation.',
    ],
    tags: ['Next.js', 'Firestore', 'Gemini', 'Claude', 'Stripe', 'System Design'],
  },
  {
    role: 'Lead Engineer (Techstars)',
    company: 'CentralTexas.com',
    location: 'Austin, TX',
    period: 'Mar 2023 — Jan 2024',
    highlights: [
      'Sole engineering hire during the company\'s Techstars accelerator cohort — owned the complete technology roadmap, infrastructure decisions, and database architecture.',
      'Architected the full product stack on React, Next.js, and GCP — designing Firestore collections, Cloud Functions triggers, and subscription processing with Stripe.',
    ],
    tags: ['React', 'Next.js', 'GCP', 'Firestore', 'Stripe', 'Techstars'],
  },
  {
    role: 'Automation Architect',
    company: 'SA Legal Solutions',
    location: 'Austin, TX',
    period: 'Jul 2023 — Aug 2023',
    highlights: [
      'Architected automated Accounts Receivable pipelines — achieving a 50% reduction in collection time through event-driven invoice processing.',
      'Built an autonomous data sync pipeline extracting and reconciling invoice data from the QuickBooks API on a nightly cron schedule.',
    ],
    tags: ['Node.js', 'QuickBooks API', 'Gmail API', 'Process Automation'],
  },
];

const certifications = [
  {
    title: 'Google AI for JavaScript Developers',
    issuer: 'Google',
    year: '2024',
    icon: '🎓',
  },
  {
    title: 'Software Engineering Immersive',
    issuer: 'General Assembly',
    year: '2022',
    icon: '🎓',
  },
];

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="section-label">Engineering Leadership</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            From startup accelerators to enterprise-scale infrastructure —
            architecting and leading at every level.
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {experiences.map((exp, i) => (
            <motion.div key={i} className="exp-card" variants={fadeUp}>
              <div className="exp-card-timeline">
                <div className={`exp-dot ${exp.current ? 'current' : ''}`} />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>

              <div className="exp-card-content">
                <div className="exp-card-header">
                  <div>
                    <div className="exp-period">{exp.period}</div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      {exp.company}
                      <span className="exp-location"> · {exp.location}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <div className="exp-current-badge">
                      <span className="exp-current-dot" />
                      Current
                    </div>
                  )}
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="certs-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <div className="section-label" style={{ marginTop: '64px' }}>
            Education & Certifications
          </div>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <motion.div key={i} className="cert-card" variants={fadeUp}>
                <span className="cert-icon">{cert.icon}</span>
                <div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-meta">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
