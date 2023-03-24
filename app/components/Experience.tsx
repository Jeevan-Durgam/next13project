"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaBriefcase className="w-6 h-6 text-gray-400" />
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Company Name</p>
            <p className="mt-1 text-base text-gray-500">Job Title</p>
            <p className="mt-2 text-sm text-gray-500">Start Date - End Date</p>
          </div>
        </div>
        <ul className="mt-4 space-y-4">
          <li className="text-base text-gray-500">Job Responsibility 1</li>
          <li className="text-base text-gray-500">Job Responsibility 2</li>
          <li className="text-base text-gray-500">Job Responsibility 3</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
