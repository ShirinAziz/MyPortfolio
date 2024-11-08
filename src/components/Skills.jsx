import React from "react";

import HTML from "/public/html.png";
import CSS from "/public/css.png";
import JavaScript from "/public/javascript.png";
import ReactImg from "/public/react.png";
import Node from "/public/node.png";
import Tailwind from "/public/tailwind.png";
import GitHub from "/public/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full mt-40">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#6c656d]">
            Skills
          </p>
          <p className="py-4">// These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4"> HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4"> CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4"> JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4"> REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4"> TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4"> GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
