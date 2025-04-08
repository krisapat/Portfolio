"use client";

import { useEffect, useRef, useState } from "react";

const sections = ["Home", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            const linkEl = linkRefs.current[id];
            if (linkEl) {
              const rect = linkEl.getBoundingClientRect();
              const containerRect = linkEl.parentElement?.getBoundingClientRect();
              if (containerRect) {
                setBarStyle({
                  left: rect.left - containerRect.left,
                  width: rect.width,
                });
              }
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const handleInitialSection = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(id);
            const linkEl = linkRefs.current[id];
            if (linkEl) {
              const linkRect = linkEl.getBoundingClientRect();
              const containerRect = linkEl.parentElement?.getBoundingClientRect();
              if (containerRect) {
                setBarStyle({
                  left: linkRect.left - containerRect.left,
                  width: linkRect.width,
                });
              }
            }
            break;
          }
        }
      }
    };
    handleInitialSection();
    return () => observer.disconnect();
  }, []);
  return (
    <header>
      <nav className="backdrop-blur-md bg-white/10 p-4 fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">Tech Company</div>

          {/* Desktop Menu */}
          <div className="relative hidden md:flex space-x-5 text-white">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                ref={(el) => (linkRefs.current[sec] = el)}
                className={`${activeSection === sec ? "text-blue-500" : "text-white"
                  } hover:scale-[1.2] transition-transform duration-300 capitalize relative`}
              >
                {sec}
              </a>
            ))}

            {/* Moving Bar */}
            <span
              className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
              style={{
                left: barStyle.left,
                width: barStyle.width,
              }}
            />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-md bg-white/10 text-white flex flex-col items-start w-full fixed top-16 left-0 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        style={{ zIndex: 20 }}
      >
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={handleLinkClick}
            className={`${activeSection === sec ? "text-blue-500" : "text-white"
              } hover:scale-[1.2] transition-transform duration-300 px-4 py-3 w-full capitalize`}
          >
            {sec}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
