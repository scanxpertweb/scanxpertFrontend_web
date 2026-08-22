import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const MeetRadiologist = () => {
  return (
    <section className="py-8 sm:py-12 md:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accentOrange font-semibold text-sm uppercase tracking-wide mb-2">
              Meet Our Radiologist
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dr. Kamakshi <span className="text-primaryBlue">Raina</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              Founder & Chief Radiologist at ScanXperts, Dr. Kamakshi Raina
              leads our team with deep expertise in dental, head & neck, and ENT
              diagnostic imaging. Every scan is reviewed with precision and
              care, ensuring your dentist or specialist receives reliable
              reports for the best treatment outcomes.
            </p>
            <div className="flex items-start gap-3 mb-6">
              <Award className="w-5 h-5 text-accentOrange flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <strong className="text-gray-900">Expert-led diagnostics</strong>{" "}
                — European-grade equipment, AERB-certified facility, and
                patient-first care at our Panampilly Nagar center in Kochi.
              </p>
            </div>
            <Link
              to="/aboutus"
              className="inline-flex items-center gap-2 bg-primaryBlue text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondaryBlue transition-all duration-300 text-sm sm:text-base"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-primaryBlue/10 rounded-2xl rotate-3" />
              <img
                src="/images/kamakshi.jpg"
                alt="Dr. Kamakshi Raina - Founder & Chief Radiologist at ScanXperts"
                className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg px-4 py-3 text-center">
                <p className="font-bold text-gray-900">Dr. Kamakshi Raina</p>
                <p className="text-sm text-gray-600">
                  Founder, Chief Radiologist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetRadiologist;
