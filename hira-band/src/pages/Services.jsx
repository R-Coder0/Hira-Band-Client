/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHorse,
  FaCar,
  FaGuitar,
  FaDrum,
  FaMusic,
  FaLightbulb,
} from "react-icons/fa";
import bandImage from "../assets/Service/Band.jpg";
import baggiImage from "../assets/Service/Bagi.jpg";
import ghodiImage from "../assets/Service/Ghodi.jpg";
import carImage from "../assets/Service/Gaddi.jpg";
import lightingImage from "../assets/Service/Light.jpg";
import musicianImage from "../assets/Hero/service.jpg";
import dholImage from "../assets/Service/dhol.jpg";
import heroImage from "../assets/Hero/service.jpg";
import Review1 from "../assets/Review/Review1.jpg";
import Review2 from "../assets/Review/Review2.jpg";
import Review3 from "../assets/Review/Review3.jpg";

const services = [
  {
    title: "Baggi (Chariot)",
    icon: <FaHorse className="text-6xl text-yellow-500 mb-4" />,
    image: baggiImage,
    description:
      "Make a grand entrance with our beautifully decorated Baggi, a timeless symbol of tradition and royalty, perfect for your wedding procession.",
    fullDescription:
      "Our Baggi (Chariot) service is designed to create a majestic and memorable entry, adding a royal essence to your wedding. Decorated with intricate patterns, elegant fabric, and traditional accents, our Baggi ensures that your arrival is nothing short of spectacular. Ideal for couples who wish to embrace the beauty of traditional Indian celebrations, the Baggi brings a sense of regal charm, turning heads and creating unforgettable memories for everyone present.",
  },
  {
    title: "Ghodi (Horse)",
    icon: <FaHorse className="text-6xl text-yellow-500 mb-4" />,
    image: ghodiImage,
    description:
      "Our finely adorned Ghodi adds a touch of royalty and tradition to the groom’s arrival, creating a powerful and authentic experience.",
    fullDescription:
      "Symbolizing nobility and tradition, our Ghodi (Horse) service is meticulously designed for the groom’s entrance. The Ghodi is elegantly decorated with handcrafted details that reflect cultural significance, making the groom’s arrival a cherished part of the wedding celebration. With a proud stance and intricate adornments, the Ghodi is perfect for couples who want to honor their heritage while adding an unforgettable experience for guests. It’s more than just an entrance—it’s a moment steeped in tradition and pride.",
  },
  {
    title: "Wedding Car",
    icon: <FaCar className="text-6xl text-yellow-500 mb-4" />,
    image: carImage,
    description:
      "Add a modern, luxurious touch to your special day with our premium wedding car service, perfect for stylish arrivals and exits.",
    fullDescription:
      "Our wedding car service provides a blend of style, comfort, and sophistication, ideal for those looking to make a statement on their special day. We offer a selection of luxury cars, each meticulously maintained and prepared to create a memorable experience. Whether you want an elegant arrival at your ceremony or a stylish exit, our wedding cars add a contemporary touch to traditional celebrations, allowing you to celebrate in class and elegance.",
  },
  {
    title: "Wedding Band",
    icon: <FaGuitar className="text-6xl text-yellow-500 mb-4" />,
    image: bandImage,
    description:
      "Our vibrant wedding band sets the tone for a joyful celebration with an energetic mix of traditional and modern music.",
    fullDescription:
      "Our wedding band brings life and energy to every procession, combining the best of traditional tunes with popular hits that resonate with all ages. Skilled in a variety of genres, our band members are dedicated to making your event memorable, whether it’s an upbeat baraat or a soulful ceremony. Each performance is customized to match the mood and preferences of the couple, ensuring that every note adds to the celebration’s atmosphere. With Hira Band, music becomes a joyous celebration that every guest will remember.",
  },
  {
    title: "Baraat Lightings",
    icon: <FaLightbulb className="text-6xl text-yellow-500 mb-4" />,
    image: lightingImage,
    description:
      "Enhance the ambiance of your Baraat with our dazzling lighting options, adding sparkle and elegance to your celebration.",
    fullDescription:
      "Our Baraat lighting services are designed to illuminate your celebration with grandeur and elegance. From soft, romantic glows to dazzling, vibrant lights, we offer a variety of lighting options that transform your procession into a visual masterpiece. Our team carefully arranges lighting to highlight each element of your event, creating a captivating experience for both guests and the couple. Perfect for evening ceremonies and celebrations, our lighting adds a layer of charm that elevates the entire atmosphere.",
  },
  {
    title: "Musician & Orchestra",
    icon: <FaMusic className="text-6xl text-yellow-500 mb-4" />,
    image: musicianImage,
    description:
      "Our orchestra brings a rich, enchanting sound to your event, creating a captivating ambiance for every special moment.",
    fullDescription:
      "Our musician and orchestra services provide a refined, sophisticated musical experience that enhances the elegance of wedding ceremonies and receptions. Our talented musicians perform a range of music, from classical pieces to contemporary arrangements, all tailored to complement the setting of your event. The orchestra’s harmonious sound adds an enchanting ambiance, allowing guests to immerse themselves in the celebration. Whether you’re looking for soothing background music or a striking performance, our orchestra adds depth and beauty to every occasion.",
  },
  {
    title: "Dhol",
    icon: <FaDrum className="text-6xl text-yellow-500 mb-4" />,
    image: dholImage,
    description:
      "Our powerful dhol players bring an energetic rhythm to your Baraat, filling the air with excitement and tradition.",
    fullDescription:
      "The Dhol is an essential part of any traditional Indian celebration, and our skilled dhol players know how to captivate a crowd. With vibrant beats that echo through the procession, our dhol players create an exhilarating atmosphere, energizing guests and setting the tone for a joyous occasion. Each beat is played with passion and precision, bringing the rhythm of tradition to life. Ideal for baraats and other lively processions, our dhol service ensures that every step of the journey is filled with excitement and cultural richness.",
  },
];              

