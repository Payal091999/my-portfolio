import React from 'react';
import PageTemplate from '../components/PageTemplate';

export default function Home() {
  return (
    <PageTemplate title="Home">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">
          Hi there! I'm a passionate developer with expertise in various technologies.
        </p>
      </div>
    </PageTemplate>
  );
}
