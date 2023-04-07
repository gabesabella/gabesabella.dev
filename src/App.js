import { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import Hero from "./components/Hero";
import heroImage from "./img/profile.jpeg";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { HashLink as Link } from "react-router-hash-link";

function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  let [isRotated, setIsRotated] = useState(false);
  let [showNav, setShowNav] = useState(false);

  let theme,
    rotateLeft,
    rotateRight,
    moveBarDown,
    invisible,
    mobileNavItems = "";

  let mobileNav = "hidden";

  if (isDarkMode) {
    theme = "theme-dark ";
  }

  if (isRotated) {
    rotateRight = "rotate-[135deg]";
    rotateLeft = "rotate-45";
    moveBarDown = "translate-y-[10px]";
    invisible = "opacity-0";
  }

  if (showNav) {
    mobileNav = "flex";
    mobileNavItems =
      "absolute top-[70px] space-y-3 right-10 py-4 flex-col w-48 h-fit bg-skin-inverted text-skin-inverted opacity-95 rounded-lg";
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleHamburger = () => {
    setIsRotated(!isRotated);
    setShowNav(!showNav);
  };

  return (
    <div className={`bg-skin-fill ${theme} w-screen`}>
      <div className="w-screen">
        <nav className={`flex px-10 py-5 text-skin-base bg-skin-muted`}>
          {/* container, hidden on small screens */}
          <div className="flex w-full">
            <Link to="/" smooth>
              <a href="/" className="font-mono text-2xl">
                GS
              </a>
            </Link>
          </div>

          {/* Hamburger */}
          <div className="block space-y-2 sm:hidden" onClick={handleHamburger}>
            <div
              className={`ease w-[30px] h-[2px] rounded-md bg-skin-inverted ${rotateRight} ${moveBarDown}`}
            ></div>
            <div
              className={`ease w-[30px] h-[2px] rounded-md bg-skin-inverted ${rotateLeft}`}
            ></div>
            <div
              className={`ease w-[30px] h-[2px] rounded-md bg-skin-inverted ${invisible}`}
            ></div>
          </div>

          {/* Fullscreen Nav */}
          <div className={`sm:flex ${mobileNav}`}>
            <div
              className={`flex sm:justify-end w-full sm:space-x-4 md:space-x-8 place-items-center ${mobileNavItems}`}
            >
              <Link to="#projects" smooth>
                Projects
              </Link>
              <Link to="#skills" smooth>
                Skills
              </Link>
              <Link to="#contact" smooth>
                Contact
              </Link>
              <Link to="/about">
                <a href="/">Resume</a>
              </Link>

              <input
                type="checkbox"
                className="absolute hidden"
                id="checkbox"
                onChange={toggleTheme}
              />
              <label htmlFor="checkbox" className="hover:text-skin-primary">
                <BsMoonStarsFill
                  className={`text-xl cursor-pointer absolute ${
                    isDarkMode ? "opacity-0" : ""
                  }`}
                ></BsMoonStarsFill>
                <BsSun
                  className={`text-xl cursor-pointer ${
                    isDarkMode ? "" : "opacity-0"
                  }`}
                ></BsSun>
              </label>
            </div>
          </div>
        </nav>
      </div>

      <Hero
        h1="Gabriel Sabella"
        h2="Web Developer"
        description="Hi, I'm Gabe, a frontend developer focused on creating beautiful web applications while writing clean code. "
        image={heroImage}
        imageAlt="some description"
      ></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer title="© All rights reserved"></Footer>
    </div>
  );
}

export default App;
