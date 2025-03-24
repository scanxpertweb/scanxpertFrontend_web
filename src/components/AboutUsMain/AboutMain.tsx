const AboutMain = () => {
  return (
    <section className="py-8 sm:py-12 md:py-8 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6  -mt-4">
          {/* Tagline */}
          <p className="text-center md:text-[22px] sm:text-lg font-semibold text-gray-600 mb-2 sm:mb-6 px-4 ">
            One-stop destination for advanced dental, Head & Neck X-rays and imaging
          </p>
        </div>

        {/* Content */}
        <p className="text-base sm:text-lg text-gray-600 mx-auto text-justify px-4 sm:px-6 md:px-8 leading-relaxed max-w-8xl">
          At ScanXperts, we specialize in advanced dental, Head & Neck   X-rays and imaging
          services, including CBCT, OPG, ENT imaging, TMJ Imaging and more. Located in
          Kochi, Kerala, our clinic is equipped with state-of-the-art diagnostic
          technology, ensuring high-precision scans that assist in accurate
          diagnoses and treatment planning. Our goal is to provide high-quality,
          patient-focused care while adhering to the highest standards of safety
          and efficiency.
        </p>

        <p className="text-base sm:text-lg text-gray-600 mx-auto text-justify px-4 sm:px-6 md:px-8 leading-relaxed max-w-8xl mt-4">
          As one of the pioneers in CBCT technology in South India, we are dedicated to
          making advanced dental imaging accessible and affordable for
          communities across Kerala and neighboring states. Our state-of-the-art
          CBCT services enable precise 3D imaging for complex dental procedures,
          orthodontic planning, and oral surgeries. Being one of the few
          specialized centers in South India offering this technology, we serve
          as a crucial diagnostic hub for dental practitioners and patients
          throughout the region. Our commitment to technological excellence and
          affordable healthcare has made us a trusted name in dental imaging
          across South India.
        </p>

        <p className="text-base sm:text-lg text-gray-600 mx-auto text-justify px-4 sm:px-6 md:px-8 leading-relaxed max-w-8xl mt-4">
          Our team of highly experienced and qualified technologists follows
          stringent quality control measures, ensuring prompt and accurate test
          results. As an AERB-certified diagnostic center, we strictly adhere to
          industry guidelines, prioritizing patient safety and best practices in
          every procedure.
        </p>
      </div>
    </section>
  );
};

export default AboutMain;
