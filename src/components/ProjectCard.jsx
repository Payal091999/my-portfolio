import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, tags, image, github, live }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-slate-800 dark:text-white"
    >
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {Array.isArray(tags) && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-700 dark:bg-cyan-800 dark:text-white px-2 py-1 rounded text-xs font-medium"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="text-xs italic text-gray-400">No tags</span>
          )}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" title="View Code">
              <FaGithub className="text-xl hover:text-cyan-500" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" title="Live Demo">
              <FaExternalLinkAlt className="text-xl hover:text-cyan-500" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ✅ Prevents crash if props are missing
ProjectCard.defaultProps = {
  tags: [],
  title: 'Untitled Project',
  description: 'No description provided.',
  image: 'https://via.placeholder.com/400x200?text=Project+Image',
  github: '',
  live: ''
};
