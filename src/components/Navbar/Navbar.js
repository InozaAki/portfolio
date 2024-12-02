import './Navbar.css';

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); 
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <nav className={`p-4 w-full ${scrolled ? "scrolled" : ""}`}>
      <ul className="flex justify-center gap-10 text-lg">
      <li>
          <a
            href="#home"
            className={`hover:text-white ${
              activeSection === "home" ? "active" : ""
            }`}>
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-white ${
              activeSection === "about" ? "active" : ""
            }`}>
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`hover:text-white ${
              activeSection === "projects" ? "active" : ""
            }`}>
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:text-white ${
              activeSection === "contact" ? "active" : ""
            }`}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;