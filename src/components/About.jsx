import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#404042] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
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
            <p>
              As a frontend developer with a focus on web security, I specialize
              in ensuring and improving the security of websites or web
              application user interfaces. My responsibilities include
              integrating security into the design process, conducting code
              reviews, implementing encryption, managing authentication and
              authorization, protecting against various types of attacks such as
              XSS and CSRF, securely handling client data, keeping libraries and
              frameworks up to date, and raising awareness and training around
              web security within the team. The goal is to create a safe and
              secure user experience by preventing and managing security risks
              and vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
