"use client";

import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import logo from "../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap px-6 py-4">
      <Image src={logo} alt="logo" className="w-16 h-16" priority />
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-6">
        <div className="text-sm lg:flex-grow">
          <motion.a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="flex items-center">
              <FaHome className="mr-2" />
              Home
            </span>
          </motion.a>
          <motion.a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="flex items-center">
              <FaUser className="mr-2" />
              About
            </span>
          </motion.a>
          <motion.a
            href="#work"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <span className="flex items-center">
              <FaBriefcase className="mr-2" />
              Work
            </span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
