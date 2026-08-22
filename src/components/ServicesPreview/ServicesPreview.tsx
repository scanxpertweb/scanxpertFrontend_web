import { Link } from "react-router-dom";
import { services } from "@/components/OurServices/serviceData";
import { ArrowRight } from "lucide-react";

const PREVIEW_COUNT = 6;

const ServicesPreview = () => {
  const previewServices = services.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-r from-transparent via-primaryBlue to-primaryBlue rounded-full" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Our <span className="text-primaryBlue">Services</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-gradient-to-l from-transparent via-primaryBlue to-primaryBlue rounded-full" />
        </div>

        <p className="text-center text-base sm:text-lg font-semibold text-gray-700 mb-8 sm:mb-10 px-4 max-w-3xl mx-auto">
          CBCT, OPG, TMJ, and more — accurate imaging for dental, head & neck,
          and ENT care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {previewServices.map((service) => (
            <Link
              key={service.id}
              to="/ourservices"
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-primaryBlue/30"
            >
              <div className="relative overflow-hidden h-44 sm:h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primaryBlue/0 group-hover:bg-primaryBlue/20 transition-all duration-300" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primaryBlue transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="h-[3px] w-12 bg-accentOrange mb-3 group-hover:w-20 transition-all duration-300" />
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-primaryBlue font-semibold text-sm mt-4 group-hover:text-accentOrange transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Link
            to="/ourservices"
            className="group bg-primaryBlue text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-secondaryBlue transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-md"
          >
            View All Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
