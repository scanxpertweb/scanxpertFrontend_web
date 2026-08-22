import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { facilityGalleryImages } from "@/components/FacilityGallery/facilityImages";

const highlights = [
  "CBCT, OPG, TMJ & ENT imaging under one roof",
  "AERB-certified, European-grade equipment",
  "Expert radiologist-led reports",
  "Daily open 10 AM – 7 PM, Panampilly Nagar",
];

const collageLayout = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

const CenterCollage = () => (
  <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full max-w-[500px] sm:max-w-[560px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[540px] mx-auto lg:ml-auto">
    {facilityGalleryImages.map((image, index) => (
      <div
        key={image.id}
        className={`overflow-hidden bg-gray-100 ${collageLayout[index]}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const AboutClinic = () => {
  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <p className="text-accentOrange font-semibold text-sm uppercase tracking-wide mb-2">
              About Our Center
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              One-stop destination for advanced{" "}
              <span className="text-primaryBlue">
                Dental, Head & Neck and ENT
              </span>{" "}
              imaging
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify mb-5">
              At ScanXperts we specialize in Dental, Head & Neck and ENT X-rays
              and imaging services, including CBCT, OPG, ENT imaging, and more.
              Located in Kochi, Kerala, we offer cutting-edge diagnostic
              solutions with precision and care.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify mb-6">
              We follow an innovative, patient-centered healthcare model. Our
              goal is to provide high-quality, friendly, and trustworthy
              services—ensuring every patient receives the best possible care.
            </p>

            <ul className="space-y-2.5 mb-7">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accentOrange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/aboutus"
              className="inline-flex items-center gap-2 bg-primaryBlue text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondaryBlue transition-all duration-300 text-sm sm:text-base shadow-md group"
            >
              Know More
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Right — Photo collage */}
          <div className="order-1 lg:order-2 w-full">
            <CenterCollage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
