import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => (
  <footer className="mt-10 text-center text-gray-400">
    <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
    <div className="flex justify-center gap-6 mt-2">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 hover:text-pink-500 transition" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-6 w-6 hover:text-blue-500 transition" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter className="h-6 w-6 hover:text-sky-400 transition" />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="h-6 w-6 hover:text-gray-100 transition" />
      </a>
    </div>
  </footer>
);

export default Footer;
