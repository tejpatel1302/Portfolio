import Image from "next/image";
import styles from '../../page.module.css'
import Slider from "@/components/Slider";
import ActiveSlider from "@/components/ActiveSlider";
import Explore from "@/components/Explore";
import img from '../components/image.png'

export default function Home() {
  return (
   <>
    <section className="mt-48 bg-white">
        <Slider/>
    </section>
    
    <div className="bg-white lg:mt-16 mt-8">
        <p className="text-orange-500 text-6xl text-center font-extrabold lg:p-10 md:p-8 sm:p-4 p-1">Offers</p>
        <div className="relative w-full h-[100px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
           <Image 
             src={img}  
             layout="fill"
             objectFit="contain" 
             className="absolute"
             alt="Explore image"
           />
        </div>
    </div>
    <section className="bg-white">
        <ActiveSlider/>
    </section>
    
    <div className="bg-white lg:mt-16 mt-8">
        <p className="text-orange-500 text-6xl text-center font-extrabold lg:p-10 md:p-8 sm:p-4 p-1">Explore</p>
        <div className="relative w-full h-[100px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
           <Image 
             src={img}  
             layout="fill"
             objectFit="contain" 
             className="absolute"
             alt="Explore image"
           />
        </div>
    </div>

    <section className="bg-white">
        <Explore/>
    </section>
   </>
  );
}
