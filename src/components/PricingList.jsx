import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[25rem] max-lg:w-full bg-white h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[35rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          

          <div className="flex items-center h-[5.5rem] ">
            {item.price && (
              <>
                
                <div className="text-[2.5rem] leading-none font-bold">
                  {item.title}
                </div>
              </>
            )}
          </div>

          <button className="relative  w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#07173b] to-[#4988bb] group-hover:from-[#07173b] group-hover:to-[#4988bb] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-12 py-4 transition-all ease-in duration-75  rounded-md group-hover:bg-[#4988bb]">
                Project: {item.price}
                </span>
              </button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
