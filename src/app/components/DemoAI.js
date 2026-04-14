'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_EMAIL = (name) => ({
  to: `${name.toLowerCase().replace(/\s+/g, '.')}@company.com`,
  subject: `Partnership Opportunity — AI-Powered Data Intelligence for ${name}'s Team`,
  body: `Hi ${name},

I came across your company's growth trajectory and wanted to reach out about a capability that's been a game-changer for my clients.

I specialize in building automated data intelligence systems — WAF-hardened web scrapers paired with Vertex AI enrichment layers that surface competitive insights 10x faster than manual research.

For a recent client, I deployed 48 scheduled GCP Cloud Functions that:
• Extract structured data from complex, protected web platforms
• Enrich records with AI-generated profiles and scoring
• Deliver actionable intelligence to their CRM every morning

The result: 85% reduction in manual data entry and a 3x increase in qualified lead generation.

Would you have 15 minutes this week to explore how a similar system could give your team a competitive edge?

Best regards,
Amie Morales
Senior AI Automation Architect`,
});

export default function DemoAI() {
  const [clientName, setClientName] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | done
  const [email, setEmail] = useState(null);

  const generate = useCallback(() => {
    if (!clientName.trim()) return;
    setState('loading');
    setEmail(null);

    setTimeout(() => {
      setEmail(MOCK_EMAIL(clientName.trim()));
      setState('done');
    }, 2400);
  }, [clientName]);

  return (
    <div className="demo-card">
      <div className="demo-card-header">
        <div className="demo-card-icon purple">🧠</div>
        <h3 className="demo-card-title">AI Workflow Automation</h3>
        <p className="demo-card-desc">
          Gemini-powered pipelines that generate personalized outreach from
          enriched data.
        </p>
      </div>

      <div className="demo-card-body">
        <div className="email-input-wrapper">
          <input
            type="text"
            className="email-input"
            placeholder="Enter target client name..."
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
            id="input-client-name"
          />
        </div>

        <AnimatePresence mode="wait">
          {state === 'loading' && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="email-output"
            >
              <div style={{ marginBottom: '16px', fontSize: '11px', color: 'var(--accent-purple-bright)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                ✦ Gemini API generating dossier...
              </div>
              {[100, 100, 100, 80, 100, 90, 60].map((w, i) => (
                <div key={i} className="skeleton skeleton-line" style={{ width: `${w}%` }} />
              ))}
            </motion.div>
          )}

          {state === 'done' && email && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="email-output"
            >
              <div className="email-output-header">
                <div className="email-field">
                  <span className="email-field-label">To:</span>
                  <span className="email-field-value">{email.to}</span>
                </div>
                <div className="email-field">
                  <span className="email-field-label">Subject:</span>
                  <span className="email-field-value">{email.subject}</span>
                </div>
              </div>
              <div className="email-body" style={{ whiteSpace: 'pre-wrap' }}>
                {email.body}
              </div>
            </motion.div>
          )}

          {state === 'idle' && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="email-output"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-tertiary)',
                fontSize: '13px',
              }}
            >
              Enter a name above and generate a personalized AI email
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="demo-btn purple-btn"
          onClick={generate}
          disabled={state === 'loading' || !clientName.trim()}
          id="btn-generate-email"
        >
          {state === 'loading' ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
              Generating...
            </>
          ) : state === 'done' ? (
            '↻ Generate Again'
          ) : (
            <>✦ Generate Dossier & Email via Gemini</>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
