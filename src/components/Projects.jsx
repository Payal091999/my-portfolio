import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <p className="text-xs text-cyan-300 mb-1">Blazor App</p>
          <h3 className="text-lg font-semibold">Task Tracker</h3>
          <p className="text-sm text-white/70 mb-4">Track and update your tasks using C# & SQL.</p>

          <div className="mb-2">
            <p className="text-sm">C# <span className="float-right">80%</span></p>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div className="h-full bg-blue-400 w-[80%] rounded-full"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">SQL <span className="float-right">75%</span></p>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div className="h-full bg-cyan-400 w-[75%] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <p className="text-xs text-cyan-300 mb-1">Full Stack</p>
          <h3 className="text-lg font-semibold">SoulSync</h3>
          <p className="text-sm text-white/70 mb-4">AI-powered emotional support app with Blazor + .NET API.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"><FaGithub /> GitHub</a>
            <a href="#" className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"><FaExternalLinkAlt /> Live</a>
          </div>
        </div>
      </div>
    </section>
  );
}
