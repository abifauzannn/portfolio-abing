import React, { useState } from "react";
import { MdForwardToInbox, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate(); // Perbaikan typo dari naigate ke navigate

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="w-full pb-10 flex flex-row justify-between items-center text-white">
        {/* Clock (optional) */}
        <div className="flex-shrink-0 w-[200px]">
          <Clock />
        </div>

        {/* Navigation Icon */}

        
        <MdForwardToInbox
          size={35}
          className="mt-2 cursor-pointer"
          onClick={() => navigate("/")} // Perbaikan penggunaan fungsi navigate
          data-aos="fade-down"
        />

        {/* Toggle button */}
        <button
          onClick={toggleNav}
          data-aos="fade-left"
          className="relative text-[20px] border border-white poppins-regular font-bold w-[210px] py-2 rounded-full overflow-hidden group uppercase"
        >
          <span className="absolute inset-0 bg-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
          <span className="relative text-white group-hover:text-black transition-colors duration-500">
            {isNavOpen ? "Schedule a call" : "Navigate Here"}
          </span>
        </button>
      </header>

      {isNavOpen && (
        <div className="fixed top-0 left-0 px-10 py-10 w-full h-screen bg-black flex flex-col justify-center items-center text-white z-50">
          {/* Close icon */}
          <div className="flex flex-row justify-between items-center w-full">
            {/* Clock */}
            <div className="flex-shrink-0 w-[200px]">
              <Clock />
            </div>

            {/* Navigation Icon */}
            <MdClose
              size={35}
              className="mt-2 cursor-pointer"
              onClick={toggleNav} // Tetap toggle navigasi
              data-aos="fade-down"
            />

            {/* Toggle button */}
            <button
              data-aos="fade-left"
              className="relative text-[20px] border border-white poppins-regular font-bold w-[210px] py-2 rounded-full overflow-hidden group uppercase"
            >
              <span className="absolute inset-0 bg-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
              <span className="relative text-white group-hover:text-black transition-colors duration-500">
                {isNavOpen ? "Schedule a call" : "Navigate Here"}
              </span>
            </button>
          </div>

          {/* Main Section */}
          <section className="text-center flex flex-col items-center justify-center flex-grow">
            <nav className="text-white">
              <ul className="space-y-4 mt-4">
                <li className="flex flex-col">
                  <Link
                    to="/"
                    className="text-9xl poppins-regular text-white uppercase font-bold hover:animate-pulse"
                    data-aos="flip-up"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/"
                    className="text-9xl poppins-regular text-white uppercase font-bold hover:animate-pulse"
                    data-aos="flip-up"
                  >
                    about
                  </Link>
                  <Link
                    to="/experience"
                    className="text-9xl poppins-regular text-white uppercase font-bold hover:animate-pulse"
                    data-aos="flip-up"
                  >
                    EXPERIENCE
                  </Link>
                  <Link
                    to="/project"
                    className="text-9xl poppins-regular text-white uppercase font-bold hover:animate-pulse"
                    data-aos="flip-up"
                  >
                    PROJECT
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Footer */}
          <div className="flex flex-row justify-between items-center w-full mt-4 text-white">
            <p
              className="text-[20px] poppins-regular"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-anchor-placement="bottom-bottom"
            >
              Based in Bandung, Indonesia
            </p>
            <p
              className="text-[20px] poppins-regular"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor-placement="bottom-bottom"
            >
              Frontend Developer
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
