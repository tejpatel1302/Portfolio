import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";

import ContactUs from "./components/ContactUs";
import Roadmap from "./components/Roadmap";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-[#0a316a]">
        
        <Header />
        <Hero />
        {/* <Slider/> */}
        <Benefits />
        <Collaboration />
        <Roadmap/>
        <Solutions />
        <ContactUs />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
