import React  from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { motion } from "framer-motion";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";


const Abouts = () => {
    
    
    return (
        <div  className="flex    relative overflow-hidden w-[98%] mx-auto flex-col md:flex-row gap-6 justify-around p-6 text-white bg-black">



            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="flex justify-center items-center w-full md:w-1/2"
            >
                <Terminal className="bg-black text-white p-4 rounded-lg">
                    <TypingAnimation>
                        🎓 Education

                    </TypingAnimation>
                    <TypingAnimation>
                        👋 I am Tohidul Islam Kawsar Bhuiyan

                    </TypingAnimation>
                    <TypingAnimation>
                        📚 Studying at Feni Computer Institute


                    </TypingAnimation>
                    <TypingAnimation>
                        💻 Diploma in Computer Science


                    </TypingAnimation>
                    <TypingAnimation>
                        📍 Department: Computer Science

                    </TypingAnimation>
                </Terminal>


            </motion.div>


            {/* Right: Skills & Journey */}
            {/* <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="flex justify-center items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black"
                    gradient="linear-gradient(135deg, #ff8c00, #facc15, #22d3ee)"
                >
                    <div className="p-6 bg-black rounded-xl text-white">
                        <h2 className="text-2xl font-bold mb-2">🚀 My Journey</h2>
                        <p className="mb-1">🌐 I am creating responsive websites</p>
                        <p className="mb-1">📖 I love self-learning</p>
                        <p className="mb-1">🧩 Recently learning problem solving</p>
                        <p className="mb-1">🧠 Sometimes solving with JavaScript</p>
                        <p className="mb-1">💡 I solve problems on <span className="text-yellow-400 font-medium">LeetCode</span></p>
                        <p className="mb-1">⏰ I'm a regular coder</p>
                    </div>
                </NeonGradientCard>
            </motion.div> */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="flex justify-center items-center w-full md:w-1/2"
            >
                <Terminal className="bg-black text-white p-4 rounded-lg">
                    <TypingAnimation>
                        🚀 My Journey
                    </TypingAnimation>
                    <TypingAnimation>
                        🌐 I am creating responsive websites
                    </TypingAnimation>
                    <TypingAnimation>
                        📖 I love self-learning
                    </TypingAnimation>
                    <TypingAnimation>
                        🧩 Recently learning problem solving
                    </TypingAnimation>
                    <TypingAnimation>
                        🧠 Sometimes solving with JavaScript
                    </TypingAnimation>
                    <TypingAnimation>
                        ⏰ I'm a regular coder
                    </TypingAnimation>


                </Terminal>
            </motion.div>





        </div>
    );
};

export default Abouts;
