import { useState } from "react";

const projects = [
  {
    name: "Prescripto",
    image: "/src/assets/prescripto.png",
    description: "A doctor appointment web app built with React and TailwindCSS.",
    link: "https://prescripto-black-six.vercel.app/",
  },
  {
    name: "Portfolio Website",
    image: "/src/assets/Portfolio.png",
    description: "A modern, responsive portfolio built with React and TailwindCSS.",
    link: "https://your-portfolio-link.com",
  },
  {
    name: "Palindrome Checker",
    image: "/src/assets/palindrome-checker.png",
    description: "A palindrome checker built with JavaScript.",
    link: "https://github.com/yourusername/palindrome-checker",
  },
  {
    name: "Rock Paper Scissors Game",
    image: "/src/assets/rock-paper-scissors.png",
    description: "A Rock Paper Scissors game built with JavaScript.",
    link: "https://vishal-bisht.github.io/Rock-Paper-Scissors-Game/",
  },
  {
    name: "Amazon Clone",
    image: "/src/assets/amazon-clone.png",
    description: "A clone of the Amazon UI to practice HTML, CSS, and JavaScript.",
    link: "https://vishal-bisht.github.io/Amazon-clone/",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <section id="Projects" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <div key={project.name} className="bg-gray-900/80 rounded-lg p-4 shadow flex flex-col items-center hover:scale-[1.03] transition-transform duration-200">
            <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded border border-gray-700 bg-gray-800">
              <img
                src={project.image}
                alt={project.name}
                className="object-contain max-h-44 max-w-full"
                loading="lazy"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">{project.name}</h3>
            <p className="text-gray-400 mb-4 text-center">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow text-sm font-medium"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
