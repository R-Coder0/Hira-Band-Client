import { useState } from 'react';
import heroImage from '../assets/Hero/Gallery.jpg';
import Modal from 'react-modal';
// Import images
import IMG0029 from '../assets/Gallery/IMG-20241112-WA0029.jpg';
import IMG0030 from '../assets/Gallery/IMG-20241112-WA0030.jpg';
import IMG0031 from '../assets/Gallery/IMG-20241112-WA0031.jpg';
import IMG0032 from '../assets/Gallery/IMG-20241112-WA0032.jpg';
import IMG0033 from '../assets/Gallery/IMG-20241112-WA0033.jpg';
import IMG0034 from '../assets/Gallery/IMG-20241112-WA0034.jpg';
import IMG0035 from '../assets/Gallery/IMG-20241112-WA0035.jpg';
import IMG0036 from '../assets/Gallery/IMG-20241112-WA0036.jpg';
import IMG0037 from '../assets/Gallery/IMG-20241112-WA0037.jpg';
import IMG0038 from '../assets/Gallery/IMG-20241112-WA0038.jpg';
import IMG0039 from '../assets/Gallery/IMG-20241112-WA0039.jpg';
import IMG0040 from '../assets/Gallery/IMG-20241112-WA0040.jpg';
import IMG0041 from '../assets/Gallery/IMG-20241112-WA0041.jpg';
import IMG0042 from '../assets/Gallery/IMG-20241112-WA0042.jpg';
import IMG0043 from '../assets/Gallery/IMG-20241112-WA0043.jpg';
import IMG0044 from '../assets/Gallery/IMG-20241112-WA0044.jpg';
import IMG0045 from '../assets/Gallery/IMG-20241112-WA0045.jpg';
import IMG0046 from '../assets/Gallery/IMG-20241112-WA0046.jpg';

// Import videos
import VID0001 from '../assets/Gallery/VID-20241112-WA0002.mp4';
import VID0002 from '../assets/Gallery/VID-20241112-WA0002.mp4';
import VID0003 from '../assets/Gallery/VID-20241112-WA0003.mp4';
import VID0004 from '../assets/Gallery/VID-20241112-WA0004.mp4';
import VID0005 from '../assets/Gallery/VID-20241112-WA0005.mp4';
import VID0006 from '../assets/Gallery/VID-20241112-WA0006.mp4';
import VID0007 from '../assets/Gallery/VID-20241112-WA0007.mp4';
import VID0008 from '../assets/Gallery/VID-20241112-WA0008.mp4';

const galleryItems = [
  // Images
  { type: 'image', src: IMG0029, alt: 'Gallery Image 29' },
  { type: 'image', src: IMG0030, alt: 'Gallery Image 30' },
  { type: 'image', src: IMG0031, alt: 'Gallery Image 31' },
  { type: 'image', src: IMG0032, alt: 'Gallery Image 32' },
  { type: 'image', src: IMG0033, alt: 'Gallery Image 33' },
  { type: 'image', src: IMG0034, alt: 'Gallery Image 34' },
  { type: 'image', src: IMG0035, alt: 'Gallery Image 35' },
  { type: 'image', src: IMG0036, alt: 'Gallery Image 36' },
  { type: 'image', src: IMG0037, alt: 'Gallery Image 37' },
  { type: 'image', src: IMG0038, alt: 'Gallery Image 38' },
  { type: 'image', src: IMG0039, alt: 'Gallery Image 39' },
  { type: 'image', src: IMG0040, alt: 'Gallery Image 40' },
  { type: 'image', src: IMG0041, alt: 'Gallery Image 41' },
  { type: 'image', src: IMG0042, alt: 'Gallery Image 42' },
  { type: 'image', src: IMG0043, alt: 'Gallery Image 43' },
  { type: 'image', src: IMG0044, alt: 'Gallery Image 44' },
  { type: 'image', src: IMG0045, alt: 'Gallery Image 45' },
  { type: 'image', src: IMG0046, alt: 'Gallery Image 46' },

  // Videos
  { type: 'video', src: VID0001 },
  { type: 'video', src: VID0002 },
  { type: 'video', src: VID0003 },
  { type: 'video', src: VID0004 },
  { type: 'video', src: VID0005 },
  { type: 'video', src: VID0006 },
  { type: 'video', src: VID0007 },
  { type: 'video', src: VID0008 },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#111',
    padding: '1rem',
    borderRadius: '10px',
    width: '90vw',
    maxWidth: '800px',
    height: '80vh',
    maxHeight: '600px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
};

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center h-[70vh] flex flex-col justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4" data-aos="fade-down">
            Our Gallery
          </h1>
          <p
            className="text-lg max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Explore the moments we&apos;ve captured and the events we&apos;ve transformed.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-red-600 mb-8">
            Our Work and Clients
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(index)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    muted
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal for full-screen view */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Gallery Modal"
        ariaHideApp={false}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 z-50"
          >
            &#8249;
          </button>
          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80"
          >
            &#8250;
          </button>
          {/* Display Content */}
          {galleryItems[currentIndex].type === 'image' ? (
            <img
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].alt}
              className="w-full h-auto max-w-full max-h-full object-contain"
            />
          ) : (
            <video
              src={galleryItems[currentIndex].src}
              controls
              autoPlay
              className="w-full h-auto max-w-full max-h-full object-contain"
            />
          )}
          {/* Caption */}
          <div className="text-center text-white py-4 text-lg absolute bottom-6 w-full">
            {galleryItems[currentIndex].alt || 'Gallery Item'}
          </div>
          {/* Navigation Indicator */}
          <div className="text-center text-white text-sm absolute top-4 left-1/2 transform -translate-x-1/2">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GallerySection;