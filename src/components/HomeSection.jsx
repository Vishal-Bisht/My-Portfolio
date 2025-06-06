import { useEffect } from "react";
import TypingEffect from "./TypingEffect";
import AOS from "aos";
import "aos/dist/aos.css";

const professions = [
  "Front-end Developer",
  "Programmer",
  "CS Student",
];

const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Home" className="flex flex-col items-center justify-center min-h-[90vh] w-full pb-8">
      <h1 data-aos="fade-down" className="text-2xl  md:text-5xl font-bold text-center mb-8 mt-8 md:mt-0">
        I'm a{" "}
        <span className="inline-block min-w-[15ch] text-left align-middle">
          <TypingEffect words={professions} className="text-indigo-400 type_my_profession" />
        </span>
      </h1>
      <div className="flex flex-row justify-center">
        <div className="flex-1 flex flex-col justify-end text-center md:items-start md:text-left pb-10" data-aos="fade-right">
          <div className="text-xl text-gray-300 text-left">
            Hi I am
          </div>
          <div className="font-bold text-3xl md:text-5xl text-white">
            Vishal Bisht
          </div>
          <div className="text-md text-gray-500 text-left">
            Front-end Developer, Programmer
          </div>
        </div>
        <div className="flex-1 flex justify-center items-end" data-aos="fade-left">
          <img
            src="/projects/programmer.png"
            alt="Programmer"
            className="w-71 h-71 object-contain drop-shadow-xl rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-8" data-aos="fade-up">
        <a href="/Resume.pdf" target="_blank" className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow">Download CV</a>
        <a href="#Contact_me" className="btn bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow">Contact Me</a>
      </div>
    </section>
  );
};

export default HomeSection;
