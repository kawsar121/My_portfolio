import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Button from "../../Button/Button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from "framer-motion";

const HeroTextMagic = () => {
  return (
    <div className="flex relative overflow-hidden justify-center items-center bg-black  px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        div
        className="sm:space-y-4 space-y-2 text-center sm:text-start"
      >
        <TypingAnimation
          duration={100}
          className="text-white  text-2xl sm:text-5xl"
          startOnView={true}
        >
          Tohidul Islam Kawsar Bhuiyan
        </TypingAnimation>

        <div className="flex justify-center sm:justify-start items-center">
          <BoxReveal boxColor="white" duration={0.5}>
            <h2 className="sm:text-2xl  sm:font-semibold text-[var(--text-color)]">
              <span className="text-[var(--secondary-color)] ">Frontend</span>{" "}
              Developer
            </h2>
          </BoxReveal>
        </div>

        {/* Description */}
        <BoxReveal boxColor="white" duration={0.5}>
          <p className="text-[var(--text-color)] sm:font-semibold w-[98%] sm:w-[75%]">
            Web developer from{" "}
            <span className="text-[var(--secondary-color)]">Bangladesh</span>,
            building modern web applications.
          </p>
        </BoxReveal>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start items-center">
          <BoxReveal boxColor="white" duration={0.5}>
            <div className="flex justify-center items-center sm:justify-start">
              <div className="flex gap-3 text-2xl">
                <a
                  href="https://www.linkedin.com/in/kawsarbhuiyan71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:scale-110 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://web.facebook.com/tohidulislam.kawsarbhuiyan.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/kawsar121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:scale-110 transition"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
          </BoxReveal>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start items-center">
          <BoxReveal boxColor="white" duration={0.5}>
            <ShimmerButton shimmerColor={"#ffffff"}>
              <Button />
            </ShimmerButton>
          </BoxReveal>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroTextMagic;
