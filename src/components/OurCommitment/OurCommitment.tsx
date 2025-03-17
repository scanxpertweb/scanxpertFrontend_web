const OurCommitment = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div>
              {/* Heading */}
              <h2 className="text-[22px] sm:text-3xl md:text-[28px] font-bold text-gray-900 mb-4 text-left">
                Committed to Your <span className="text-primaryBlue">Health</span>{" "}
                <br /> and <span className="text-primaryBlue">Well-being</span>
              </h2>
  
              {/* Short Intro Paragraph */}
              <p className="text-lg text-gray-600 mb-6 text-justify">
                At <strong>ScanXperts</strong>, we deliver accurate and efficient diagnostic imaging with our expert team of radiologists and healthcare professionals. Using cutting-edge technology, we ensure quality care and optimal health outcomes for every patient.
              </p>
  
              {/* Key Points */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  <span className="text-accentOrange">•</span>{" "}
                  <strong>Advanced Technology:</strong> World-class European diagnostic systems for precise imaging.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  <span className="text-accentOrange">•</span>{" "}
                  <strong>Expert Team:</strong> Highly trained professionals for accurate diagnoses.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  <span className="text-accentOrange">•</span>{" "}
                  <strong>Complete Solutions:</strong> Comprehensive dental and ENT diagnostic services.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  <span className="text-accentOrange">•</span>{" "}
                  <strong>Patient Care:</strong> Comfortable and stress-free experience.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  <span className="text-accentOrange">•</span>{" "}
                  <strong>Quick Reports:</strong> Timely delivery of digital and printed results.
                </p>
              </div>
            </div>
  
            {/* Right Side - Image */}
            <div className="flex justify-center flex-col items-center">
              <img
                src="images/committed.jpg"
                alt="ScanXperts Diagnostic Facility"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurCommitment;
  