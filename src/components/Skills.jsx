import React from "react";
// Frontend tech
import js from "../img/skills/frontend/js.png";
import ts from "../img/skills/frontend/ts.png";
import react from "../img/skills/frontend/react.png";
import html from "../img/skills/frontend/html.svg";
import css from "../img/skills/frontend/css.png";
import sass from "../img/skills/frontend/sass.png";
import tw from "../img/skills/frontend/tw.png";
// Backend tech
import django from "../img/skills/backend/django.png";
import java from "../img/skills/backend/java.png";
import mongo from "../img/skills/backend/mongo.webp";
import python from "../img/skills/backend/python.png";
import sql from "../img/skills/backend/sql.svg";
// Other
import git from "../img/skills/other/git.png";
import vercel from "../img/skills/other/vercel.png";
import prisma from "../img/skills/other/prisma.svg";
import railway from "../img/skills/other/railway.svg";

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="flex flex-col justify-center space-y-5 place-items-center text-skin-base"
      >
        <h2 className="p-10 font-bold uppercase">Skills</h2>
        {/* Frontend */}
        <p className="font-mono font-light ">Frontend</p>
        <div className="flex flex-wrap space-x-5">
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={js} className="w-full h-16" alt="javascript logo" />
            <p className="text-[12px] text-center">JavaScript</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={ts} className="w-full h-16" alt="typescroipt logo" />
            <p className="text-[12px] text-center">TypeScript</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img
              src={react}
              className="w-full h-16 p-2 bg-indigo-900 rounded"
              alt="react logo"
            />
            <p className="text-[12px] text-center">React</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={html} className="w-full h-16" alt="html logo" />
            <p className="text-[12px] text-center">HTML</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={css} className="w-full h-16" alt="css logo" />
            <p className="text-[12px] text-center">CSS</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={sass} className="w-full h-16" alt="sass logo" />
            <p className="text-[12px] text-center">SCSS</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={tw} className="w-full h-16" alt="tailwind logo" />
            <p className="text-[12px] text-center">Tailwind</p>
          </div>
        </div>
        {/* Backend */}
        <p className="font-mono font-light">Backend</p>
        <div className="flex flex-wrap space-x-5">
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={sql} className="w-full h-16" alt="sql logo" />
            <p className="text-[12px] text-center">SQL</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={java} className="w-full h-16" alt="java logo" />
            <p className="text-[12px] text-center">Java</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={python} className="w-full h-16" alt="python logo" />
            <p className="text-[12px] text-center">Python</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={django} className="w-full h-16" alt="java logo" />
            <p className="text-[12px] text-center">Django</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={mongo} className="w-full h-16" alt="mongo logo" />
            <p className="text-[12px] text-center">Mongo</p>
          </div>
        </div>
        {/* Other */}
        <p className="font-mono font-light">Other</p>
        <div className="flex flex-wrap space-x-5">
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={git} className="w-full h-16" alt="git logo" />
            <p className="text-[12px] text-center">Git</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={vercel} className="w-full h-16" alt="vercel logo" />
            <p className="text-[12px] text-center">Vercel</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={prisma} className="w-full h-16" alt="prisma logo" />
            <p className="text-[12px] text-center">Primsa</p>
          </div>
          <div className="flex flex-col justify-center p-2 text-center shadow-lg place-content-center w-fit">
            <img src={railway} className="w-full h-16" alt="railway logo" />
            <p className="text-[12px] text-center">Railway</p>
          </div>
        </div>
      </section>
    </>
  );
}
