import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../Components/Navigation"; // Import Navigation Component

function Home() {
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
      <section className="text-center flex flex-col items-center justify-center flex-grow">
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

export default Home;
