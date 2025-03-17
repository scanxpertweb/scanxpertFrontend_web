import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "./constant";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            What Our <span className="text-primaryBlue">Patients Say</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Swiper Testimonial Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-7 rounded-lg flex flex-col items-center text-center border border-gray-200 relative">
                <img 
                  src="images/googlelogo.png" 
                  alt="Google Logo"
                  className="absolute top-3 right-3 w-6 h-6"
                />
                <FaQuoteLeft className="text-accentOrange text-3xl mb-3" />
                <p className="text-gray-700 text-lg italic">{item.feedback}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
