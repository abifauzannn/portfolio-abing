import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdForwardToInbox } from "react-icons/md"; // Import AOS styles
import Clock from "./Components/Clock";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya dijalankan sekali
      offset: 100, // Jarak elemen sebelum animasi dipicu
    });
  }, []);

  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-between items-center py-10">
      {/* Header */}
      <header className="w-full px-10 pb-10 flex flex-row justify-between items-center text-white border-b border-gray-900">
        {/* Set lebar tetap untuk Clock */}
        <div className="flex-shrink-0 w-[200px]"> {/* Ubah lebar sesuai kebutuhan */}
          <Clock />
        </div>
        <MdForwardToInbox size={35} className="mt-2" data-aos="fade-down" />
        <button
          data-aos="fade-left"
          className="relative text-[20px] border border-white poppins-regular font-bold px-4 py-2 rounded-full overflow-hidden group uppercase hover:cursor-none"
        >
          <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
          <span className="relative text-white group-hover:text-black transition-colors duration-500">
            Navigate here
          </span>
        </button>
      </header>

      {/* Main Section */}
      <section className="text-center">
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
      <div className="w-full px-10 pt-10 flex flex-row justify-between items-center text-white">
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

export default App;
