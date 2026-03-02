import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

const BlogSection = () => (
  <motion.section
    id="Blog"
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
      Blog
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="bg-gray-900/80 rounded-lg p-4 shadow flex flex-col justify-between"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i - 1}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <h3 className="font-semibold text-lg mb-2">
            Learn Java - in a fun way
          </h3>
          <p className="text-gray-400 flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fuga doloribus cumque pariatur doloremque, quasi reprehenderit sunt
            possimus?
          </p>
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read more
          </motion.button>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default BlogSection;
