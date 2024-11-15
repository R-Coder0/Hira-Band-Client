import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import heroImage from "../assets/hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(""); // Clear any previous messages

    try {

      await emailjs.send(
        'service_0a7ufx6',
      'template_po5hlml',  
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        '2zeRNlW7w8EuZlHUQ'     
      );

      setResponseMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResponseMessage("Oops! Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-gold-700 text-white py-24">
        <img
          src={heroImage}
          alt="Bridal Event"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Let us make your event unforgettable. Reach out to us for bookings
            and inquiries!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Form */}
          <div className="bg-white shadow-2xl p-10 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-gold-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-gold-700 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {responseMessage && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-red-700">Contact Information</h2>
            <p className="text-lg text-gray-700">
              Connect with us directly using the contact information below, or
              reach out on our social platforms.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 text-lg">
              <div className="flex items-center text-gray-700">
                <FaPhoneAlt className="text-red-500 mr-3" /> +91 81782 12680
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="text-red-500 mr-3" /> info@hiraband.com
              </div>
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-red-500 mr-3" /> Pocket D 14 /186 shop 4 Rohini sector 7 metro pillar number-416 opposite
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61567273151904" target="_blank" rel="noopener noreferrer" className="text-3xl text-gold-600 hover:text-gold-700 transition duration-300 transform hover:scale-110">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/hira_band_rohini_delhi/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gold-600 hover:text-gold-700 transition duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center text-red-700">
            Our Location
          </h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4948.669703821075!2d77.11088889203884!3d28.712435359521816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019e08e0b249%3A0x75edda9528422e57!2sHira%20Band%20Rohini!5e0!3m2!1sen!2sin!4v1731567691572!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
