import React from 'react';
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";

const Benefits = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Contact section not found");
      // Fallback: scroll to bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="features" className="overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto text-center mb-12"
          title="Services"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {benefits.map((item, index) => (
            <div
              className="relative border-2 bg-white text-black rounded-lg border-[#7ba6c8] p-0.5 bg-no-repeat bg-[length:100%_100%]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-6 sm:p-8">
                <h5 className="text-xl font-bold mb-4">{item.title}</h5>
                <p className="text-sm mb-6 text-gray-600">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="w-12 h-12"
                  />
                  {index === benefits.length - 1 && (
                    <button 
                      onClick={scrollToContact}
                      className="flex items-center ml-auto cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
                    >
                      <span className="font-mono text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Contact Us For More Information
                      </span>
                      <Arrow className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
