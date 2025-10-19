const Certification = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* AERB Certification */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-full bg-white shadow-lg p-2">
              <img
                src="/aerb.png"
                alt="AERB Accreditation"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full object-contain"
              />
            </div>
            <p className="text-black text-lg sm:text-xl font-semibold text-center md:text-left">
              <span className="font-bold">AERB Certified</span>
              <br />
              X-ray Clinic
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-24 w-px bg-gray-300"></div>

          {/* MSME Certification */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-full bg-white shadow-lg p-2">
              <img
                src="/msmelogo.png"
                alt="MSME Registration"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full object-contain"
              />
            </div>
            <p className="text-black text-lg sm:text-xl font-semibold text-center md:text-left">
              <span className="font-bold">MSME Registered</span>
              <br />
              Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
