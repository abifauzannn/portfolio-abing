import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-between items-center py-10 px-10">
      {/* Header with Navigation */}
      <Navigation />

      {/* Main Section */}
      <section className="text-center flex flex-col items-center justify-center flex-grow text-white" >
        <h2
          className="text-6xl poppins-regular uppercase font-bold"
          data-aos="fade-up"
        >
          My Experience
        </h2>
        <p className="text-lg mt-4" data-aos="fade-up">
          I have gained valuable experience in Web & App Development
        </p>
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
  );
}

export default Experience;
