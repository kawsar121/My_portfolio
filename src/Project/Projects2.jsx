import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ProjectSlider from "./ProjectSlider";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";

const Projects2 = () => {
  return (
    <div className="flex w-[98%] mx-auto flex-col md:flex-row-reverse gap-6 justify-around p-6 text-white bg-black">
      {/* Left: Education Info */}
      <motion.div
        // initial={{ opacity: 0, x: -100 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1 }}

        className="flex justify-center  items-center w-full md:w-1/2"
      >
        <NeonGradientCard
          className="bg-black border "
          gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
        >
          <div className="p-6 bg-black  w-full h-full rounded-xl grid grid-cols-2 gap-2">
            <div className="hover:scale-90 transition duration-700">
              <img
                src="https://i.ibb.co/VpCmG8sk/Screenshot-2025-07-06-001551.png"
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src="https://i.ibb.co/PvhpQj8n/screencapture-daiynews-netlify-app-cat-01-2025-07-06-00-49-37.png"
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src="https://i.ibb.co/DPzzPGD5/Screenshot-2025-07-06-001951.png"
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700 mt-5">
                <img
                  src="https://i.ibb.co/B58kS782/Screenshot-2025-07-06-002045.png"
                  alt=""
                />
              </div>
            
          </div>
        </NeonGradientCard>
      </motion.div>

      {/* Right: Skills & Journey */}

      <motion.div
        // initial={{ opacity: 0, x: 100 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1 }}
        className="flex justify-center items-center w-full md:w-1/2"
      >
        <NeonGradientCard
          className="bg-black"
          gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
        >
          <div className="p-6 bg-black rounded-xl text-white space-y-4">
            {/* Title */}
            <h2 className="text-2xl font-bold flex items-center gap-2">
              📰 Dragon News Website
            </h2>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                ✨ Features:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>📦 Browse News by various categories</li>
                <li>🔍 Filter News category-wise</li>
                <li>🛍️ Show news details</li>
                <li>🧾 Login/Register page</li>
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                📝 Description:
              </h3>
              <p className="text-sm">
                A News Website platform where users can explore, filter news by
                category.
              </p>
            </div>

            {/* Technologies */}
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              🛠️ Technology Used:
            </h3>
            <div className="flex gap-3">
              {/* Frontend */}
              <div>
                <p className="mb-1 font-semibold text-orange-400">Frontend:</p>
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

            {/* Buttons */}

            {/*https://github.com/adnan683515/b2b-clinet-side */}
            <div className="flex flex-wrap gap-2">
              <a href="https://the-dragon-newss.netlify.app/">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full text-sm">
                    Live Link
                  </button>
                </ShimmerButton>
              </a>
              <a href="https://github.com/kawsar121/16-dragonnews-react-firebase-big-project">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full">
                    Repository
                  </button>
                </ShimmerButton>
              </a>
            </div>
          </div>
        </NeonGradientCard>
      </motion.div>
    </div>
  );
};

export default Projects2;
