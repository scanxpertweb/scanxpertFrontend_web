import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { siteConfig } from "@/config/siteConfig";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 justify-center mb-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={
          star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
        }
        size={14}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const { reviews, rating, totalReviews, source, loading } = useGoogleReviews();

  return (
    <section className="py-12 bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray" />
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            What Our <span className="text-primaryBlue">Patients Say</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <img
              src="images/googlelogo.png"
              alt="Google"
              className="w-6 h-6"
            />
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" size={18} />
              <span className="font-bold text-gray-900 text-lg">
                {rating.toFixed(1)}
              </span>
              {totalReviews > 0 && (
                <span className="text-gray-600 text-sm">
                  ({totalReviews} reviews)
                </span>
              )}
            </div>
          </div>
          {source === "google" && (
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
              Live from Google
            </span>
          )}
          {source === "static" && (
            <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
              From Google reviews
            </span>
          )}
        </div>

        {loading ? (
          <p className="text-center text-gray-500 mb-6">Loading reviews...</p>
        ) : null}

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
          {reviews.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <div className="bg-white p-7 rounded-lg flex flex-col items-center text-center border border-gray-200 relative h-full min-h-[220px]">
                <img
                  src="images/googlelogo.png"
                  alt="Google review"
                  className="absolute top-3 right-3 w-6 h-6"
                />
                {item.profilePhotoUrl ? (
                  <img
                    src={item.profilePhotoUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full mb-2 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaQuoteLeft className="text-accentOrange text-3xl mb-2" />
                )}
                <StarRating rating={item.rating} />
                <p className="text-gray-700 text-base italic line-clamp-5 flex-1">
                  {item.feedback}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  {item.relativeTime && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.relativeTime}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 font-semibold px-5 py-2.5 rounded-lg hover:border-primaryBlue hover:text-primaryBlue transition-colors text-sm"
          >
            <img src="images/googlelogo.png" alt="" className="w-4 h-4" />
            Read All Reviews on Google
            <ExternalLink size={14} />
          </a>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primaryBlue text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-secondaryBlue transition-colors text-sm"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
