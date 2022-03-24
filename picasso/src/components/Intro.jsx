import React from "react";
import trish from "../assets/_DSC0016.jpg"

const Intro = () => {
  return (
    <div className="pb-24">
      <div className="my-8">
        <h3 className="text-lg tracking-wide ">
          "<br />
          YOU'VE ALWAYS HAD THE POWER, YOU JUST HAD TO LEARN IT FOR YOURSELF
          <br />"
        </h3>
      </div>
      <div>
          <img className="w-60 mx-auto shadow-2xl" src={trish} alt="" />
      </div>
    </div>
  );
};

export default Intro;
