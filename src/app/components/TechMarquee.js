'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '◆' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Google Cloud Platform', icon: '☁️' },
  { name: 'Firebase / Firestore', icon: '🔥' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Puppeteer', icon: '🕷️' },
  { name: 'Vertex AI', icon: '🧠' },
  { name: 'Gemini API', icon: '✦' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'OpenAI', icon: '💡' },
  { name: 'Gmail API', icon: '📧' },
  { name: 'Stripe API', icon: '💳' },
  { name: 'REST / GraphQL', icon: '🔗' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Google Maps API', icon: '📍' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechMarquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="marquee-section" id="techstack">
      <div className="container" style={{ marginBottom: '40px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Tech Stack
          </div>
          <h2
            className="section-title"
            style={{ textAlign: 'center' }}
          >
            Tools of the Trade
          </h2>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-item-icon">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
