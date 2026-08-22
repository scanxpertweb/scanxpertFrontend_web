import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import {
  facilityGalleryImages,
  facilityHeroImage,
} from "./facilityImages";

const FacilityGallery = () => {
  const thumbnailImages = facilityGalleryImages.slice(1);

  return (
    <section className="py-8 sm:py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-primaryBlue to-primaryBlue rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Our <span className="text-primaryBlue">Center</span>
          </h2>
          <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-primaryBlue to-primaryBlue rounded-full" />
        </div>

        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 px-4 max-w-xl mx-auto">
          AERB-certified facility in Panampilly Nagar, Kochi
        </p>

        {/* Compact: exterior photo + short description side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center mb-6 max-w-4xl mx-auto">
          <div className="flex justify-center md:justify-end">
            <div className="rounded-xl shadow-md bg-white p-2 max-w-[220px] sm:max-w-[260px]">
              <img
                src={facilityHeroImage.src}
                alt={facilityHeroImage.alt}
                className="w-full h-auto max-h-[240px] sm:max-h-[280px] object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="text-center md:text-left px-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              ScanXperts
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Center for Advanced Dento-Maxillofacial Imaging & Research,
              Panampilly Nagar, Kochi. Modern, clean, and equipped with
              European-grade diagnostic systems.
            </p>
          </div>
        </div>

        {/* More photos — small uniform carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          loop={thumbnailImages.length > 1}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          slidesPerView={2}
          className="rounded-xl pb-8 max-w-4xl mx-auto"
        >
          {thumbnailImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="h-28 sm:h-32 rounded-lg overflow-hidden shadow bg-white flex items-center justify-center p-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-full max-w-full object-contain rounded"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-1">
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primaryBlue text-sm font-semibold hover:text-accentOrange transition-colors"
          >
            <MapPin size={16} />
            See more on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilityGallery;
