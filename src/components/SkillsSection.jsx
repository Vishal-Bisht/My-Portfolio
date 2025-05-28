const skills = [
  { src: "/skills/html5.svg", alt: "HTML" },
  { src: "/skills/css3.svg", alt: "CSS" },
  { src: "/skills/javascript.svg", alt: "JavaScript" },
  { src: "/skills/react.svg", alt: "React" },
  { src: "/skills/mysql.svg", alt: "MySQL" },
  { src: "/skills/github.svg", alt: "Github" },
  { src: "/skills/vscode.svg", alt: "Vs Code" },
  { src: "/skills/canva.svg", alt: "Canva" },
  { src: "/skills/figma.svg", alt: "figma" },
  { src: "/skills/googlecloud.svg", alt: "Google Cloud" },
  { src: "/skills/cplusplus.svg", alt: "C++" },
  { src: "/skills/vite.svg", alt: "Vite" },
];

const SkillsSection = () => (
  <section className="relative left-1/2 right-1/2 w-screen max-w-none -translate-x-1/2 py-8 bg-gray-800/60 rounded-xl shadow-lg overflow-hidden" style={{position: 'relative'}}>
    <h2 className="text-2xl font-bold text-center mb-6 text-white">My Skills</h2>
    <div className="relative w-full">
      {/* Blur overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: "linear-gradient(90deg, rgba(31,41,55,0.8) 70%, transparent)"}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: "linear-gradient(270deg, rgba(31,41,55,0.8) 70%, transparent)"}} />
      {/* Scrolling skills */}
      <div
        className="overflow-x-hidden w-full border-none"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", border: 'none' }}
      >
        <div
          className="flex gap-6 md:gap-10 items-center animate-skills-scroll will-change-transform group hover:[animation-play-state:paused]"
          style={{ animation: "skills-scroll 30s linear infinite" }}
        >
          {/* Repeat skills twice for seamless infinite effect */}
          {skills.concat(skills).map((skill, idx) => (
            <img
              key={idx}
              src={skill.src}
              alt={skill.alt}
              className="h-16 w-16 object-contain select-none drop-shadow-lg flex-shrink-0"
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
