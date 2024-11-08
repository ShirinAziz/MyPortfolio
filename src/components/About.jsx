import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full mt-40">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6c656d]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Shirin, nice to met you. please take a look around.</p>
          </div>
          <div>
            <p className="text-2xl">
              I'm a frontend developer passionate about creating cool and
              engaging projects. My previous project experience, coupled with my
              creative flair, has transformed me into a formidable developer
              ready to take on any challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
