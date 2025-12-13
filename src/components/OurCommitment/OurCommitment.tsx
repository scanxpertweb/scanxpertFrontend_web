import { CheckCircle2 } from "lucide-react";

const OurCommitment = () => {
  const commitments = [
    {
      title: "Advanced Technology",
      description:
        "World-class European diagnostic systems for precise imaging.",
    },
    {
      title: "Expert Team",
      description: "Highly trained professionals for accurate diagnoses.",
    },
    {
      title: "Complete Solutions",
      description: "Comprehensive dental and ENT diagnostic services.",
    },
    {
      title: "Patient Care",
      description: "Comfortable and stress-free experience.",
    },
    {
      title: "Quick Reports",
      description: "Timely delivery of digital and printed results.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-left">
              Committed to Your <span className="text-primaryBlue">Health</span>{" "}
              and <span className="text-primaryBlue">Well-being</span>
            </h2>

            {/* Short Intro Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-justify leading-relaxed">
              At <strong className="text-gray-900">ScanXperts</strong>, we
              deliver accurate and efficient diagnostic imaging with our expert
              team of radiologists and healthcare professionals. Using
              cutting-edge technology, we ensure quality care and optimal health
              outcomes for every patient.
            </p>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accentOrange group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong className="text-gray-900 group-hover:text-primaryBlue transition-colors duration-300">
                        {commitment.title}:
                      </strong>{" "}
                      {commitment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-lg group">
              <div className="absolute inset-0 bg-primaryBlue/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src="images/committed.jpg"
                alt="ScanXperts Diagnostic Facility"
                className="relative w-full h-auto rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
