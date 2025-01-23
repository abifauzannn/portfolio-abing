import React from "react";
import { Link } from "react-router-dom";

const NavigatedTrue = () => {
  return (
    <nav className="text-white">
      <ul className="space-y-4 mt-4">
        <li className="flex flex-col">
          <Link
            className="text-9xl poppins-regular text-white uppercase font-bold hover:rotate-180 transition-transform duration-300 ease-in-out"
            data-aos="flip-up"
          >
            HOME
          </Link>
          <Link
            className="text-9xl poppins-regular text-white uppercase font-bold"
            data-aos="flip-up"
          >
            EXPERIENCE
          </Link>
          <Link
            className="text-9xl poppins-regular text-white uppercase font-bold"
            data-aos="flip-up"
          >
            PROJECT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigatedTrue;
