import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ProjectSlider from "./ProjectSlider";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiDaisyui, SiAxios, SiGoogleauthenticator, SiJsonwebtokens, SiCookiecutter } from "react-icons/si";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";
import img1 from '../assets/Cosmetics/nav.png'
import img2 from '../assets/Cosmetics/nav1.png'
import img3 from '../assets/Cosmetics/nav2.png'
import img4 from '../assets/Cosmetics/nav3.png'
import img5 from '../assets/Cosmetics/nav4.png'
import img0 from '../assets/Cosmetics/nav0.png'

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
                src={img0}
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src={img5}
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700">
              <img
                src={img3}
                alt=""
              />
            </div>
            <div className="hover:scale-90 transition duration-700 ">
                <img
                  src={img4}
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
              👩‍🦰 Cosmetics Shop Website
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
                <li>👮 User Profile page</li>
                <li>🧾 A Amin Service</li>
                <li>🧾 Use CURD Oprateion</li>
                <li>🧾 Use Jwt with cookies</li>
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                📝 Description:
              </h3>
              <p className="text-sm">
                A Cosmetics Products Website platform where users can explore, filter Products by
                category.
              </p>
            </div>

            {/* Technologies */}
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-4">
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
                  <SiAxios className="text-red-300"></SiAxios>
                </div>
              </div>

              {/* Backend */}
              <div>
                <p className="mb-1 font-semibold text-orange-400">Backend:</p>
                <div className="flex gap-4 text-xl ml-2">
                  <FaFire className="text-orange-600"></FaFire>
                  <SiMongodb className="text-green-400"></SiMongodb>
                  <SiGoogleauthenticator className="text-sky-300"></SiGoogleauthenticator>
                  <SiJsonwebtokens className="text-orange-500"></SiJsonwebtokens>
                  <SiCookiecutter className="text-yellow-300"></SiCookiecutter>
                </div>
              </div>
            </div>

            {/* Buttons */}

            {/*https://github.com/adnan683515/b2b-clinet-side */}
            <div className="flex flex-wrap gap-2">
              <a href="https://kb-cosmetics-products.netlify.app/">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full text-sm">
                    Live Link
                  </button>
                </ShimmerButton>
              </a>
              <a href="https://github.com/kawsar121/BD_Calling_First_Clients_projects">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full">
                   Client Repo
                  </button>
                </ShimmerButton>
              </a>
              <a href="https://github.com/kawsar121/BD_Calling_First_Server_projects">
                <ShimmerButton className="p-1 sm:p-3">
                  <button className="bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full">
                   Server Repo
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
