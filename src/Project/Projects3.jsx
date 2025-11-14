import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ProjectSlider from "./ProjectSlider";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import img1 from '../assets/img1.png'
// import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import { FaJs } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
const Projects3 = () => {
  return (
    <div className="flex w-[98%] mx-auto flex-col md:flex-row gap-6 justify-around p-6 text-white bg-black">
      {/* Left: Education Info */}
      <div className="flex justify-center  items-center w-full md:w-1/2">
        <NeonGradientCard
          className="bg-black border "
          gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
        >
          <div className="p-6 bg-black  w-full h-full rounded-xl grid grid-cols-2 gap-2">
            <div className="hover:scale-90 transition duration-700">
              <img
                src={img5}
                className='w-80 h-[220px]'
                alt=""
              />
            </div>

            <div className="hover:scale-90 transition duration-700">
              <img
                src={img1}
                className='w-80 h-[220px]'
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src={img3}
                className='w-80 h-[220px]'
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src={img4}
                className='w-80 h-[220px]'
                alt=""
              />
            </div>
          </div>
        </NeonGradientCard>
      </div>

      {/* Right: Skills & Journey */}

      <div className="flex justify-center items-center w-full md:w-1/2">
        <NeonGradientCard
          className="bg-black"
          gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
        >
          <div className="p-6 bg-black rounded-xl text-white space-y-4">
            {/* Title */}
            <h2 className="text-2xl font-bold flex items-center gap-2">
             🍰 Restaurant Management System
            </h2>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                ✨ Features:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>👨 Data load by Category </li>
                <li>📄 View Card detailes </li>
                <li>🧾 changeable profile and name</li>
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                📝 Description:
              </h3>
              <p className="text-sm">
                A simple and clean interface where users can browse Food Categorys, and see details. User can change her profile and name.
              </p>
            </div>

        
              {/* Technologies */}
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                🛠️ Technology Used:
              </h3>
              <div className="flex gap-3">
                {/* Frontend */}
                <div>
                  <p className="mb-1 font-semibold text-orange-400">
                    Frontend:
                  </p>
                  <div className="flex gap-4 text-xl mb-3">
                    <FaHtml5 title="HTML" className="text-orange-500" />
                    <FaCss3Alt title="CSS" className="text-blue-500" />
                    <SiTailwindcss
                      title="Tailwind CSS"
                      className="text-cyan-400"
                    />
                    <FaReact title="React JS" className="text-blue-400" />
                    <SiDaisyui className="text-blue-500"></SiDaisyui>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <p className="mb-1 font-semibold text-orange-400">Backend:</p>
                  <div className="flex gap-4 text-xl ml-2">
                    <FaFire className="text-orange-600"></FaFire>
                  </div>
                </div>
              </div>



            {/*  */}
            <div className="flex flex-wrap gap-2">
              <a href="https://ecommerce-by-kb.netlify.app/">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full text-sm">
                    Live Link
                  </button>
                </ShimmerButton>
              </a>
              <a href="https://github.com/kawsar121/19-react-ecommerce-project.git">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full">
                    Repository
                  </button>
                </ShimmerButton>
              </a>
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default Projects3;
