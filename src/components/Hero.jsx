import { ScrollParallax } from "react-just-parallax";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Notification from "./Notification";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#75a3c7] dark:bg-[#73a0c7]">
      <div className="absolute inset-0 bg-grid-gray-100/[0.2] dark:bg-grid-white/[0.03]" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#73a0c7] dark:bg-[#698daf] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#73a0c7)]" />

     

      <div className="max-w-4xl w-full text-center z-10 px-4 my-8">
        <TextGenerateEffect
          words="A freelance software development team delivering tailored AI solutions and innovative technologies to meet unique business needs."
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"
        />
        <div className="mt-8">
          <a href="#contact-us" className="inline-block">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#07173b] to-[#4988bb] group-hover:from-[#07173b] group-hover:to-[#4988bb] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 transition-all ease-in duration-75 bg-[#07173b] rounded-md group-hover:bg-[#4988bb]">
                Contact Us
              </span>
            </button>
          </a>
        </div>
      </div>

     <Slider/>
    </div>
  );
};

export default Hero;
