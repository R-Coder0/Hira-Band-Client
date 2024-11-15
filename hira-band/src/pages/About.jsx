// src/pages/About.jsx
import aboutImage1 from "../assets/Service/Band.jpg";
import aboutImage2 from "../assets/Service/Ghodi.jpg";
import aboutImage3 from "../assets/Service/Light.jpg";
import headerImage from "../assets/Hero/about.jpg";
import teamImage2 from "../assets/profile.jpg";
import teamImage3 from "../assets/profile.jpg";
import teamImage1 from "../assets/profile.jpg";
import {
  FaGuitar,
  FaHeartbeat,
  FaStar,
  FaHandHoldingHeart,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section with Background Image */}
      <section
        className="relative bg-cover bg-center text-white text-center h-[70vh] flex flex-col justify-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4" data-aos="fade-down">
            About Hira Band
          </h1>
          <p
            className="text-lg max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Hira Band delivers exceptional musical experiences, blending
            tradition with modernity to elevate every event.
          </p>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 bg-maroon-900 text-gold-100" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-6 text-gold-500">
              Discover Our Legacy
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Established in 1967, Hira Band has been an integral part of
              countless celebrations, infusing each event with the magic of
              music and tradition. With decades of experience, we bring
              unmatched expertise and a passion for creating joyful memories
              that linger long after the last note fades.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              We pride ourselves on our ability to blend the richness of
              traditional Indian music with modern rhythms, catering to a
              variety of events, from opulent weddings and lively baraat
              processions to sophisticated corporate gatherings and vibrant
              festivals. Our musical offerings span classical melodies,
              energetic bhangra, Bollywood favorites, and soulful orchestras,
              ensuring each performance resonates with every guest.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Specializing in grand wedding experiences, we provide a full suite
              of services including traditional Baggi (chariot) and Ghodi
              (decorated horse) for wedding processions, beautifully arranged
              wedding cars, and electrifying dhol and orchestra performances.
              Every aspect is designed to celebrate and elevate the essence of
              your occasion.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Our team of skilled musicians and performers crafts each event’s
              music to reflect your unique story and cultural background,
              creating a deeply personal and meaningful experience. From the
              powerful beats leading the groom&apos;s baraat to the melodic tunes
              during wedding ceremonies, Hira Band transforms every moment into
              a cherished memory.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              Trust Hira Band to set the perfect tone for your celebration. Join
              the many who have chosen us to add beauty, emotion, and elegance
              to their special days. Let us be the soundtrack to your
              unforgettable moments, filling each celebration with joy, energy,
              and a touch of magic.
            </p>
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
          {/* Content */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Embrace the Art of Live Music
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At Hira Band, music is more than just sound—it&apos;s the soul of
              every celebration, bringing people together and creating lasting
              memories. Our live performances add a unique energy and elegance
              to each event, turning moments into experiences that guests will
              treasure forever.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Whether it&apos;s the grand entry of the bride or the joyous arrival of
              the groom’s baraat, we tailor our performances to enhance the
              essence of each celebration. Our talented team brings together
              traditional Indian melodies, lively bhangra beats, and popular
              Bollywood tracks to captivate and delight every audience.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              From intimate weddings to grand corporate gatherings and festive
              occasions, Hira Band customizes each performance to match the
              spirit of your event. We work closely with you to ensure that
              every note, rhythm, and melody aligns perfectly with your vision,
              creating an atmosphere that reflects the uniqueness of your
              celebration.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Trust Hira Band to elevate your special occasion with music that
              not only entertains but also resonates deeply. Let us craft a
              musical experience that celebrates your story, moves your guests,
              and fills every moment with joy and connection. Celebrate with
              Hira Band—a soundtrack for memories that last a lifetime.
            </p>
          </div>

          {/* Image without Border Radius */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <img
                src={aboutImage3}
                alt="About Hira Band"
                className="shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Legacy Section */}
      <section className="py-20 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Passionate Performances, Lasting Impressions
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At Hira Band, we believe that music has the power to transform any
              gathering into a vibrant celebration. With decades of experience
              and a dedication to musical excellence, we craft each performance
              to reflect the unique spirit of every event, creating memories
              that will be cherished forever.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              From the rhythmic beats of the dhol that herald a groom&apos;s arrival
              to the soulful tunes that accompany a couple’s first dance, every
              moment we perform is infused with energy and emotion. Our skilled
              musicians blend traditional Indian sounds with contemporary flair,
              catering to diverse tastes and elevating each occasion with a
              customized musical experience.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Specializing in weddings, corporate events, and festive
              celebrations, Hira Band goes beyond simply playing music. We
              collaborate closely with our clients to understand their vision,
              ensuring each note aligns with the atmosphere and style of the
              event. Our goal is to create a soundtrack that resonates deeply
              with all in attendance, making your special day truly
              unforgettable.
            </p>
            <p className="text-lg leading-relaxed">
              Experience the magic of live music with Hira Band—where passion,
              tradition, and artistry come together to celebrate life’s most
              precious moments. Let us bring the heart of music to your event
              and leave an impression that lasts a lifetime.
            </p>
          </div>

          <div className="w-full md:w-1/2" data-aos="fade-left">
            <img
              src={aboutImage2}
              alt="Hira Band Legacy"
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            Driven by a passion for excellence and commitment to making every
            event unforgettable, we strive to leave a lasting impact through
            music.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-lg shadow-md text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <FaHeartbeat className="text-yellow-400" /> Our Mission
              </h3>
              <p>
                Our mission is to bring every celebration to life with music
                that not only entertains but deeply resonates. At Hira Band, we
                are driven by a passion for music and a commitment to creating
                experiences that honor both tradition and joy. We aim to craft
                performances that blend the richness of Indian culture with
                contemporary flair, ensuring that each note speaks to the heart
                of every guest. Through vibrant baraat processions, soulful
                melodies, and dynamic beats, we strive to make each event
                unforgettable, celebrating the magic of live music with
                dedication and artistry.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-lg shadow-md text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Our Vision
              </h3>
              <p>
                Hira Band envisions becoming a cherished name in the world of
                celebrations, known for our ability to unite people through
                music and tradition. Our vision is to set a new standard in
                event entertainment, where each performance reflects a
                harmonious blend of heritage and innovation. We aspire to be
                recognized not only for our musical excellence but also for the
                joy, connection, and unforgettable experiences we create.
                Through our legacy, we aim to inspire a future where live music
                is an integral part of every cherished moment, and Hira Band is
                synonymous with exceptional celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Our core values drive everything we do, from each carefully crafted
            performance to the joyful experiences we create. These principles
            shape our journey and commitment to bringing music, tradition, and
            happiness to every celebration.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-yellow-500 text-5xl mb-4">
                <FaGuitar />
              </div>
              <h3 className="text-2xl font-bold mb-2">Authenticity</h3>
              <p>
                We stay true to our roots, honoring cultural traditions and
                infusing every event with the authentic sounds and emotions that
                make each celebration unique.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-yellow-500 text-5xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-2xl font-bold mb-2">Excellence</h3>
              <p>
                Excellence is at the heart of our performances. We aim to
                surpass expectations, ensuring every detail is crafted to
                perfection for an unforgettable experience.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-yellow-500 text-5xl mb-4">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-2xl font-bold mb-2">Unity</h3>
              <p>
                Music unites us all. We believe in creating an atmosphere where
                guests feel connected, making each performance a shared
                celebration of joy and harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Meet Our Talented Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            Our team of experienced musicians brings together a unique blend of
            skill and creativity, making each event unforgettable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage1}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">John Smith</h3>
              <p className="text-yellow-600 font-semibold">Lead Guitarist</p>
              <p className="text-gray-600">
                John’s soulful guitar solos bring a unique depth to each
                performance.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage2}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">Lisa Adams</h3>
              <p className="text-yellow-600 font-semibold">Vocalist</p>
              <p className="text-gray-600">
                Lisa’s powerful voice and charisma captivate every audience.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage3}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">Michael Brown</h3>
              <p className="text-yellow-600 font-semibold">Percussionist</p>
              <p className="text-gray-600">
                Michael’s rhythmic talent creates an energetic atmosphere at
                every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-yellow-600 text-gray-900 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Experience Hira Band?
          </h2>
          <p className="text-lg mb-8">
            Contact us to learn more about our services and how we can make your
            next event unforgettable.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-yellow-800 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
