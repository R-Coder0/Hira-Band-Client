import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import RequestForm from '../components/RequestForm';
import logo from '../assets/Hira-Band-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 via-black to-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Hira Band Logo"
              className="w-[148px] md:h-[80px] h-[70px] mr-2 object-contain transition-transform duration-300 hover:scale-105 absolute" // Adjust width and height here
            />
          </Link>
        </div>

          <ul className="hidden md:flex flex-grow justify-center space-x-8 text-lg font-semibold">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={toggleModal}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 animate-pulse transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 text-white space-y-4 py-6 px-8">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button
              onClick={toggleModal}
              className="block bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center py-2 rounded-full shadow-md hover:shadow-xl hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 animate-pulse transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-[59rem] p-6 rounded-lg shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <RequestForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
