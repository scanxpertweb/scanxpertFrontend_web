import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutClinic = () => {
  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-r from-transparent via-primaryBlue to-primaryBlue rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
            About Our <span className="text-primaryBlue">Center</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-l from-transparent via-primaryBlue to-primaryBlue rounded-full"></div>
        </div>

        {/* Tagline */}
        <p className="text-center text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6 px-4 max-w-3xl mx-auto">
          One-stop destination for advanced Dental, Head & Neck and ENT imaging
        </p>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-gray-600 mx-auto text-center px-4 sm:px-6 md:px-8 leading-relaxed mb-6 sm:mb-8">
            At ScanXperts we specialize in Dental, Head & Neck and ENT X-rays
            and imaging services, including CBCT, OPG, ENT imaging, and more.
            Located in Kochi, Kerala, we offer cutting-edge diagnostic solutions
            with precision and care. We implement an innovative,
            patient-centered healthcare model through a network of family
            Centers. Our goal is to provide high-quality, friendly, and
            trustworthy healthcare services, ensuring that every patient
            receives the best possible care.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link to="/aboutus" className="group">
              <button className="bg-primaryBlue text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-secondaryBlue transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-md">
                Know More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
