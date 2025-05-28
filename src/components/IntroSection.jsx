import { useState } from "react";

const introFull = `Hey there, I'm Vishal Bisht, a final year Computer Science student. From the get-go, I've been obsessed with all things related to programming and software development. It's like a puzzle to me—always challenging, always rewarding.

Whether it's C, C++, or JavaScript, I'm in my element. But it's not just about knowing the syntax for me. I dive deep into Data Structures and Algorithms, constantly honing my skills to build solutions that are not just functional but elegant too.

And then there's web development. That's where I get to flex my creative muscles. I love weaving together front-end and back-end technologies to create seamless user experiences. It's like painting with code. So yeah, you could say I'm pretty passionate about this stuff. And I can't wait to see where this journey takes me.`;

const introPreview = `Hey there, I'm Vishal Bist, a final year Computer Science student. From the get-go, I've been obsessed with all things related to programming and software development. It's like a puzzle to me—always challenging, always rewarding.`;

const IntroSection = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <section id="Intro" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="text-gray-300 mb-4 whitespace-pre-line">
        {showFull ? introFull : introPreview}
      </p>
      <div className="flex justify-center">
        <button
          className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          onClick={() => setShowFull((v) => !v)}
        >
          {showFull ? "Show less" : "Read more"}
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
