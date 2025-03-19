import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { heroImages } from "./constant";
import { Calendar, MapPin, Phone } from "lucide-react";
import AboutClinic from "@/components/AboutClinic/AboutClinic";
import CBCTAwareness from "@/components/AwarenessSection/Awareness";
import WhyUs from "@/components/WhyUs/whyUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Certification from "@/components/Certification/Certification";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-start justify-center bg-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:pr-0 xl:pr-0">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-2/5 text-left p-6 sm:p-8 md:pl-0 xl:pl-4 xl:translate-x-[2%] 2xl:translate-x-[4%]">
            <h1 className="text-[1.8rem] sm:text-[2.1rem] md:text-[2.55rem] font-bold text-gray-900 mb-4 sm:mb-6 leading-relaxed uppercase">
            Advanced Imaging Solutions for Dental, Head & Neck Care!            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed text-justify">
              Experience precision in dental and ENT imaging with our advanced
              X-ray technology like Digital CBCT, OPG etc. We provide safe,
              accurate, and high-resolution diagnostics for the best treatment.
              Trust us for clarity, comfort, and care. Your health deserves the
              best!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <a
                href="/contactus"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-primaryBlue text-white font-semibold hover:bg-secondaryBlue transition text-center flex items-center justify-center gap-2 rounded-md text-sm sm:text-base"
              >
                <Calendar size={16} />
                Book Appointment
              </a>
              <a
                href="tel:+918891240082"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-accentOrange text-white font-semibold hover:bg-darkOrange transition text-center flex items-center justify-center gap-2 rounded-md text-sm sm:text-base"
              >
                <Phone size={16} />
                Call Us: +91-88912 40082
              </a>
            </div>
            <div className="mt-6 sm:mt-8 text-gray-600">
              <p className="text-base sm:text-lg">
                <span className="font-semibold">Address:</span> Plot No. 475,
                11th Cross Road, Panampilly Nagar, Kochi, Kerala, India
              </p>
              <a
                href="https://maps.app.goo.gl/dJ42z4MMHf19SAhHA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center gap-2 text-base sm:text-lg"
              >
                <MapPin size={16} />
                View on Maps
              </a>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="w-full md:w-3/5 xl:w-3.5/5 h-[400px] sm:h-[550px] md:h-[750px] xl:h-[620px] 2xl:h-[750px] mt-6 sm:mt-8 md:mt-0 md:translate-x-[10%] xl:translate-x-[12%] 2xl:translate-x-[15%]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {heroImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Bottom Information Section */}
      <div className="w-full bg-lightGray py-8 sm:py-10 -mt-1">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-6xl mx-auto text-justify text-left">
            At ScanXpert, we provide advanced CBCT and digital, Head & Neck X-ray imaging
            with expert precision. Our state-of-the-art facility in Kochi
            ensures accurate diagnostics for dental and ENT conditions,
            maintaining the highest standards of quality and patient care.
          </p>
        </div>
      </div>

      {/* About Clinic Section */}
      <AboutClinic />

      {/* Awareness Section */}
      <CBCTAwareness />

      {/* Why Us Section */}
      <WhyUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certification Section */}
      <Certification />
    </>
  );
};

export default Hero;
