import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Track scroll position (navbar bg + active section)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // scroll spy (detect which section is in view)
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click -> scroll to section smoothly
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition px-[7vw] md:px-[7vw] lg:px-[20vw] duration-300 ${
        isScrolled
          ? "bg-[#050141] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white"> Redoy Kumar. </span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors ${
                activeSection === item.id
                  ? "text-[#8245ec]"
                  : "hover:text-[#8245ec]"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social media (desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/redoy-kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="text-white hover:text-[#8245ec]" />
          </a>
          <a
            href="https://www.linkedin.com/in/redoykumardas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-white hover:text-[#8245ec]" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-[#8245ec] text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-[#8245ec] text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden lg:hidden py-4 absolute top-16 left-1/2 w-4/5 bg-[#050141] bg-opacity-50 backdrop-filter backdrop-blur-lg text-white transform -translate-x-1/2 z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 text-white">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : "hover:text-[#8245ec]"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 py-4">
              <a
                href="https://github.com/redoy-kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="text-white hover:text-[#8245ec]" />
              </a>
              <a
                href="https://www.linkedin.com/in/redoykumardas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="text-white hover:text-[#8245ec]"
                />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
