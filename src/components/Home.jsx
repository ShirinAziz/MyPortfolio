import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Me from "/public/Me.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#404042] flex flex-col sm:flex-row gap-[50px] justify-center items-center max-w-[1000px] mx-auto px-8"
    >
      {/* Container */}
      <div className=" flex flex-col justify-center gap-[8px] h-full">
        <p className="sm:text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold">Shirin Aziz</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e34dfb]">
          I'm a Frontend Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          I'm a skilled frontend developer with a focus on web security,
          passionate about creating secure and interactive applications and
          experience the web.
        </p>
        <div>
          <button className="group border-2 px-3 my-2 h-10 flex items-center hover:bg-[#e34dfb] hover:border-[#e34dfb]">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div>
        <img
          className=" sm:h-[500px] sm:w-[600px] rounded-[50%]"
          src={Me}
          alt="pic of me"
        />
      </div>
    </div>
  );
};

export default Home;
