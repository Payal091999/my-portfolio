import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-3xl font-bold mb-4">👩‍💻 About Me</h1>
      <p className="text-lg mb-3">
        Hi, I'm Payal Bera, an MCA graduate from Kolkata. I currently work as an IT Associate, and I’m passionate about software development.
      </p>
      <p className="text-lg mb-3">
        I’ve built two major projects: <b>SoulSync</b> (an AI-powered emotional support app) and <b>Task Tracker</b> (a full-stack productivity tool).
      </p>
      <p className="text-lg">
        My key skills include: <b>Blazor, ASP.NET Core, EF Core, SQL Server, C#</b> and more. I love solving real-life problems with clean, user-focused solutions.
      </p>
    </motion.div>
  );
}
