import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices } from "../constants";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-[#75a3c7] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" id="contact-us">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="name" 
          type="text" 
          placeholder="Your Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="email" 
          type="email" 
          placeholder="Your Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" 
          id="message" 
          placeholder="Your Message" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button 
          className="bg-white text-black hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

// Update the Services component to use the new ContactForm
const ContactUs = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Contact us"
          text=""
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col md:flex-row items-start h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <ContactForm />
            </div>

            {/* Keep the existing contact information div */}
            <div className="relative z-1 w-full md:w-1/2 md:ml-8 bg-white p-6 rounded-lg shadow-md">
             
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-1">★★★★★</span>
                <span className="text-sm font-bold">5.0</span>
                <span className="text-sm text-gray-500 ml-1">(3 reviews)</span>
              </div>
              <p className="text-sm mb-2">
                📞 <a href="tel:+918469154478" className="text-black hover:underline">+918469154478</a>
              </p>
              <p className="text-sm mb-4">
                ✉️ <a href="mailto:soniutsav22@gmail.com" className="text-black hover:underline">soniutsav22@gmail.com</a>
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
