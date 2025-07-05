// File: src/components/MagicSkills.jsx
import React, { useRef, useEffect, useState } from 'react';
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Meteors } from "@/components/magicui/meteors";

import { motion } from "framer-motion";

const MagicSkills = () => {
    const containerRef = useRef(null);
    const fromRef = useRef(null);
    const toRefs = {
        html: useRef(null),
        css: useRef(null),
        js: useRef(null),
        react: useRef(null),
        node: useRef(null),
        express: useRef(null),
        mongo: useRef(null),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}


            className="relative   min-h-screen overflow-hidden flex items-center justify-center bg-black" ref={containerRef}>
            {/* Central Node */}

            <div ref={fromRef} className="bg-[var(--secondary-color)] overflow-hidden text-black sm:p-6 p-2 rounded-full font-semibold sm:text-lg shadow-lg z-10">

                <CoolMode className=''>
                    <button className=''> My Stack</button>
                </CoolMode>
            </div>

            <Meteors number={100}></Meteors>

            {/* Orbiting Tech Icons */}
            <div className="absolute top-[20%] left-[10%]" ref={toRefs.html}>
                <SiHtml5 className="text-orange-600 text-4xl" />
            </div>
            <div className="absolute top-[20%] right-[10%]" ref={toRefs.css}>
                <SiCss3 className="text-blue-500 text-4xl" />
            </div>
            <div className="absolute bottom-[25%] left-[15%]" ref={toRefs.js}>
                <SiJavascript className="text-yellow-400 text-4xl" />
            </div>
            <div className="absolute bottom-[25%] right-[15%]" ref={toRefs.react}>
                <SiReact className="text-cyan-400 text-4xl" />
            </div>
            <div className="absolute top-[50%] left-[0%]" ref={toRefs.node}>
                <SiNodedotjs className="text-green-600 text-4xl" />
            </div>
            <div className="absolute top-[50%] right-[0%]" ref={toRefs.express}>
                <SiExpress className="text-white text-4xl" />
            </div>
            <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%]" ref={toRefs.mongo}>
                <SiMongodb className="text-green-400 text-4xl" />
            </div>

            {/* Beams */}
            {Object.values(toRefs).map((ref, index) => (
                <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={fromRef}
                    toRef={ref}
                    className="text-[var(--secondary-color)]"
                />
            ))}
        </motion.div>
    );
};

export default MagicSkills;
