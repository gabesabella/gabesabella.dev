import { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import Hero from "./components/Hero";
import heroImage from "./img/profile.jpeg";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashLink } from "react-router-hash-link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);

  let theme = "";

  if (isDarkMode) {
    theme = "theme-dark ";
  }

  let [rotateRight, setRotateRight] = useState(false);
  let [rotateLeft, setRotateLeft] = useState(false);
  let [navHeight, setNavHeight] = useState(false);
  let [opacity, setOpacity] = useState(false);
  let [hidden, setHidden] = useState(false);

  const handleHamburger = () => {
    setRotateLeft(!rotateLeft);
    setRotateRight(!rotateRight);
    setNavHeight(!navHeight);
    setOpacity(!opacity);
    setHidden(!hidden);
  };

  if (rotateLeft || rotateRight) {
    rotateRight = "rotate-45 translate-y-[5px]";
    rotateLeft = "-rotate-45 self-center -translate-y-[5px]";
    navHeight = "h-screen";
    opacity = "opacity-0";
    hidden = "opacity-100";
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-skin-fill ${theme} w-screen relative z-10`}>
      <nav
        className={`z-20 fixed transition-all duration-200 ease-in-out h-10  w-full bg-skin-inverted text-skin-inverted flex px-5 ${navHeight}`}
      >
        <div
          className={`transition-all duration-200 ease-in-out flex flex-col text-3xl mx-10 mt-24 opacity-0 absolute ${hidden} space-y-7`}
        >
          <HashLink to="#projects" smooth onClick={handleHamburger}>
            Projects
          </HashLink>
          <HashLink to="#skills" smooth onClick={handleHamburger}>
            Skills
          </HashLink>
          <HashLink to="#contact" smooth onClick={handleHamburger}>
            Contact
          </HashLink>
          <a href="https://github.com/gabesabella">
            <AiFillGithub className="text-3xl" onClick={handleHamburger} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-sabella-188311260/">
            <FaLinkedinIn className="text-2xl" onClick={handleHamburger} />
          </a>
        </div>
        <div className="flex w-full h-10 place-items-center">
          <input
            type="checkbox"
            className="absolute hidden"
            id="checkbox"
            onChange={toggleTheme}
          />
          <label htmlFor="checkbox" className="hover:text-skin-primary">
            <BsMoonStarsFill
              className={`cursor-pointer absolute ${
                isDarkMode ? "opacity-0" : ""
              }`}
            ></BsMoonStarsFill>
            <BsSun
              className={`cursor-pointer ${isDarkMode ? "" : "opacity-0"}`}
            ></BsSun>
          </label>
          <div className="flex justify-end w-full space-x-5">
            {/* Hamburger */}
            <div
              className="cursor-pointer flex flex-col h-[12px] w-[21px] justify-between"
              onClick={handleHamburger}
            >
              <div
                className={`w-full rounded-full h-[2px] transition-all ease-linear duration-200 bg-skin-fill self-start ${rotateRight}`}
              ></div>
              <div
                className={`w-full rounded-full h-[2px] transition-all ease-linear duration-200 bg-skin-fill self-end ${rotateLeft}`}
              ></div>
            </div>
          </div>
        </div>
      </nav>

      <Hero
        h1="Gabriel Sabella"
        h2="I design and build websites."
        description="I'm a software engineer specializing in building beautiful websites that help businesses grow. I am passionate about creating exceptional user experiences while writing clean, reusable code."
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
