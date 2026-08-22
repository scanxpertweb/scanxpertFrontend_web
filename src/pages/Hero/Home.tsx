import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import { heroImages } from "./constant";
import { Calendar, MapPin, Phone } from "lucide-react";
import AboutClinic from "@/components/AboutClinic/AboutClinic";
import ServicesPreview from "@/components/ServicesPreview/ServicesPreview";
import MeetRadiologist from "@/components/MeetRadiologist/MeetRadiologist";
import CBCTAwareness from "@/components/AwarenessSection/Awareness";
import WhyUs from "@/components/WhyUs/whyUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Certification from "@/components/Certification/Certification";
import { Helmet } from "react-helmet";
import { getWhatsAppUrl, siteConfig } from "@/config/siteConfig";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Best X-Ray & CBCT Diagnostic Center in Kochi | ScanXperts</title>
        <meta
          name="description"
          content="ScanXperts is a leading diagnostic center in Kochi offering advanced Dental X-Ray, CBCT, OPG, and TMJ imaging. Fast, accurate and affordable diagnostics."
        />
        <meta
          name="keywords"
          content="Kochi, dentists, dentists in kochi, Best xray near me, mouth xray near me, 
    scan center, dental scan kochi, OPG, CBCT near me, CBCT kochi, dental Implant, 
    maxillofacial scan, dental scan center in kochi, dental scan center in kerala, 
    dental scan kochi,  scanxperts, scanxperts kochi, scanxperts kerala, 
    X-Ray Kochi, CBCT scan Kerala, Dental imaging Kochi, Diagnostic center Kochi, 
    OPG scan Kerala, TMJ X-ray Kochi, ENT CBCT Kerala"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scanxperts.in/home" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "DiagnosticLab",
        "name": "ScanXperts Diagnostics",
        "image": "https://scanxperts.in/images/meta-preview.jpg",
        "url": "https://scanxperts.in",
        "telephone": "+918891240082",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 475, 11th Cross Road, Panampilly Nagar",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682036",
          "addressCountry": "IN"
        },
        "description": "ScanXperts is a leading diagnostic imaging center in Kochi providing high-resolution dental and ENT scans including CBCT, OPG, TMJ and more.",
        "openingHours": "Mo-Su 10:00-19:00",
        "sameAs": [
          "https://www.instagram.com/scanxperts"
        ]
      }
    `}
        </script>

        <meta
          property="og:title"
          content="Best CBCT & X-Ray Clinic in Kochi - ScanXperts"
        />
        <meta
          property="og:description"
          content="Accurate and advanced dental & ENT imaging in Kochi. Visit ScanXperts for precise diagnostics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scanxperts.in/home" />
        <meta property="og:image" content="/images/meta-preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="X-Ray & CBCT Kochi - ScanXperts" />
        <meta
          name="twitter:description"
          content="Advanced imaging solutions in Kochi for dental, head and neck diagnostics."
        />
        <meta name="twitter:image" content="/images/meta-preview.jpg" />
      </Helmet>

      <section className="relative min-h-[85vh] flex items-start justify-center bg-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:pr-0 xl:pr-0">
          <div className="w-full md:w-2/5 text-left p-6 sm:p-8 md:pl-0 xl:pl-4 xl:translate-x-[2%] 2xl:translate-x-[4%]">
            <h1 className="text-[1.8rem] sm:text-[2.1rem] md:text-[2.55rem] font-bold text-gray-900 mb-4 sm:mb-6 leading-relaxed uppercase">
              Advanced Imaging Solutions for Dental, Head & Neck Care!{" "}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed text-justify">
              Experience precision in Dental, Head & Neck and ENT imaging with
              our advanced X-ray technology like Digital CBCT, OPG , Ceph, TMJ
              views etc. We provide safe, accurate, and high-resolution
              diagnostics for the best treatment. Trust us for clarity, comfort,
              and care. Your health deserves the best!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="/contactus"
                className="px-4 sm:px-6 py-3 sm:py-4 bg-primaryBlue text-white font-semibold hover:bg-secondaryBlue transition text-center flex items-center justify-center gap-2 rounded-md text-sm sm:text-base"
              >
                <Calendar size={16} />
                Book Appointment
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-accentOrange text-white font-semibold hover:bg-darkOrange transition text-center flex items-center justify-center gap-2 rounded-md text-sm sm:text-base"
              >
                <Phone size={16} />
                Call Us
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 sm:py-4 bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition text-center flex items-center justify-center gap-2 rounded-md text-sm sm:text-base"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
            <div className="mt-6 sm:mt-8 text-gray-600">
              <p className="text-base sm:text-lg">
                <span className="font-semibold">Address:</span>{" "}
                {siteConfig.address}
              </p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center gap-2 text-base sm:text-lg mt-1"
              >
                <MapPin size={16} />
                View on Maps
              </a>
            </div>
          </div>

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

      <div className="w-full bg-lightGray py-8 sm:py-10 -mt-1">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-6xl mx-auto text-justify text-left">
            At ScanXperts, we provide advanced Dental, Head & Neck and ENT X-ray
            imaging with expert precision. Our state-of-the-art facility in
            Kochi ensures accurate diagnostics for dental, head & neck and ENT
            conditions, maintaining the highest standards of quality and patient
            care.
          </p>
        </div>
      </div>

      <ServicesPreview />
      <AboutClinic />
      <MeetRadiologist />
      <CBCTAwareness />
      <WhyUs />
      <Testimonials />
      <Certification />
    </>
  );
};

export default Hero;