const ServiceCard = ({ service, onLearnMore }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-10">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center mb-4">
        {service.icon}
        <h3 className="text-3xl font-bold ml-4 text-gray-900">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">
        {service.description}
      </p>
      <button
        onClick={() => onLearnMore(service)}
        className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 transition"
      >
        Learn More
      </button>
    </div>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleContactRedirect = () => {
    setSelectedService(null);
    navigate("/contact", { state: { scrollToTop: true } });
  };

  // Scroll to top on page navigation
  React.useEffect(() => {
    if (window.location.hash === "") window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-red-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center h-[70vh] flex flex-col justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4" data-aos="fade-down">
            Our Services
          </h1>
          <p
            className="text-lg max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Experience a world of vibrant and unforgettable celebrations with
            our wide range of services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <p className="text-center text-lg max-w-2xl mx-auto text-gray-700 mb-16">
            At Hira Band, we provide a variety of services to make your wedding
            and events vibrant, memorable, and perfectly orchestrated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-red-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold mb-6 text-center text-gray-900"
            data-aos="fade-down"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Hear from those who have made their events unforgettable with Hira
            Band’s exceptional performances and outstanding service.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Testimonial Card 1 */}
            <div
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="zoom-in"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={Review1} // Replace with actual image path
                  alt="Client 1"
                  className="w-20 h-20 rounded-full border-4 border-yellow-500"
                />
              </div>
              <blockquote className="text-lg italic mb-4 text-gray-700 text-center">
                &quot;Hira Band’s performance was beyond expectations! They
                brought so much energy and joy to our wedding, making it truly
                unforgettable.&quot;
              </blockquote>
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                - John D.
              </h4>
            </div>

            {/* Testimonial Card 2 */}
            <div
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={Review2}
                  alt="Client 2"
                  className="w-20 h-20 rounded-full border-4 border-yellow-500"
                />
              </div>
              <blockquote className="text-lg italic mb-4 text-gray-700 text-center">
                &quot;The team at Hira Band exceeded our expectations during our
                corporate event. Professional, engaging, and memorable!&quot;
              </blockquote>
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                - Sarah L.
              </h4>
            </div>

            {/* Testimonial Card 3 */}
            <div
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={Review3} // Replace with actual image path
                  alt="Client 3"
                  className="w-20 h-20 rounded-full border-4 border-yellow-500"
                />
              </div>
              <blockquote className="text-lg italic mb-4 text-gray-700 text-center">
                &quot;Our festival was a hit thanks to Hira Band! The music was
                incredible, and the crowd couldn’t get enough.&quot;
              </blockquote>
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                - Michael R.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {selectedService.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>
            <button
              onClick={handleContactRedirect}
              className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
