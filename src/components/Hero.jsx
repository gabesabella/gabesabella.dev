import React from "react";

export default function Hero(props) {
  return (
    <section>
      <div
        className={`flex justify-center w-screen bg-skin-fill place-items-center flex-wrap-reverse md:space-x-[5%] lg:space-x-[10%] space-x-0 md:flex-nowrap`}
      >
        <div className="flex flex-col justify-center place-items-center bg-skin-skill text-skin-base max-w-[400px] lg:max-w-[500px] px-5 lg:p-0">
          <div className="flex flex-col space-y-4 lg:space-y-5">
            <div className="space-y-2 ">
              <h1 className="font-bold">{props.h1}</h1>
              <h2 className="font-semibold">{props.h2}</h2>
            </div>
            <p className="pt-3 font-light">{props.description}</p>
          </div>
        </div>

        <div className="pb-10 sm:pb-0 lg:pb-0  lg:max-w-[300px] w-[200px] xl:w-[450px] 2xl:w-[500px]">
          <img
            src={props.image}
            alt={props.alt}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
