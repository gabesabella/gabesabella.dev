import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Footer(props) {
  return (
    <>
      <div className="flex flex-col justify-center w-full py-10 space-y-4 bg-skin-muted text-skin-base place-items-center">
        <p className="text-lg">
          {new Date().getFullYear()} - Created by Gabe Sabella
        </p>
        {/* <div className="flex space-x-8 uppercase">
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">projects</a>
          <a href="/">contact</a>
        </div> */}
        <div className="flex space-x-8 text-lg">
          <a href="https://www.linkedin.com/in/gabriel-sabella-188311260/">
            <div className="p-3 rounded-full bg-skin-inverted text-skin-inverted hover:brightness-110">
              <FaLinkedinIn></FaLinkedinIn>
            </div>
          </a>
          <a href="https://github.com/gabesabella">
            <div className="p-3 rounded-full bg-skin-inverted text-skin-inverted hover:brightness-110">
              <AiFillGithub></AiFillGithub>
            </div>
          </a>
          <a href="https://gabesresume.vercel.app/">
            <div className="p-3 rounded-full bg-skin-inverted text-skin-inverted hover:brightness-110">
              <IoNewspaperOutline></IoNewspaperOutline>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
