import React from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFire, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiDaisyui, SiGoogleauthenticator } from 'react-icons/si'
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import pet1 from '../assets/pet/pet1.png'
import pet2 from '../assets/pet/pet2.png'
import pet3 from '../assets/pet/pet3.png'
const Project = () => {

    
    return (
        <div  className="flex w-[98%] mx-auto flex-col md:flex-row gap-6 justify-around p-6 text-white bg-black">

            {/* Left: Education Info */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}

                className="flex justify-center  items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black border "
                    gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
                >
                    <div className="p-6 bg-black  w-full h-full rounded-xl grid grid-cols-2 gap-2">

                        <div className='hover:scale-90 transition duration-700'>
                            <img src={pet1} alt="" />
                        </div>

                        <div className='hover:scale-90 transition duration-700'>
                            <img src={pet2} alt="" className='w-64 h-[235px]' />
                        </div>
                        <div className='hover:scale-90 transition duration-700'>
                            <img src="https://i.ibb.co/Z1Fj6Bf8/Screenshot-2025-07-04-181055.png" alt="" />
                        </div>

                        <div className='hover:scale-90 transition duration-700'>
                            <img src={pet3} className='w-64 h-[265px]' alt="" />
                        </div>

                    </div>
                </NeonGradientCard>
            </motion.div>

            {/* Right: Skills & Journey */}

            <motion.div

                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black"
                    gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
                >
                    <div className="p-6 bg-black rounded-xl text-white space-y-4">

                        {/* Title */}
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            🐈 Pet Adopt Website
                        </h2>

                        {/* Features */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">✨ Features:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>🔍 Easily find your favourite pet</li>
                                <li>📋 View detailed pet card</li>
                                <li>📋 Add to cart adoption</li>
                                <li>📋 SigIn and SignUp Option</li>
                                <li>📋 Google sigIn with authentication</li>
                            </ul>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">📝 Description:</h3>
                            <p className="text-sm">
                                You can filter out favourite pet based on your preferences and explore pet details. And you can buy pet accesesories in our shop
                            </p>
                        </div>

                        {/* Technologies */}
                        <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">🛠️ Technology Used:</h3>
                        <div className='flex gap-3'>


                            {/* Frontend */}
                            <div>
                                <p className="mb-1 font-semibold text-orange-400">Frontend:</p>
                                <div className="flex gap-4 text-xl mb-3">
                                    <FaHtml5 title="HTML" className="text-orange-500" />
                                    <FaCss3Alt title="CSS" className="text-blue-500" />
                                    <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />
                                    <FaReact title="React JS" className="text-blue-400" />
                                    <SiDaisyui className='text-blue-500'></SiDaisyui>
                                </div>
                            </div>

                            {/* Backend */}
                            <div>
                                <p className="mb-1 font-semibold text-orange-400">Backend:</p>
                                <div className="flex gap-4 text-xl ml-2">
                                    <FaFire className='text-orange-600'></FaFire>
                                    <SiGoogleauthenticator className='text-sky-300'></SiGoogleauthenticator>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-2 ml-3">
                            <a href={'http://pets-adoptions.netlify.app'} >
                                <ShimmerButton className='p-1 sm:p-3'>

                                    <button className='bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full  text-sm'>Live Link</button>

                                </ShimmerButton>
                            </a>


                            <a href="https://github.com/kawsar121/18-react-adopt-pet">
                                <ShimmerButton className='p-1 sm:p-3'>
                                    <button className='bg-[var(--secondary-color)] px-2 py-1 w-full  rounded-full '>Repository</button>
                                </ShimmerButton>
                            </a>

                        </div>

                    </div>
                </NeonGradientCard>
            </motion.div>

        </div>
    );
};

export default Project;
