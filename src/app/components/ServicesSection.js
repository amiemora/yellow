'use client';

import { motion } from 'framer-motion';
import DemoPipeline from './DemoPipeline';
import DemoAI from './DemoAI';
import DemoCost from './DemoCost';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="section-label">What I Build</div>
          <h2 className="section-title">
            Interactive Service Demos
          </h2>
          <p className="section-subtitle">
            Don&apos;t just read about capabilities — experience them. Click through
            live simulations of the systems I architect.
          </p>
        </motion.div>

        <motion.div
          className="demos-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <DemoPipeline />
          </motion.div>
          <motion.div variants={fadeUp}>
            <DemoAI />
          </motion.div>
          <motion.div variants={fadeUp}>
            <DemoCost />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
