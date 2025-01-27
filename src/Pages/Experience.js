import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../Components/Navigation";
import Brainys from "../assets/FrontendDeveloper/WebProject/Laravel/brainys.png";
import Platzi from "../assets/FrontendDeveloper/WebProject/React/platzi.png";
import LookerStudio from "../assets/Data Visualization/LookerStudio/Screenshot 2025-01-08 135601.png";
import Excel from "../assets/Data Visualization/MICROSOFT EXCEL/operational.png";
import TableAU from "../assets/Data Visualization/TABLE AU/penjualan.png";
import BrainysMobile from "../assets/FrontendDeveloper/MOBILE PROJECT/brainys.png";
import MobileOasys from "../assets/FrontendDeveloper/MOBILE PROJECT/mobilebrainys.png";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animasi lebih singkat untuk mengurangi beban rendering
      offset: 100, // Elemen mulai dianimasikan lebih awal (mengurangi animasi mendadak)
      easing: "ease-in-out", // Easing smooth untuk animasi
      once: true, // Animasi hanya dijalankan sekali
    });
  }, []);

  const projects = [
    {
      id: 1,
      image: Brainys,
      title: "PT OASYS EDUTECH INDONESIA",
      category: "Frontend Developer",
      year: "Januari 2024 - Present",
      link: "Develop a responsive Brainys Website using Laravel, Blade, Tailwind CSS, and JavaScript, integrating back-end APIs for dynamic data display. Create an interactive UI/UX with JavaScript enhancements. Build the Oasys Mobile app using Flutter for iOS and Android, ensuring smooth API integration.",
    },
    {
      id: 2,
      image: Platzi,
      title: "PT HAENHA PROMELINDO SEJAHTERA",
      category: "Freelance Administration Staff & IT",
      year: "Januari 2022 - Present",
      link: "Perform routine maintenance on company hardware devices to ensure optimal functionality. Develop and implement an accounting program using Microsoft Excel to effectively manage and track financial records.",
    },
    {
      id: 3,
      image: BrainysMobile,
      title: "cv multimedia pratama",
      category: "Techinician",
      year: "October 2019 - Januari 2020",
      link: "Creating a factory layout along with its network infrastructurea and Installing CCTV in the Lapindo Mudflow area",
    },
    {
      id: 4,
      image: MobileOasys,
      title: "CV GEOSOFTWIN",
      category: "Data Entry",
      year: "August 2020 - December 2020",
      link: "Managing documents digitally is essential for efficient record-keeping. This involves scanning each physical document, known as Warkah Converting it into a digital format",
    },
    
  ];

  return (
    <div className="bg-black overflow-y-auto relative">
      {/* Section 1 */}
      <div className="h-screen flex flex-col items-center py-10 px-10">
        <Navigation />
        <section className="text-center flex flex-col items-center justify-center flex-grow text-white">
          <h2
            className="text-6xl poppins-regular uppercase font-bold"
            data-aos="fade-up"
          >
            My Experience
          </h2>
          <p className="text-lg mt-4" data-aos="fade-up">
            I have gained valuable experience from my experience in Web & Mobile
            Development as a frontend developer and also data visualization.
          </p>
        </section>
      </div>

      {/* Section 2 */}
      <div className="flex flex-row justify-center items-center text-white px-10 pb-10 -mt-8">
        <div className="grid grid-cols-1  gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className=" flex flex-col rounded-lg shadow-lg transform transition duration-300 "
            >
              <div className="px-5 pt-7 flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-4xl font-bold poppins-regular uppercase">
                    {project.title}
                  </h3>
                  <p className="text-white text-2xl poppins-regular">
                    {project.category}
                  </p>
                </div>

                <p className="text-white mt-4 text-2xl font-bold poppins-regular uppercase">
                  {project.year}
                </p>
              </div>

              <p className="text-[#a3a3a3] text-xl font-semibold poppins-regular px-5 py-7 text-justify">
                {project.link}
              </p>

              <hr className="border-t-2 border-[#181C14]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
