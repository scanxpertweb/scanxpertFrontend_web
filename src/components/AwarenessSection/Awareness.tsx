import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CBCTAwareness = () => {
  // Add sample images - you can replace these with your actual CBCT-related images
  const cbctImages = [
    { id: 1, src: "/images/cbctscan2.jpg", alt: "CBCT Scanning Process" },
    { id: 2, src: "/images/cbctscan1.jpeg", alt: "3D Dental Imaging" },
    { id: 3, src: "/images/cbct.jpg", alt: "CBCT Scanner" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            Understanding <span className="text-primaryBlue">CBCT Scans</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Tagline */}
        <p className="text-center text-base sm:text-lg font-semibold text-gray-600 mb-8 sm:mb-12 px-4">
          Advanced 3D imaging for precise dental diagnostics
        </p>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
              A CBCT scanner (Cone Beam Computed Tomography) is a cutting-edge
              imaging technology that captures high-resolution 3D images of the
              mouth, including teeth, jaws, soft tissue, and bones. Using
              minimal radiation, it offers a safer, more advanced alternative to
              traditional X-rays. Essential for complex treatments like
              implants, orthodontics, and oral surgery, CBCT enhances diagnosis,
              improves treatment precision, and enables accurate simulations,
              revolutionizing patient care.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-base sm:text-lg mb-2">
                Benefits of CBCT Scans:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Provides highly
                  detailed 3D images for accurate diagnosis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Minimally invasive
                  and ideal for anxious patients
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Enhances treatment
                  precision and reduces risks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Helps patients
                  understand their treatment plans better
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Uses low radiation
                  exposure for a safer imaging experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primaryBlue">•</span> Enables better
                  pre-surgical planning for complex cases
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Image Swiper */}
          <div className="w-full md:w-1/2 h-[400px] sm:h-[500px]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full rounded-lg overflow-hidden"
            >
              {cbctImages.map((image) => (
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
        {/* <div className="mt-6 flex justify-center">
          <button className="bg-primaryBlue text-white font-semibold px-6 py-3 rounded-md hover:bg-darkOrange transition">
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CBCTAwareness;
