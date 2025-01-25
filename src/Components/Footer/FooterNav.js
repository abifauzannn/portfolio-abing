import React from "react";
import { MdArrowOutward } from "react-icons/md";

function FooterNav() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <p
          className="text-[20px] poppins-regular"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          Follow me on social media
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <a
          href="https://www.instagram.com/abifauzannn?igsh=MWFpNWZoMGJxM3JueQ=="
          rel="noreferrer"
          target="_blank"
          className="text-[20px] poppins-regular flex items-center relative group"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          Instagram <MdArrowOutward />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="https://github.com/abifauzannn"
          rel="noreferrer"
          target="_blank"
          className="text-[20px] poppins-regular flex items-center relative group"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          Github <MdArrowOutward />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-abi-fauzan/"
          rel="noreferrer"
          target="_blank"
          className="text-[20px] poppins-regular flex items-center relative group"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          Linkedin <MdArrowOutward />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

export default FooterNav;
