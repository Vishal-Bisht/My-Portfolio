import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="mt-10 text-center text-gray-400">
    <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
    <div className="flex justify-center gap-6 mt-2">
      <a
        href="https://www.instagram.com/vishal_bisht001/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img
          src="/icons/instagram.svg"
          alt="Instagram"
          className="h-6 w-6 hover:brightness-125 transition"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/vishal-bist-4a5238261/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
         <img
          src="/icons/linkedin.svg"
          alt="Twitter"
          className="h-6 w-6 hover:brightness-125 transition"
        />
      </a>
      <a
        href="https://x.com/vishal_bisht128?t=H3wtKei4TBHEBUrorEmGXw&s=09"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <img
          src="/icons/x.svg"
          alt="Twitter"
          className="h-6 w-6 hover:brightness-125 transition"
        />
      </a>
      <a
        href="https://github.com/Vishal-Bisht"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          src="/icons/github.svg"
          alt="GitHub"
          className="h-6 w-6 hover:brightness-125 transition"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
