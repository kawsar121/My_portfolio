import React, { useRef } from 'react';
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import {
    SiPython,
    SiJavascript,
    SiLeetcode,
} from "react-icons/si";
import { Meteors } from "@/components/magicui/meteors";
const BasicSkills = () => {
    const containerRef = useRef(null);
    const toRef = useRef(null);

    const fromRefs = {
        java: useRef(null),
        js: useRef(null),
    };

    return (
        <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            ref={containerRef}
            className="relative min-h-screen bg-black text-white flex items-center justify-center"
        >
            {/* Central LeetCode Icon */}

        

            {/* <Meteors number={100}></Meteors> */}


            {/* Animated Beams */}
            {Object.values(fromRefs).map((ref, index) => (
                <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={ref}
                    toRef={toRef}
                    className="text-orange-400"
                />
            ))}
        </motion.div>
    );
};

export default BasicSkills;
