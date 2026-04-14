'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#casestudy' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">AM.</a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="mailto:xamiemmorales@gmail.com">
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10,10,15,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    padding: '8px 0',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="btn-primary"
                href="mailto:xamiemmorales@gmail.com"
                style={{ textAlign: 'center', marginTop: '8px' }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
