'use client'
import React from "react";
import { images } from "./constants";
import left from "../../public/left.svg";
import right from "../../public/right.svg";
import { motion } from "framer-motion";

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div 
      className="w-full xl:w-1/2 bg-transparent !bg-opacity-0 border-4 rounded-2xl xl:border-4 border-[#07173b] p-4 sm:p-6 lg:p-8 flex flex-col justify-between "
      style={{backgroundColor: 'transparent'}}
    >
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="flex-grow overflow-y-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#07173b] font-extrabold mb-2 lg:mb-10 lg:mt-10 sm:mb-4">
                {elem.title}
              </h2>
              <p className="leading-relaxed font-medium text-sm sm:text-base md:text-lg  tracking-wide italic text-black">
                {elem.desc}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <button
          className="cursor-pointer bg-[#07173b] p-2 sm:p-3 md:p-4 rounded-full flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
          onClick={clickPrev}
        >
          <img
            src={left}
            alt="Previous"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        </button>
        <button
          className="cursor-pointer bg-[#07173b] p-2 sm:p-3 md:p-4 rounded-full flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
          onClick={clickNext}
        >
          <img
            src={right}
            alt="Next"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Description;
