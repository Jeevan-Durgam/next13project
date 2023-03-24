"use client";

import { motion } from "framer-motion";
import backgroundImage from "../assets/sciFiBackground.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mb-4">
      <Image src={backgroundImage} alt="bg-image" />
      <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-[1]">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl text-white font-bold text-center mb-8"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to my portfolio
        </motion.h1>
        <motion.button
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold text-xl"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          View my work
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
