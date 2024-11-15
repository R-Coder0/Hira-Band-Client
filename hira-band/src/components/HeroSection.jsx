import heroimage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fadeIn">
          Celebrate with Tradition and Joy
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-200">
          Hira Band - Bringing Life and Rhythm to Every Occasion Since 1967
        </p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
        >
          Book Your Event
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
