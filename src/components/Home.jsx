import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#404042]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shirin Aziz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[700px]">
          I'm a skilled frontend developer with a focus on web security,
          passionate about creating secure and interactive applications and
          experience the web.
        </p>
        <div>
          <button className="text-white group border-2 px-3 my-2 h-10 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
