import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites using React, TailwindCSS, and more.",
  },
  {
    title: "Programming Tutoring",
    description:
      "Personalized lessons in C, C++, Java, and DSA for all levels.",
  },
  {
    title: "Project Consulting",
    description: "Guidance and support for your software projects and ideas.",
  },
];

const ServicesSection = () => (
  <motion.section
    id="Services"
    className="bg-gray-800/60 rounded-xl p-6 shadow-lg"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    <motion.h2
      className="text-2xl font-bold mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Services
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          className="bg-gray-900/80 rounded-lg p-4 shadow"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-gray-400">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default ServicesSection;
