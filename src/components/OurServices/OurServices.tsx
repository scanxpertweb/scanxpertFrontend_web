import { services } from "./serviceData";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-r from-transparent via-primaryBlue to-primaryBlue rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Our <span className="text-primaryBlue">Services</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-l from-transparent via-primaryBlue to-primaryBlue rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg font-semibold text-gray-700 mb-8 sm:mb-10 px-4 max-w-3xl mx-auto">
          Accurate, Safe, Reliable & Comprehensive Imaging Services.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-primaryBlue/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primaryBlue/0 group-hover:bg-primaryBlue/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7">
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primaryBlue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Accent Line */}
                <div className="h-[3px] w-16 bg-accentOrange mb-4 group-hover:w-24 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-primaryBlue font-semibold text-sm sm:text-base group-hover:text-accentOrange transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
