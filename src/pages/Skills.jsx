import React from 'react';
import PageTemplate from './PageTemplate';
import Skills from '../components/Skills';
import SkillChart from '../components/SkillChart';

export default function SkillsPage() {
  return (
    <PageTemplate title="Skills">
      <div className="space-y-8">
        <Skills />
        <SkillChart />
      </div>
    </PageTemplate>
  );
}
