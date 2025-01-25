import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../Components/Navigation";
import Brainys from "../assets/FrontendDeveloper/WebProject/Laravel/brainys.png"
import Platzi from "../assets/FrontendDeveloper/WebProject/React/platzi.png"
import LookerStudio from "../assets/Data Visualization/LookerStudio/Screenshot 2025-01-08 135601.png"
import Excel  from "../assets/Data Visualization/MICROSOFT EXCEL/operational.png"
import TableAU  from "../assets/Data Visualization/TABLE AU/penjualan.png"
import BrainysMobile  from "../assets/FrontendDeveloper/MOBILE PROJECT/brainys.png"
import MobileOasys  from "../assets/FrontendDeveloper/MOBILE PROJECT/mobilebrainys.png"

function Project() {
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
      title: "Brainys",
      category: "Web Development",
      year: "2024",
      link: "#",
    },
    {
      id: 2,
      image: Platzi,
      title: "Platzi Fake Store",
      category: "Web Development",
      year: "2025",
      link: "#",
    },
    {
      id: 3,
      image: BrainysMobile,
      title: "Brainys Mobile",
      category: "Mobile Development",
      year: "2025",
      link: "#",
    },
    {
      id: 4,
      image: MobileOasys,
      title: "Oasys Mobile",
      category: "Mobile Development",
      year: "2024",
      link: "#",
    },
    {
      id: 5,
      image: TableAU,
      title: "Personal Trainer",
      category: "Data Visualization",
      year: "2024",
      link: "#",
    },
    {
      id: 6,
      image: Excel,
      title: "Operational Cost",
      category: "Data Visualization",
      year: "2025",
      link: "#",
    },
    {
      id: 6,
      image: LookerStudio,
      title: "Sales Report",
      category: "Data Visualization",
      year: "2025",
      link: "#",
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
            Selected Project
          </h2>
          <p className="text-lg mt-4" data-aos="fade-up">
            ( 2023 - 2024 )
          </p>
        </section>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col justify-center items-center text-white px-10 pb-10 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#0F0F0F] border border-[#181C14] flex flex-col rounded-lg shadow-lg transform transition duration-300 "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-md hover:scale-100"
                loading="lazy" // Lazy loading gambar untuk performa lebih baik
              />
              <div className="px-5 py-7 flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold poppins-regular uppercase">
                    {project.title}
                  </h3>
                  <p className="text-[#a3a3a3] text-lg  poppins-regular">
                    {project.category}
                  </p>
                </div>

                <a
                  href={project.link}
                  className="text-[#a3a3a3] mt-4 text-lg font-bold py-3 px-5 bg-[#0F0F0F] border border-[#181C14] rounded-full poppins-regular uppercase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.year}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
