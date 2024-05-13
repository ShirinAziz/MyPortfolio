import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const SocialIcons = () => {
  return (
    <>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 ">
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/shirin-aziz-343a98213/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href="https://github.com/ShirinAziz?tab=repositories"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fe2b0] ">
            <Link
              className="flex justify-between items-center w-full"
              to="contact"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
