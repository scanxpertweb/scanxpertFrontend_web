import { services } from "./serviceData";

const OurServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-primaryBlue">Services</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Accurate, Safe, Reliable & Comprehensive Imaging Services.
        </p>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primaryBlue text-white rounded-lg shadow-lg 
              overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-78 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                {/* Accent Line */}
                <div className="h-[3px] w-16 bg-accentOrange my-3 mx-auto"></div>

                {/* Description */}
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
