import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LEFT: Social icons */}
        <div className="flex items-center gap-3 text-lg">
          {/* GitHub */}
          <a
            href="https://github.com/YUNUSSR"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-yunus-sr/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/md_.d._yunus?igsh=MmhqcXFvcW5yeGVt"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* RIGHT: Nav links + Resume button */}
        <div className="flex items-center gap-4">
          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    px-3 py-1 
                    rounded-full 
                    border border-transparent 
                    transition-all duration-200 
                    hover:border-blue-400 
                    hover:text-blue-400 
                    hover:bg-slate-900/70
                    hover:-translate-y-0.5
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button (desktop) */}
          <a
            href="/Mohamed_Yunus_SR_Resume.pdf"
            download
            className="hidden sm:inline-block px-3 py-1.5 text-xs font-medium rounded-md bg-blue-500 hover:bg-blue-600 transition"
          >
            Download Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded-md border border-slate-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/95">
          <ul className="flex flex-col px-4 py-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-blue-400 transition"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resume link in mobile menu */}
            <li className="mt-1 border-t border-slate-800 pt-2">
              <a
                href="/Mohamed_Yunus_SR_Resume.pdf"
                download
                className="block py-2 text-blue-400 font-medium"
                onClick={handleLinkClick}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
