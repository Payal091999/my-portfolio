import React from 'react';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <div className="px-4 py-10">
      <section className="mb-10 text-center sm:text-left max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
        <p className="text-lg text-gray-700">
          I'm Payal Bera, an MCA graduate and passionate developer experienced in building web apps using Blazor, .NET, C#, SQL, and modern frontend tools like React.
        </p>
      </section>

      <Timeline />
      <Skills />
    </div>
  );
}
    