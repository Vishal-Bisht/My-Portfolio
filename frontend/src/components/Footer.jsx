import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.instagram.com/vishal_bisht001/",
    icon: "/icons/instagram.svg",
    alt: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/vishal-bisht-4a5238261/",
    icon: "/icons/linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/vishal_bisht128?t=H3wtKei4TBHEBUrorEmGXw&s=09",
    icon: "/icons/x.svg",
    alt: "Twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/Vishal-Bisht",
    icon: "/icons/github.svg",
    alt: "GitHub",
    label: "GitHub",
  },
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Footer = () => (
  <motion.footer
    className="mt-10 text-center text-gray-400"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
  >
    <style>{`
      .footer-social-icon {
        filter: grayscale(1) brightness(0.8);
        transition: filter 0.2s, box-shadow 0.2s;
      }
      .footer-social-icon:hover {
        filter: none;
        box-shadow: 0 2px 8px 0 rgba(99,102,241,0.3);
      }
    `}</style>
    <motion.h2
      className="text-lg font-semibold mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false }}
    >
      Connect with me
    </motion.h2>
    <div className="flex justify-center gap-6 mt-2">
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={i}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={link.icon}
            alt={link.alt}
            className="h-6 w-6 footer-social-icon"
          />
        </motion.a>
      ))}
    </div>
    <motion.div
      className="mt-4 text-xs text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: false }}
    >
      &copy; {new Date().getFullYear()} Vishal Bisht. All rights reserved.
    </motion.div>
  </motion.footer>
);

export default Footer;
