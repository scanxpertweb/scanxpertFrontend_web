import PageHeader from "@/components/Header/Header";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        image="images/header6.png"
        title="Contact Us"
        quote="Contact us for more information"
      />

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Google Map */}
            <div className="w-full h-[350px] md:h-[450px]">
              <iframe
                title="Clinic Location"
                className="w-full h-full rounded-lg shadow-lg"
                src="https://maps.app.goo.gl/3Way5iRTCK8Y1bG3A"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Right Side - Contact Details */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mt-2">
                Reach out to us for any queries or appointments.
              </p>

              <div className="mt-6 space-y-4">
                {/* Mobile */}
                <div className="flex items-center space-x-3">
                  <Phone className="text-accentOrange" size={24} />
                  <a
                    href="tel:+918891240082"
                    className="text-gray-700 text-lg hover:text-primaryBlue transition"
                  >
                    +91-88912 40082
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="text-accentOrange" size={24} />
                  <a
                    href="mailto:scan.xperts@gmail.com"
                    className="text-gray-700 text-lg hover:text-primaryBlue transition"
                  >
                    scan.xperts@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accentOrange" size={24} />
                  <a
                    href="https://maps.app.goo.gl/dJ42z4MMHf19SAhHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-lg hover:text-primaryBlue transition"
                  >
                    475, 11th Cross Rd, MIG Housing Society, <br />
                    Panampilly Nagar, Ernakulam, Kerala 682036,
                    <br /> India
                  </a>
                </div>

                {/* Timings */}
                <div className="flex items-center space-x-3">
                  <Clock className="text-green-500" size={24} />
                  <div className="flex flex-col">
                    <p className="text-gray-700 text-lg font-semibold">
                      Mon-Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-green-600 text-sm font-bold flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Now Open, Visit Us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
