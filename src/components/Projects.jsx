import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Task Tracker',
    description: 'Track tasks, priorities, and statuses using Blazor and .NET.',
    tags: ['Blazor', 'C#', 'SQL Server'],
    image: 'https://via.placeholder.com/400x200?text=Task+Tracker',
    github: 'https://github.com/your/task-tracker',
    live: 'https://tasktracker.netlify.app'
  },
  {
    title: 'SoulSync',
    description: 'AI-based emotional support app with MAUI & ML backend.',
    tags: ['MAUI', 'AI', 'Chatbot'],
    image: 'https://via.placeholder.com/400x200?text=SoulSync',
    github: 'https://github.com/your/soulsync',
    live: 'https://soulsync.netlify.app'
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">💼 Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}
<section id="projects" className="snap-start min-h-screen ...">
  {/* Projects content */}
</section>

