import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram,} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-black text-white text-xs md:text-sm py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 px-4 md:px-6">
        {/* Left Section: Address and Email */}
        <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 items-center">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span className="text-center md:text-left">Pocket D 14 /186 shop 4 Rohini sector 7 metro pillar number-416 opposite</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>info@hirabandrohini.in</span>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-2 md:space-x-3">
          <a href="https://www.facebook.com/profile.php?id=61567273151904" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/hira_band_rohini_delhi/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
