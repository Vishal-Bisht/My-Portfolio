import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#Intro", label: "Intro" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact_me", label: "Contact me" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const yOffset = window.innerWidth >= 768 ? 96 : 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-20 backdrop-blur-md bg-gray-950/70 border-b border-gray-800 transition-colors duration-300 flex items-center`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4 py-3">
          <a
            href="#Home"
            className="font-bold text-xl tracking-wide text-indigo-400 select-none outline-none"
            onClick={(e) => handleNavClick(e, "#Home")}
          >
            Vishal Bisht
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 px-4 rounded hover:bg-indigo-600/80 transition text-white"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded border border-gray-600 bg-gray-800/70 hover:bg-gray-700/80 text-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm flex">
          <nav className="w-64 bg-gray-950/95 h-full p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg text-indigo-400">Menu</span>
              <button
                className="p-2 rounded border border-gray-600 bg-gray-800/70 hover:bg-gray-700/80 text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 px-4 rounded hover:bg-indigo-600/80 transition text-white"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
