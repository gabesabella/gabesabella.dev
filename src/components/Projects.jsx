import React from "react";
import p1d from "../img/projects/p1d.webp";
import p1m from "../img/projects/p1m.webp";
import p2d from "../img/projects/p2d.webp";
import p2m from "../img/projects/p2m.webp";
import p3d from "../img/projects/p3d.webp";
import p3m from "../img/projects/p3m.webp";
import p4d from "../img/projects/p4d.webp";
import p4m from "../img/projects/p4m.webp";
import p5d from "../img/projects/p5d.webp";
import p5m from "../img/projects/p5m.webp";
import p6d from "../img/projects/p6d.webp";
import p6m from "../img/projects/p6m.webp";

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="pb-5 text-center uppercase text-skin-base">Projects</h2>
      <div className="flex justify-center w-screen">
        <div className="grid gap-x-12 gap-y-12 md:gap-y-16 lg:gap-y-24 max-w-[1400px] grid-cols-1 md:grid-cols-2">
          <a
            href="https://johnnygoodman.vercel.app/"
            className="flex px-2  hover:scale-[105%] ease "
          >
            <img
              src={p1d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />
            <img
              src={p1m}
              alt="First project mobile version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
          <a
            href="https://gregsshop.vercel.app"
            className="flex px-2  hover:scale-[105%] ease"
          >
            <img
              src={p2d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />

            <img
              src={p2m}
              alt="First project desktop version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
          <a
            href="https://rightflight.vercel.app"
            className="flex  px-2 ustify-center hover:scale-[105%] ease"
          >
            <img
              src={p3d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />
            <img
              src={p3m}
              alt="First project desktop version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
          <a
            href="https://bored-api-app.vercel.app/"
            className="flex px-2 stify-center hover:scale-[105%] ease"
          >
            <img
              src={p4d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />
            <img
              src={p4m}
              alt="First project desktop version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
          <a
            href="https://poster-5wxj.vercel.app/"
            className="flex  px-2 ustify-center hover:scale-[105%] ease"
          >
            <img
              src={p5d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />
            <img
              src={p5m}
              alt="First project desktop version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
          <a
            href="https://todo-pi-nine.vercel.app/"
            className="flex  px-2 ustify-center hover:scale-[105%] ease"
          >
            <img
              src={p6d}
              alt="First project desktop version"
              className="w-[250px] md:w-[300px] lg:w-[400px]"
            />
            <img
              src={p6m}
              alt="First project desktop version"
              className="bg-cover h-[140px] md:h-[170px] lg:h-[220px] translate-y-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
