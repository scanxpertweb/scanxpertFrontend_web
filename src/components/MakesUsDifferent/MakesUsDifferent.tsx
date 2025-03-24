const MakesUsDifferent = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div>
            {/* Heading */}
            <h2 className="text-[22px] sm:text-3xl md:text-[28px] font-bold text-gray-900 mb-4 text-left">
              What Makes Us Different?
            </h2>

            {/* Short Intro Paragraph */}
            <p className="text-lg text-gray-600 mb-6 text-justify">
              At ScanXperts, we have a state-of-the-art European Scanning
              equipments and world class diagnostic facility that adheres to
              global standards and is managed by a team of highly skilled
              experts. Together, we fulfill the unique diagnostic testing
              requirements of our patients with precision and care.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <span className="text-accentOrange">•</span>{" "}
                <strong>State-of-the-Art Facility:</strong> Modern equipment and
                expert staff ensuring precision care.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <span className="text-accentOrange">•</span>{" "}
                <strong>Comprehensive Solutions:</strong> Wide range of
                specialized dental and ENT diagnostic services.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <span className="text-accentOrange">•</span>{" "}
                <strong>Quality Management:</strong> Rigorous quality control
                for reliable results.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <span className="text-accentOrange">•</span>{" "}
                <strong>Quick Results:</strong> Fast and accurate diagnostic
                reports.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <span className="text-accentOrange">•</span>{" "}
                <strong>Affordable Care:</strong> Quality healthcare at
                accessible prices.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center flex-col items-center">
            <img
              src="/images/kamakshi.jpg"
              alt="State-of-the-Art Diagnostic Facility"
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
            <p className="mt-2 text-gray-600 text-center text-l font-bold">
              Dr. Kamakshi Raina
            </p>
            <p className="mt-1 text-gray-600 text-center text-sm ">
             Founder, Chief Radiologist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakesUsDifferent;
