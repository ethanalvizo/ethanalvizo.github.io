import React from "react";
import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";

const Footer = () => {
  const iconSize = 22;

  return (
    <div>
      <div className="py-5 text-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="mailto: ethanalvizo@gmail.com"
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              >
                <FaGoogle size={iconSize} />
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-alvizo-19b5781a0/"
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              >
                <FaLinkedin size={iconSize} />
              </a>
              <a
                href="https://github.com/ethanalvizo"
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              >
                <FaGithub size={iconSize} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
