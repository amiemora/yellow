import './globals.css';

export const metadata = {
  title: 'Amie Morales — Fractional CTO & Lead Cloud Architect | Database Architecture, Data Federation & Event-Driven Systems | Austin, TX',
  description:
    'Fractional CTO and Lead Cloud Architect specializing in SQL and NoSQL database architecture, enterprise data federation, event-driven microservices, and Docker-based cloud cost optimization. Expert in PostgreSQL schema design, Firestore document modeling, and complex cross-database migrations that deliver measurable ROI.',
  keywords: [
    'Fractional CTO',
    'Lead Cloud Architect',
    'Enterprise Data Federation',
    'Event-Driven Architecture',
    'Cloud Cost Optimization',
    'Docker Swarm',
    'PostgreSQL',
    'Firestore',
    'SQL Database Architecture',
    'NoSQL Document Modeling',
    'Database Migration',
    'PostgreSQL Data Warehouse',
    'CDC Streaming',
    'Webhook Dispatcher',
    'WAF Bypass Engineering',
    'Residential Proxy Engineering',
    'Hardware Provisioning',
    'On-Premise Infrastructure',
    'SSH Remote Access',
    'VM Migration',
    'Cloud vs Hardware TCO',
    'GCP',
    'React',
    'Next.js',
    'Docker',
    'Vertex AI',
    'Gemini API',
    'Cloud Architecture Consulting',
    'Enterprise API Productization',
    'Zero-Downtime Migration',
    'Austin TX',
  ],
  openGraph: {
    title: 'Amie Morales — Fractional CTO & Lead Cloud Architect',
    description:
      'I architect enterprise-grade data federation systems, event-driven microservices, and autonomous cloud infrastructure. Specializing in Docker-based cost optimization, CDC streaming, and WAF-resilient extraction pipelines that drive immediate business ROI.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
