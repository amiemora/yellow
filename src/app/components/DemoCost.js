'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoCost() {
  const [isDocker, setIsDocker] = useState(false);

  return (
    <div className="demo-card">
      <div className="demo-card-header">
        <div className="demo-card-icon green">💰</div>
        <h3 className="demo-card-title">Cloud Cost Optimization</h3>
        <p className="demo-card-desc">
          Strategic migration from cloud VMs to on-premise Docker Swarm for
          massive cost savings.
        </p>
      </div>

      <div className="demo-card-body">
        <div className="cost-toggle-wrapper">
          <div className="toggle-container">
            <span className={`toggle-label ${!isDocker ? 'active' : ''}`}>
              Cloud Servers (GCE)
            </span>
            <div
              className={`toggle-track ${isDocker ? 'toggled' : ''}`}
              onClick={() => setIsDocker(!isDocker)}
              role="switch"
              aria-checked={isDocker}
              tabIndex={0}
              id="toggle-cost"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsDocker(!isDocker);
                }
              }}
            >
              <div className="toggle-thumb" />
            </div>
            <span className={`toggle-label ${isDocker ? 'active' : ''}`}>
              Local Docker Swarm
            </span>
          </div>

          <div className="cost-display">
            <div className="cost-label">Monthly Infrastructure Cost</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isDocker ? 'low' : 'high'}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`cost-amount ${isDocker ? 'low' : 'high'}`}
              >
                {isDocker ? '$350' : '$2,400'}
                <span style={{ fontSize: '20px', fontWeight: 500, opacity: 0.7 }}>/mo</span>
              </motion.div>
            </AnimatePresence>
            <div className={`cost-savings ${isDocker ? 'visible' : ''}`}>
              ↓ 85% reduction · $24,600/yr saved
            </div>
          </div>

          {isDocker && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                width: '100%',
              }}
            >
              {[
                { label: 'CPU Cores', before: '8 vCPU', after: '16 Cores' },
                { label: 'RAM', before: '32 GB', after: '64 GB' },
                { label: 'Uptime', before: '99.5%', after: '99.9%' },
                { label: 'Latency', before: '~45ms', after: '~8ms' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px',
                    border: '1px solid var(--border-subtle)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-green)' }}>
                    {item.after}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    {item.before}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
