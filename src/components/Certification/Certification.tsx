const Certification = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text Section Center */}
          <p className="text-black text-lg sm:text-xl font-semibold text-center">
            We are an <span className="font-bold">AERB certified</span> X-ray
            clinic.
          </p>

          {/* Logo Section Right */}
          <div>
            <img
              src="/aerb.png"
              alt="AERB Accreditation"
              className="sm:h-26 md:h-28 w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
