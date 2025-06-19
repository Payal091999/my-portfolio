import React from 'react';
import PageTemplate from './PageTemplate';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';
import SkillChart from '../components/SkillChart';

export default function SkillsPage() {
  return (
    <PageTemplate title="Skills">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8"
        >
          <SkillChart value={90} label="React" />
          <SkillChart value={85} label="JavaScript" />
          <SkillChart value={80} label="Node.js" />
          <SkillChart value={85} label="HTML/CSS" />
          <SkillChart value={80} label="TypeScript" />
          <SkillChart value={75} label="MongoDB" />
        </motion.div>
      </div>
    </PageTemplate>
  );
}
