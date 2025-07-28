const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    alt: "HTML",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    alt: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "Typescript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    alt: "Express",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    alt: "Mongoose",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "Node",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    alt: "Redux",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "Github",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "Vs Code",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    alt: "Canva",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    alt: "figma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    alt: "Postman",
  },
];

const SkillsSection = () => (
  <section
    className="relative left-1/2 right-1/2 w-screen max-w-none -translate-x-1/2 py-8 bg-gray-800/60 rounded-xl shadow-lg overflow-hidden"
    style={{ position: "relative" }}
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-white">
      My Skills
    </h2>
    <div className="relative w-full">
      {/* Blur overlays */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(31,41,55,0.8) 70%, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{
          background:
            "linear-gradient(270deg, rgba(31,41,55,0.8) 70%, transparent)",
        }}
      />

      {/* Skills Scrollbar */}
      <div
        className="overflow-x-hidden w-full border-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          border: "none",
        }}
      >
        <div
          className="flex gap-6 md:gap-10 items-center animate-skills-scroll will-change-transform group hover:[animation-play-state:paused]"
          style={{ animation: "skills-scroll 30s linear infinite" }}
        >
          {skills.concat(skills).map((skill, idx) => (
            <img
              key={idx}
              src={skill.src}
              alt={skill.alt}
              className="h-8 w-8 md:h-16 md:w-16 sm:mr-4 object-contain select-none drop-shadow-lg flex-shrink-0"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </div>
    {/* Animation styles */}
    <style>{`
      @keyframes skills-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-40%); }
      }
      .animate-skills-scroll {
        min-width: 200%;
      }
      .group:hover {
        animation-play-state: paused !important;
      }
      /* Remove any border from the scrolling area */
      .skills-scrollbar::-webkit-scrollbar,
      .skills-scrollbar {
        border: none !important;
      }
      html, body {
        overflow-x: hidden !important;
      }
    `}</style>
  </section>
);

export default SkillsSection;
