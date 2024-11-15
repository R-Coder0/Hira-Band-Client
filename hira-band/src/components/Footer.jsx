import {
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import logoImage from "../assets/Hira-Band-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-start space-y-8 md:space-y-0 md:space-x-4 px-6">
        <div className="flex-1 max-w-[350px] text-center">
          <img
            src={logoImage} // Replace logoImage with the actual path to the logo
            alt="Hira Band Logo"
            className="w-32 h-auto mx-auto mb-4"
          />
          <p className="text-gray-400">
            Established in 1967, Hira Band has been a symbol of musical
            excellence and vibrant celebrations for over five decades.
            Specializing in traditional wedding processions and modern musical
            performances, we bring passion and energy to every event, from grand
            weddings to corporate gatherings and festive celebrations.
          </p>
        </div>
        <div className="flex-1 max-w-xs md:max-w-[150px]">
  <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
  <ul className="text-gray-400 space-y-2">
    <li>
      <Link to="/" className="hover:text-yellow-500 transition">
        Home
      </Link>
    </li>
    <li>
      <Link to="/services" className="hover:text-yellow-500 transition">
        Services
      </Link>
    </li>
    <li>
      <Link to="/gallery" className="hover:text-yellow-500 transition">
        Gallery
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-yellow-500 transition">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-yellow-500 transition">
        Contact
      </Link>
    </li>
  </ul>
</div>

        <div className="flex-1 max-w-xs md:max-w-[190px]">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a
                href="/services#band-performances"
                className="hover:text-yellow-500 transition"
              >
                Band Performances
              </a>
            </li>
            <li>
              <a
                href="/services#baggi"
                className="hover:text-yellow-500 transition"
              >
                Baggi (Chariot)
              </a>
            </li>
            <li>
              <a
                href="/services#ghodi"
                className="hover:text-yellow-500 transition"
              >
                Ghodi (Decorated Horse)
              </a>
            </li>
            <li>
              <a
                href="/services#wedding-cars"
                className="hover:text-yellow-500 transition"
              >
                Wedding Cars
              </a>
            </li>
            <li>
              <a
                href="/services#barat-lighting"
                className="hover:text-yellow-500 transition"
              >
                Barat Lighting
              </a>
            </li>
            <li>
              <a
                href="/services#musician-orchestra"
                className="hover:text-yellow-500 transition"
              >
                Musician Orchestra
              </a>
            </li>
            <li>
              <a
                href="/services#dhol"
                className="hover:text-yellow-500 transition"
              >
                Dhol
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter Section */}
        <div className="flex-1 max-w-[270px]">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-2">
          Address: Pocket D 14 /186 shop 4 Rohini sector 7 metro pillar number-416 opposite
          </p>
          <p className="text-gray-400 mb-2">Phone: <a href="tel:8178212680">+91 81782 12680</a> </p>
          <p className="text-gray-400 mb-4">Email: <a href="mailto: info@hiraband.com">info@hiraband.com</a></p>

          {/* Newsletter Subscription */}
          <h4 className="text-xl font-semibold mb-2">
            Subscribe to our Newsletter
          </h4>
          <form className="flex">
            <input
              type="email"
              className="w-full p-2 rounded-l-lg focus:outline-none text-gray-800"
              placeholder="Enter your email"
            />
            <button className="bg-yellow-500 text-gray-900 p-2 rounded-r-lg hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto flex justify-center space-x-6 mt-8">
        <a
          href="https://www.facebook.com/profile.php?id=61567273151904"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          <FaFacebookSquare size={30} />
        </a>
        <a
          href="https://www.instagram.com/hira_band_rohini_delhi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 mt-10 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hira Band. All rights reserved.</p>
          <p className="mt-2">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
