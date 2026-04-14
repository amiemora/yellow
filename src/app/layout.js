import './globals.css';

export const metadata = {
  title: 'Amie Morales — Fractional CTO & Lead Cloud Architect | AI Automation & Data Pipelines | Austin, TX',
  description:
    'Fractional CTO and Senior Full-Stack Architect specializing in event-driven architectures, enterprise data federation, and AI-powered cost optimization. I architect autonomous cloud systems on React, GCP, Docker, and Gemini AI that eliminate operational overhead and deliver measurable ROI.',
  keywords: [
    'Fractional CTO',
    'Lead Cloud Architect',
    'AI Automation',
    'Data Pipelines',
    'Event-Driven Architecture',
    'Data Federation',
    'Cost Optimization',
    'GCP',
    'React',
    'Next.js',
    'Docker',
    'Vertex AI',
    'Gemini API',
    'Full Stack Engineer',
    'Cloud Architecture',
    'Enterprise Consulting',
    'Austin TX',
  ],
  openGraph: {
    title: 'Amie Morales — Fractional CTO & Lead Cloud Architect',
    description:
      'I architect autonomous, event-driven cloud systems that eliminate operational overhead, federate enterprise data, and deliver measurable ROI. Specializing in React, GCP, Docker, and Generative AI.',
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
