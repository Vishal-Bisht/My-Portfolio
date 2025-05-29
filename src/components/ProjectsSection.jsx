import { useState } from "react";

const projects = [
	{
		name: "CollegTips Gallery",
		image: "/projects/Image-gallery.png",
		description: "A Photo/Video Gallery created with React and TailwindCSS.",
		link: "https://image-gallery-liard-gamma.vercel.app/",
		techStack: ["React", "TailwindCSS", "Vite"],
	},
	{
		name: "Prescripto",
		image: "/projects/prescripto.png",
		description: "A doctor appointment web app built with React and TailwindCSS.",
		link: "https://prescripto-black-six.vercel.app/",
		techStack: ["React", "TailwindCSS", "Vite"],
	},
	{
		name: "Portfolio Website",
		image: "/projects/Portfolio.png",
		description: "A modern, responsive portfolio built with React and TailwindCSS.",
		link: "https://my-portfolio-eight-gray-88.vercel.app/",
		techStack: ["React", "TailwindCSS", "Vite"],
	},
	{
		name: "Amazon Clone",
		image: "/projects/amazon-clone.png",
		description: "A clone of the Amazon UI to practice HTML, CSS, and JavaScript.",
		link: "https://vishal-bisht.github.io/Amazon-clone/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
	{
		name: "Palindrome Checker",
		image: "/projects/palindrome-checker.png",
		description: "A palindrome checker built with JavaScript.",
		link: "https://vishal-bisht.github.io/Palindrome-Checker/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
	{
		name: "Rock Paper Scissors Game",
		image: "/projects/rock-paper-scissors.png",
		description: "A Rock Paper Scissors game built with JavaScript.",
		link: "https://vishal-bisht.github.io/Rock-Paper-Scissors-Game/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
];

const ProjectsSection = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleProjects = showAll ? projects : projects.slice(0, 4);
	return (
		<section id="Projects" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{visibleProjects.map((project) => (
					<div
						key={project.name}
						className="bg-gray-900/80 rounded-lg p-4 shadow flex flex-col items-center hover:scale-[1.03] transition-transform duration-200"
					>
						<div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded border border-gray-700 bg-gray-800">
							<img
								src={project.image}
								alt={project.name}
								className="object-contain max-h-44 max-w-full"
								loading="lazy"
							/>
						</div>
						<h3 className="font-semibold text-lg mb-2 text-center">
							{project.name}
						</h3>
						<p className="text-gray-400 mb-2 text-center">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2 mb-4 justify-center">
							{project.techStack &&
								project.techStack.map((tech) => (
									<span
										key={tech}
										style={{
											backgroundColor: "#B8FF66",
											color: "#225100",
										}}
										className="text-xs px-2 py-1 rounded font-medium shadow-sm"
									>
										{tech}
									</span>
								))}
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
