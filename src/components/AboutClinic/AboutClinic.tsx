import { Link } from "react-router-dom";

const AboutClinic = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            About Our <span className="text-primaryBlue">Clinic</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Tagline */}
        <p className="text-center text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6 px-4">
          One-stop destination for advanced dental imaging
        </p>

        {/* Content */}
        <p className="text-base sm:text-lg text-gray-600 mx-auto text-justify px-4 sm:px-6 md:px-8 leading-relaxed max-w-8xl">
          At ScanXperts we specialize in dental, Head & Neck X-rays and imaging
          services, including CBCT, OPG, ENT imaging, and more. Located in
          Kochi, Kerala, we offer cutting-edge diagnostic solutions with
          precision and care. We implement an innovative, patient-centered
          healthcare model through a network of family clinics. Our goal is to
          provide high-quality, friendly, and trustworthy healthcare services,
          ensuring that every patient receives the best possible care.
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/aboutus">
            <button className="bg-primaryBlue text-white font-semibold px-4 py-2 rounded-md hover:bg-darkOrange transition text-center items-center justify-center align-middle">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;





