import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import RequestForm from "../components/RequestForm";
import HeroSection from "../components/HeroSection";
import { FaLightbulb, FaHorse, FaMusic } from "react-icons/fa";
import Review1 from "../assets/Review/Review1.jpg";
import Review2 from "../assets/Review/Review2.jpg";
import Review3 from "../assets/Review/Review3.jpg";
import aboutImage1 from "../assets/Homepage/FirstSection.jpg";
import aboutImage2 from "../assets/Homepage/SecondSection.jpg";
import aboutImage3 from "../assets/Homepage/ThirdSection.jpg";
import service2 from '../assets/Service/Ghodi2.jpg'
import service3 from '../assets/Service/light2.jpg'
import aboutImage from "../assets/hero.jpg";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0a7ufx6', 
        'template_059xvgc',
        form.current,
        '2zeRNlW7w8EuZlHUQ'
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("An error occurred, please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  const [openFAQ, setOpenFAQ] = useState(null);
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  const openRequestForm = () => setIsRequestFormOpen(true);
  const closeRequestForm = () => setIsRequestFormOpen(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of services do you offer?",
      answer:
        "Hira Band offers a wide range of traditional and musical services to elevate any event. Our offerings include vibrant band performances for weddings, Baggi (chariot) and Ghodi (decorated horse) for traditional wedding processions, Barat lighting, musician orchestras, dhol players, and much more. Whether it's a wedding, corporate event, or festival, we bring energy, tradition, and professionalism to every celebration, making it truly unforgettable.",
    },
    {
      question: "How can I book Hira Band for my event?",
      answer:
        "Booking Hira Band is simple! Start by reaching out through the contact form on our website, providing details like the event date, location, and type of occasion. You can also call us directly to discuss your needs with a team member or email us with event specifics, and we’ll respond promptly. Once we confirm availability, we’ll work with you to tailor our services to your unique event requirements, ensuring a smooth and personalized booking experience.",
    },
    {
      question: "Do you offer customizable services?",
      answer:
        "Yes, we absolutely offer customizable services! We understand that each event is unique, so we work closely with you to incorporate specific themes, songs, or cultural traditions. Whether it’s a request for particular Barat lighting arrangements, a specific musical genre for band performances, or traditional music for ceremonies, we ensure that every detail aligns with your vision, making your celebration truly personal and memorable.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing structure is flexible and tailored to the specifics of each event. Factors like the type of event, duration, and choice of services—such as band performances, dhol players, or Ghodi for weddings—influence pricing. We offer transparent quotes with detailed breakdowns, so you know what to expect. For an accurate estimate, please reach out with event details, and we’ll provide a personalized quote based on your needs.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking as early as possible to secure your preferred date, especially during peak seasons like wedding months and festival times. Booking 3 to 6 months in advance is ideal for guaranteed availability and planning. However, we understand that last-minute bookings are sometimes necessary. Feel free to reach out, and if our schedule allows, we’d be happy to accommodate. Early bookings provide more flexibility to tailor our services to your event.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* First Section */}
      <section className="py-20 bg-maroon-900 text-gold-100" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-6 text-gold-500">
              Discover Our Legacy
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Established in 1967, Hira Band has a rich legacy of bringing joy
              and vibrancy to celebrations. With over five decades of
              experience, we offer a complete range of services to make your
              wedding or event unforgettable. From traditional Baggi, Ghodi, and
              Wedding Cars to vibrant Barat Lighting and Musician Orchestra, we
              cover every aspect of your celebration.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Our team skillfully blends tradition with modern touches, ensuring
              your event is both memorable and unique. With expertise in band
              performances and Dhol beats, we promise an experience that
              resonates with you and your guests.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              Let us set the perfect tone for your special day, whether
              it&apos;s a grand Barat or a joyful celebration with friends and
              family. Experience the legacy of Hira Band and let us make your
              moments truly magical.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 text-white py-2 px-8 rounded-full shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <img
                src={aboutImage1}
                alt="About Hira Band"
                className="shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-20 bg-red-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 space-y-8 md:space-y-0 md:space-x-12 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Embrace the Art of Celebration
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At Hira Band, we provide more than just music; we offer a curated
              experience that brings life to your celebrations. With our Baggi,
              Ghodi, and classic Barat Lighting, we create an unforgettable
              journey for you and your guests.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our range of services, including our dynamic Musician Orchestra
              and energetic Dhol players, ensures that every moment of your
              event is elevated. Our band seamlessly performs both traditional
              tunes and modern hits, keeping everyone entertained.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Trust Hira Band to deliver a musical experience that will have
              everyone talking about your event for years. We bring energy,
              elegance, and authenticity to every celebration.
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 text-white py-2 px-8 rounded-full shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
            >
              Learn More
            </a>
          </div>

          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <img
                src={aboutImage2}
                alt="About Hira Band"
                className="shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-20 bg-maroon-700 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-8 md:space-y-0 md:space-x-12 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-6 text-gold-500">
              Crafting Unforgettable Moments
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Music is at the heart of what we do at Hira Band. Our talented
              musicians and performers transform any occasion into a memorable
              celebration, blending traditional elements with a modern flair
              that appeals to all.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              We provide comprehensive services, from arranging majestic wedding
              processions with Ghodi and Baggi to energizing Barat with Dhol and
              live band performances. Our services cater to all aspects of your
              celebration needs.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              With a commitment to excellence, Hira Band guarantees a musical
              journey that echoes long after your special day. Let us bring our
              passion and expertise to your event and create memories that last
              a lifetime.
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-2 px-8 rounded-full shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
            >
              Learn More
            </a>
          </div>

          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <img
                src={aboutImage3}
                alt="About Hira Band Performance"
                className="shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section className="py-20 bg-red-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold mb-6 text-center text-gray-900"
            data-aos="fade-down"
          >
            Our Services
          </h2>
          <p
            className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto"
            data-aos="fade-down"
          >
            At Hira Band, we take pride in offering a wide range of musical and
            traditional services to make your events truly special. From grand
            wedding processions to lively festival celebrations, our team
            ensures every performance resonates with energy, tradition, and
            professionalism.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Service Card 1: Band Performances */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white">
              <div className="h-64 overflow-hidden">
                <img
                  src={aboutImage} // Replace with actual image path
                  alt="Band Performances"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-yellow-500 text-5xl mb-4">
                  <FaMusic />
                </div>
                <h3 className="text-2xl font-bold mb-4">Band Performances</h3>
                <p className="text-gray-700 mb-6">
                  Our lively band performances are perfect for Barats, adding
                  rhythm and excitement to your event.
                </p>
                <a
                  href="/services"
                  className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card 2: Barat Lighting */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white">
              <div className="h-64 overflow-hidden">
                <img
                  src={service3} // Replace with actual image path
                  alt="Barat Lighting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-yellow-500 text-5xl mb-4">
                  <FaLightbulb />
                </div>
                <h3 className="text-2xl font-bold mb-4">Barat Lighting</h3>
                <p className="text-gray-700 mb-6">
                  Illuminate your Barat procession with vibrant lighting that
                  enhances the festive spirit of your event.
                </p>
                <a
                  href="/services"
                  className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card 3: Ghodi for Weddings */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white">
              <div className="h-64 overflow-hidden">
                <img
                  src={service2} // Replace with actual image path
                  alt="Ghodi for Weddings"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-yellow-500 text-5xl mb-4">
                  <FaHorse />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ghodi for Weddings</h3>
                <p className="text-gray-700 mb-6">
                  Complete your traditional wedding procession with our
                  beautifully adorned Ghodi, perfect for making a grand
                  entrance.
                </p>
                <a
                  href="/services"
                  className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA buttons */}
      <section className="py-20 bg-red-700 text-gold-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6" data-aos="fade-up">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            Our team is here to bring your vision to life with vibrant and
            soulful performances.
          </p>
          <button
            onClick={openRequestForm}
            className="inline-block bg-gold-500 text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contact Us Now
          </button>
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
      {/* FAQs Section */}
      <section className="py-20 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold mb-6 text-center text-gray-900"
            data-aos="fade-down"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Here are some of the most common questions we get asked about our
            services. If you have more, feel free to reach out!
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 100}`}
              >
                <h3
                  onClick={() => toggleFAQ(index)}
                  className="text-2xl font-semibold flex justify-between items-center cursor-pointer"
                >
                  {faq.question}
                  <span className="text-yellow-500">
                    {openFAQ === index ? "-" : "+"}
                  </span>
                </h3>
                {openFAQ === index && (
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        className="py-20 bg-red-50 text-gray-800"
        id="contact"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold mb-6 text-center text-gray-900"
            data-aos="fade-down"
          >
            Get in Touch
          </h2>
          <p
            className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            We’d love to hear from you! Whether you’re looking to book us for an
            event or have any questions, reach out and we’ll respond promptly.
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start">
            {/* Contact Form */}
            <div
              className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div
              className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Follow Us
              </h3>
              <p className="text-lg text-center text-gray-700 mb-4">
                Stay connected with us through our social media channels and
                contact information below.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-600 hover:text-blue-700 transition"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-pink-500 hover:text-pink-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-400 hover:text-blue-500 transition"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-700 hover:text-blue-800 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-700 flex items-start justify-start">
                  <FaPhoneAlt className="text-yellow-500 mr-2" /> +91-81782
                  12680
                </p>
                <p className="text-lg text-gray-700 mt-2 flex items-start justify-start">
                  <FaEnvelope className="text-yellow-500 mr-2" />{" "}
                  info@hiraband.com
                </p>
                <p className="text-lg text-gray-700 mt-2 flex items-start justify-start">
                  <FaMapMarkerAlt className="text-yellow-500 mr-2" /> Pocket D
                  14 /186 shop 4 Rohini sector 7 metro pillar number-416
                  opposite
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Request Form Modal */}
      {isRequestFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-[59rem] w-full relative">
            <button
              onClick={closeRequestForm}
              className="absolute top-2 right-2 text-gray-700"
            >
              &times;
            </button>
            <RequestForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
