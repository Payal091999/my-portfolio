import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "🧠 SoulSync",
      description: "A cross-platform AI-powered app for emotional support and relationship advice.",
      link: "https://github.com/yourusername/soulsync"
    },
    {
      title: "✅ Task Tracker Web App",
      description: "A full-stack Blazor web app to manage daily tasks using ASP.NET Core + EF + SQL.",
      link: "https://github.com/yourusername/task-tracker"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">💼 Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
