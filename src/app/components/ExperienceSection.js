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
    role: 'Lead Full-Stack Engineer / AI Growth Engineer',
    company: 'DepoGenius',
    location: 'Austin, TX',
    period: 'Aug 2024 — Present',
    current: true,
    highlights: [
      'Architected "Sales Genius", a proprietary enterprise CRM automating the full sales pipeline through data intelligence and generative AI.',
      'Engineered a GCP backend managing 48 scheduled Cloud Functions and real-time Firestore triggers with autonomous pipeline orchestration.',
      'Migrated expensive cloud compute workloads to a Docker-based, on-premise worker environment — reducing server costs by 85%.',
      'Built an intelligence layer using Vertex AI & Gemini APIs to auto-generate client dossiers and personalized outreach at scale.',
    ],
    tags: ['React', 'GCP', 'Vertex AI', 'Docker', 'Puppeteer', 'Firestore'],
  },
  {
    role: 'Co-Founder & Full-Stack Engineer',
    company: 'Eazl.ai',
    location: 'Austin, TX',
    period: 'Sep 2023 — Jan 2024',
    highlights: [
      'Led full-stack development of an AI prompt management platform integrating multiple LLMs (Gemini, Claude, ChatGPT).',
      'Built an AI cost estimator tool that predicted API token usage, reducing user spending by 20%.',
      'Developed a subscription system with secure payment processing via Stripe API.',
    ],
    tags: ['Next.js', 'Gemini', 'Claude', 'Stripe', 'Vercel'],
  },
  {
    role: 'Software Engineer',
    company: 'CentralTexas.com',
    location: 'Austin, TX',
    period: 'Mar 2023 — Jan 2024',
    highlights: [
      'Sole developer during the company\'s Techstars accelerator program — built the entire platform on React, Next.js, and GCP.',
      'Engineered subscription processing logic and payment integrations with Stripe API.',
    ],
    tags: ['React', 'Next.js', 'GCP', 'Stripe', 'Techstars'],
  },
  {
    role: 'Automation Specialist',
    company: 'SA Legal Solutions',
    location: 'Austin, TX',
    period: 'Jul 2023 — Aug 2023',
    highlights: [
      'Automated Accounts Receivable processes — achieved a 50% reduction in collection time.',
      'Built an automated pipeline to extract and sync invoice data from the QuickBooks API nightly.',
    ],
    tags: ['Node.js', 'QuickBooks API', 'Gmail API'],
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
          <div className="section-label">Career</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            From startup accelerators to enterprise AI systems —
            building at every scale.
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
