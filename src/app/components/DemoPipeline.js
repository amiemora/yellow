'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_DATA = {
  status: 'SUCCESS',
  records_extracted: 47,
  waf_bypassed: true,
  data: [
    {
      record_id: 'REC-2024-04892',
      entity_name: 'Mitchell & Associates LLC',
      extracted_date: '2024-03-15',
      source_type: 'WAF-Protected Portal',
      data_points: 14,
    },
    {
      record_id: 'REC-2024-05103',
      entity_name: 'Rodriguez Capital Group',
      extracted_date: '2024-03-16',
      source_type: 'CAPTCHA-Gated Platform',
      data_points: 22,
    },
    {
      record_id: 'REC-2024-05217',
      entity_name: 'Liu Technology Partners',
      extracted_date: '2024-03-17',
      source_type: 'Rate-Limited API',
      data_points: 18,
    },
  ],
};

function JsonViewer({ data, indent = 0 }) {
  const pad = '  '.repeat(indent);

  if (Array.isArray(data)) {
    return (
      <>
        {'[\n'}
        {data.map((item, i) => (
          <span key={i}>
            {pad}  <JsonViewer data={item} indent={indent + 1} />
            {i < data.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {pad}{']'}
      </>
    );
  }

  if (typeof data === 'object' && data !== null) {
    const entries = Object.entries(data);
    return (
      <>
        {'{\n'}
        {entries.map(([key, val], i) => (
          <span key={key}>
            {pad}  <span className="key">&quot;{key}&quot;</span>:{' '}
            <JsonViewer data={val} indent={indent + 1} />
            {i < entries.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {pad}{'}'}
      </>
    );
  }

  if (typeof data === 'number') {
    return <span className="number">{data}</span>;
  }

  return <span className="string">&quot;{String(data)}&quot;</span>;
}

export default function DemoPipeline() {
  const [state, setState] = useState('idle'); // idle | loading | done
  const [lines, setLines] = useState([]);

  const simulateExtraction = useCallback(() => {
    setState('loading');
    setLines([]);

    const steps = [
      { delay: 400, text: '> Initializing headless browser cluster...' },
      { delay: 800, text: '> Rotating fingerprints & proxy chain...' },
      { delay: 1300, text: '> Bypassing WAF & CAPTCHA layers...' },
      { delay: 1800, text: '> Navigating authenticated portal...' },
      { delay: 2400, text: '> Extracting structured data fields...' },
      { delay: 3000, text: '> Parsing DOM → structured JSON...' },
      { delay: 3400, text: '> Validating 47 records...' },
      { delay: 3800, text: '> ✓ Extraction complete.' },
    ];

    steps.forEach(({ delay, text }) => {
      setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay);
    });

    setTimeout(() => setState('done'), 4200);
  }, []);

  return (
    <div className="demo-card">
      <div className="demo-card-header">
        <div className="demo-card-icon blue">⚡</div>
        <h3 className="demo-card-title">Automated Data Pipelines</h3>
        <p className="demo-card-desc">
          WAF-hardened headless scrapers with fingerprint rotation, proxy
          orchestration, and anti-detection at enterprise scale.
        </p>
      </div>

      <div className="demo-card-body">
        <div className="terminal">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">pipeline_runner.js</span>
          </div>
          <div className="terminal-body">
            {state === 'idle' && (
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">
                  awaiting command<span className="terminal-cursor" />
                </span>
              </div>
            )}

            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="terminal-output"
                  style={{
                    color: line.includes('✓')
                      ? 'var(--accent-green)'
                      : 'var(--text-secondary)',
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>

            {state === 'done' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="terminal-output"
                style={{ marginTop: '12px' }}
              >
                <JsonViewer data={MOCK_DATA} />
              </motion.div>
            )}
          </div>
        </div>

        <button
          className="demo-btn"
          onClick={simulateExtraction}
          disabled={state === 'loading'}
          id="btn-run-extraction"
        >
          {state === 'loading' ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
              Extracting...
            </>
          ) : state === 'done' ? (
            '↻ Run Again'
          ) : (
            <>▶ Run Extraction</>
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
