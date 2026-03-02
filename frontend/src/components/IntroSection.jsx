import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const introFull = `Hey there, I'm Vishal Bisht, a final year Computer Science student. From the get-go, I've been obsessed with all things related to programming and software development. It's like a puzzle to me—always challenging, always rewarding.

Whether it's C, C++, or JavaScript, I'm in my element. But it's not just about knowing the syntax for me. I dive deep into Data Structures and Algorithms, constantly honing my skills to build solutions that are not just functional but elegant too.

And then there's web development. That's where I get to flex my creative muscles. I love weaving together front-end and back-end technologies to create seamless user experiences. It's like painting with code. So yeah, you could say I'm pretty passionate about this stuff. And I can't wait to see where this journey takes me.`;

const introPreview = `Hey there, I'm Vishal Bisht, a final year Computer Science student. From the get-go, I've been obsessed with all things related to programming and software development. It's like a puzzle to me—always challenging, always rewarding.`;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IntroSection = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <motion.section
      id="Intro"
      className="bg-gray-800/60 rounded-xl p-6 shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>
      <AnimatePresence mode="wait">
        <motion.p
          key={showFull ? "full" : "preview"}
          className="text-gray-300 mb-4 whitespace-pre-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {showFull ? introFull : introPreview}
        </motion.p>
      </AnimatePresence>
      <div className="flex justify-center">
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          onClick={() => setShowFull((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showFull ? "Show less" : "Read more"}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default IntroSection;
