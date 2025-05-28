import { useEffect, useRef, useState } from "react";
import TypingEffect from "./TypingEffect";

const professions = [
  "Front-end Developer",
  "Programmer",
  "CS Student",
  "Web Developer",
];

const HomeSection = () => {
  return (
    <section id="Home" className="flex flex-col items-center justify-center min-h-[90vh] w-full pb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-8 md:mt-0">
        I'm a{" "}
        <span className="inline-block min-w-[15ch] text-left align-middle">
          <TypingEffect words={professions} className="text-indigo-400 type_my_profession" />
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-1 flex flex-col justify-end text-center md:items-start md:text-left pb-10">
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
        <div className="flex-1 flex justify-center items-end">
          <img
            src="/projects/programmer.png"
            alt="Programmer"
            className="w-72 h-72 object-contain drop-shadow-xl rounded-lg flex-shrink-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <a href="/Resume.pdf" target="_blank" className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow">Download CV</a>
        <a href="#Contact_me" className="btn bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow">Contact Me</a>
      </div>
    </section>
  );
};

export default HomeSection;
