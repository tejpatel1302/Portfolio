'use client'
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";
import Section from "./Section";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <Section
      className="-mt-[1.25rem] mb-2 w-full px-4 sm:px-6 lg:px-8"
      crossesOffset="lg:-translate-y-[0.95rem]"
      customPaddings
      id="hero"
    >
      <main className="flex flex-col xl:flex-row max-w-7xl mx-auto shadow-2xl rounded-2xl mt-12 overflow-hidden bg-transparent">
        <div className="w-full xl:w-1/2 aspect-[4/3] relative overflow-hidden">
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                idx === activeImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={elem.src}
                alt={elem.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </main>
    </Section>
  );
};

export default Slider;
