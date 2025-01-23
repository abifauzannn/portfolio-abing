import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdForwardToInbox } from "react-icons/md"; // Import AOS styles
import { IoMdClose } from "react-icons/io";
import Clock from "../Components/Clock";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Home() {
  const [isNavigated, setIsNavigated] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [currentSection, setCurrentSection] = useState("home"); // Track which section is active

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleNavigateClick = () => {
    setIsNavigated((prev) => !prev);
  };

  const changeSection = (section) => {
    setCurrentSection(section);
    setFadeIn(false); // Reset fadeIn before changing section
    setTimeout(() => {
      setFadeIn(true); // Trigger fadeIn again after a short delay
    }, 100); // Delay to reset the animation
  };

  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-between items-center py-10">
      {/* Header */}
      <header className="w-full px-10 pb-10 flex flex-row justify-between items-center text-white border-b border-gray-900">
        <div className="flex-shrink-0 w-[200px]">
          <Clock />
        </div>
        {isNavigated ? (
          <svg
            onClick={() => {
              handleNavigateClick(); // Fungsi pertama (untuk menampilkan navigasi)
              changeSection("home"); // Fungsi kedua (untuk mengubah bagian ke 'experience')
            }}
            data-aos="fade-down"
            width="35px"
            height="35px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="rgba(214, 214, 215, 0.7)"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        ) : (
          <MdForwardToInbox size={35} className="mt-2" data-aos="fade-down" />
        )}

        {isNavigated ? (
          <button
            data-aos="fade-left"
            className="relative text-[20px] border border-white poppins-regular font-bold px-4 py-2 rounded-full overflow-hidden group uppercase hover:cursor-none"
          >
            <span className="absolute inset-0 bg-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
            <span className="relative text-white group-hover:text-black transition-colors duration-500">
              Schedule a call
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              handleNavigateClick(); // Fungsi pertama (untuk menampilkan navigasi)
              changeSection("nav-section"); // Fungsi kedua (untuk mengubah bagian ke 'experience')
            }}
            data-aos="fade-left"
            className="relative text-[20px] border border-white poppins-regular font-bold px-4 py-2 rounded-full overflow-hidden group uppercase hover:cursor-none"
          >
            <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
            <span className="relative text-white group-hover:text-black transition-colors duration-500">
              Navigate Here
            </span>
          </button>
        )}
      </header>

      {/* Main Section */}
      <section className="text-center">
        {isNavigated ? (
          // If navigated, render the Nav content
          <nav className="text-white">
            <ul className="space-y-4 mt-4">
              <li className="flex flex-col">
                <Link
                  to="#"
                  className="text-9xl poppins-regular text-white uppercase font-bold hover:rotate-180 transition-transform duration-300 ease-in-out"
                  data-aos="flip-up"
                  onClick={() => {
                    handleNavigateClick(); // Fungsi pertama (untuk menampilkan navigasi)
                    changeSection("home"); // Fungsi kedua (untuk mengubah bagian ke 'experience')
                  }}
                >
                  HOME
                </Link>
                <Link
                  to="#"
                  className="text-9xl poppins-regular text-white uppercase font-bold"
                  data-aos="flip-up"
                  onClick={() => changeSection("nav-section")}
                >
                  EXPERIENCE
                </Link>
                <Link
                  to="#"
                  className="text-9xl poppins-regular text-white uppercase font-bold"
                  data-aos="flip-up"
                  onClick={() => changeSection("nav-section")}
                >
                  PROJECT
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          // Default Main Section content
          <>
            {currentSection === "home" && (
              <div className="flex flex-row justify-between items-center">
                <p
                  className="text-[20px] poppins-regular"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Experience Section Content
                </p>
              </div>
            )}

            <h2
              className="text-6xl poppins-regular text-white uppercase font-bold"
              data-aos="flip-up"
            >
              Mohammad
            </h2>
            <h2
              className="text-6xl poppins-regular text-white uppercase font-bold"
              data-aos="flip-up"
            >
              Abi Fauzan
            </h2>
          </>
        )}
      </section>

      {/* Footer */}
      <div className="w-full px-10 pt-10 text-white">
        {currentSection === "home" && (
          <div className="flex flex-row justify-between items-center">
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
        )}

        {currentSection === "experience" && (
          <div className="flex flex-row justify-between items-center">
            <p
              className="text-[20px] poppins-regular"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-anchor-placement="bottom-bottom"
            >
              Experience Section Content
            </p>
          </div>
        )}

        {currentSection === "project" && (
          <div className="flex flex-row justify-between items-center">
            <p
              className="text-[20px] poppins-regular"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-anchor-placement="bottom-bottom"
            >
              Project Section Content
            </p>
          </div>
        )}

        {currentSection === "nav-section" && (
          <div className="flex flex-row justify-between items-center">
            <div>
              <p
                className="text-[20px] poppins-regular"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-bottom"
              >
                Nav Section
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <p
                className="text-[20px] poppins-regular flex items-center relative group"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-bottom"
              >
                Instagram <MdArrowOutward />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className="text-[20px] poppins-regular flex items-center relative group"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-bottom"
              >
                Github <MdArrowOutward />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className="text-[20px] poppins-regular flex items-center relative group"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-bottom"
              >
                Linkedin <MdArrowOutward />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
