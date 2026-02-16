import express from "express";

const router = express.Router();

const projects = [
  {
    id: 1,
    name: "Notes/BookMark Manager",
    image: "/projects/NotesManager.png",
    description: "A full stack web app which manages notes and bookmarks.",
    link: "https://notes-bookmark-manager-sable.vercel.app/",
    techStack: ["Next", "MERN", "TailwindCSS", "Vite"],
    featured: true,
    createdAt: "2026-02-16",
  },
  {
    id: 2,
    name: "Prescripto",
    image: "/projects/prescripto.png",
    description:
      "A doctor appointment web app built with React and TailwindCSS.",
    link: "https://prescripto-two-lake.vercel.app/",
    techStack: ["MERN", "TailwindCSS", "Vite"],
    featured: true,
    createdAt: "2024-03-05",
  },
  {
    id: 3,
    name: "Sorting Visualizer",
    image: "/projects/visualizer.png",
    description:
      "A Sorting algorithm visualizer web app which visualizes how different sorting algorithms actually work.",
    link: "https://sorting-visualizer-ten-gamma.vercel.app/",
    techStack: ["React", "TailwindCSS", "Vite"],
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: 4,
    name: "WeatherScope",
    image: "/projects/WeatherScope.png",
    description:
      "A Weather app which shows weather condition of any location worldwide.",
    link: "https://weather-app-three-olive-95.vercel.app/",
    techStack: ["React", "TailwindCSS", "Vite"],
    featured: true,
    createdAt: "2024-02-10",
  },
  {
    id: 5,
    name: "CollegTips Gallery",
    image: "/projects/Image-gallery.png",
    description: "A Photo/Video Gallery created with React and TailwindCSS.",
    link: "https://image-gallery-liard-gamma.vercel.app/",
    techStack: ["React", "TailwindCSS", "Vite"],
    featured: true,
    createdAt: "2024-03-20",
  },
  {
    id: 6,
    name: "Amazon Clone",
    image: "/projects/amazon-clone.png",
    description:
      "A clone of the Amazon UI to practice HTML, CSS, and JavaScript.",
    link: "https://vishal-bisht.github.io/Amazon-clone/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    createdAt: "2023-11-15",
  },
  {
    id: 7,
    name: "Rock Paper Scissors Game",
    image: "/projects/rock-paper-scissors.png",
    description: "A Rock Paper Scissors game built with JavaScript.",
    link: "https://vishal-bisht.github.io/Rock-Paper-Scissors-Game/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    createdAt: "2023-10-20",
  },
  {
    id: 8,
    name: "Click Circle",
    image: "/projects/click-circle.png",
    description: "A mini project built with JavaScript.",
    link: "https://vishal-bisht.github.io/Click-Circle/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    createdAt: "2023-09-10",
  },
  {
    id: 9,
    name: "Palindrome Checker",
    image: "/projects/palindrome-checker.png",
    description: "A palindrome checker built with JavaScript.",
    link: "https://vishal-bisht.github.io/Palindrome-Checker/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    createdAt: "2023-08-25",
  },
];

router.get("/", (req, res) => {
  try {
    const { featured, limit, tech } = req.query;

    let filteredProjects = [...projects];

    // Filter by featured status
    if (featured !== undefined) {
      const isFeatured = featured === "true";
      filteredProjects = filteredProjects.filter(
        (project) => project.featured === isFeatured,
      );
    }

    // Filter by technology
    if (tech) {
      filteredProjects = filteredProjects.filter((project) =>
        project.techStack.some((t) =>
          t.toLowerCase().includes(tech.toLowerCase()),
        ),
      );
    }

    // Limit results
    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredProjects = filteredProjects.slice(0, limitNum);
      }
    }

    res.json({
      success: true,
      count: filteredProjects.length,
      projects: filteredProjects,
    });
  } catch (error) {
    console.error("Projects fetch error:", error);
    res.status(500).json({
      error: "Failed to fetch projects",
      message: "There was an error retrieving projects",
    });
  }
});

router.get("/featured", (req, res) => {
  try {
    const featuredProjects = projects.filter((project) => project.featured);
    res.json({
      success: true,
      count: featuredProjects.length,
      projects: featuredProjects,
    });
  } catch (error) {
    console.error("Featured projects fetch error:", error);
    res.status(500).json({
      error: "Failed to fetch featured projects",
      message: "There was an error retrieving featured projects",
    });
  }
});

router.get("/:id", (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
        message: "The requested project does not exist",
      });
    }

    res.json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Project fetch error:", error);
    res.status(500).json({
      error: "Failed to fetch project",
      message: "There was an error retrieving the project",
    });
  }
});

router.get("/tech/stack", (req, res) => {
  try {
    const allTech = projects.flatMap((project) => project.techStack);
    const uniqueTech = [...new Set(allTech)].sort();

    res.json({
      success: true,
      technologies: uniqueTech,
    });
  } catch (error) {
    console.error("Tech stack fetch error:", error);
    res.status(500).json({
      error: "Failed to fetch tech stack",
      message: "There was an error retrieving technology stack",
    });
  }
});

export default router;
