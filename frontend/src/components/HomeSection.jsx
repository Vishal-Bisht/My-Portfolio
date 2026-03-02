import { color, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const professions = ["Web Developer", "Programmer", "Fresher"];

// Animation variants
const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HomeSection = () => {
  return (
    <section
      id="Home"
      className="flex flex-col items-center justify-center min-h-[90vh] w-full pb-8"
    >
      <motion.h1
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-2xl  md:text-5xl font-bold text-center mb-8 mt-8 md:mt-0"
      >
        <span>I'm a </span>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Programmer",
            1000,
            "Fresher",
            1000,
          ]}
          speed={20}
          className="text-indigo-400"
          repeat={Infinity}
        />
      </motion.h1>
      <div className="flex flex-row justify-center">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col justify-end md:items-start md:text-left pb-10"
        >
          <div className="text-xl text-gray-300">Hi I am</div>
          <div className="font-bold text-3xl md:text-5xl text-white">
            Vishal Bisht
          </div>
          <div className="text-md text-gray-500">
            Front-end Developer, Programmer
          </div>
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex justify-center items-end"
        >
          <img
            src="/projects/programmer.png"
            className="w-72 h-72 object-contain drop-shadow-xl rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex gap-4 mt-8"
      >
        <a
          href="/My_Resume.pdf"
          target="_blank"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
        >
          Download CV
        </a>
        <a
          href="#Contact_me"
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default HomeSection;
