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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.521982886446!2d76.29474417479435!3d9.960315390080893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08732382457031%3A0xe57e58d14cfe0cb9!2sScanXperts!5e0!3m2!1sen!2sin!4v1729468900000!5m2!1sen!2sin"
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
                  <p className="text-gray-700 text-lg font-semibold">
                    Daily: 10:00 AM - 7:00 PM
                  </p>
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
