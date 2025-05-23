import { useState } from "react";

const projects = [
  {
    name: "Prescripto",
    image: "/prescripto.png",
    description: "A doctor appointment web app built with React and TailwindCSS.",
    link: "https://prescripto-black-six.vercel.app/",
    techStack: ["React", "TailwindCSS", "Vite"],
  },
  {
    name: "Portfolio Website",
    image: "/Portfolio.png",
    description: "A modern, responsive portfolio built with React and TailwindCSS.",
    link: "https://my-portfolio-eight-gray-88.vercel.app/",
    techStack: ["React", "TailwindCSS", "Vite"],
  },
  {
    name: "Amazon Clone",
    image: "/amazon-clone.png",
    description: "A clone of the Amazon UI to practice HTML, CSS, and JavaScript.",
    link: "https://vishal-bisht.github.io/Amazon-clone/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Palindrome Checker",
    image: "/palindrome-checker.png",
    description: "A palindrome checker built with JavaScript.",
    link: "https://github.com/yourusername/palindrome-checker",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Rock Paper Scissors Game",
    image: "/rock-paper-scissors.png",
    description: "A Rock Paper Scissors game built with JavaScript.",
    link: "https://vishal-bisht.github.io/Rock-Paper-Scissors-Game/",
    techStack: ["JavaScript", "HTML", "CSS"],
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
            <p className="text-gray-400 mb-2 text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.techStack && project.techStack.map((tech) => {
                let badgeClass = "text-xs px-2 py-1 rounded font-medium shadow-sm";
                switch (tech) {
                  case "React":
                    badgeClass += " bg-cyan-600/90 text-white";
                    break;
                  case "TailwindCSS":
                    badgeClass += " bg-teal-500/90 text-white";
                    break;
                  case "Vite":
                    badgeClass += " bg-purple-500/90 text-white";
                    break;
                  case "HTML":
                    badgeClass += " bg-orange-500/90 text-white";
                    break;
                  case "CSS":
                    badgeClass += " bg-blue-600/90 text-white";
                    break;
                  case "JavaScript":
                    badgeClass += " bg-yellow-400/90 text-gray-900";
                    break;
                  default:
                    badgeClass += " bg-gray-700/80 text-white";
                }
                return (
                  <span key={tech} className={badgeClass}>
                    {tech}
                  </span>
                );
              })}
            </div>
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
