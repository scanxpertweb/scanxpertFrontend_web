import {
  Building2,
  UserCog,
  MapPin,
  Shield,
  FileText,
  Clock,
  Heart,
  Laptop,
} from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-8 sm:py-14 md:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            Why <span className="text-primaryBlue">Choose Us?</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6 px-4">
          Delivering precision, safety, and excellence in dental imaging
        </p>

        {/* Points List */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>World-Class European Equipment:</strong> Featuring the
              advanced NewTom 10x10 FOV scanner for ultra-precise imaging.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <UserCog className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Expert Radiologist Analysis:</strong> All scans are
              reviewed by highly trained specialists for accurate diagnosis.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Prime & Accessible Location:</strong> Easy-to-reach clinic
              with wheelchair accessibility for patient convenience.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Ultra-Safe 3D Scans:</strong> Radiation exposure is 100x
              lower compared to traditional CT scans.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Comprehensive Reports:</strong> Patients receive scan
              results in both hardcopy and digital formats for convenience.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Fast & Efficient Service:</strong> Quick appointment
              scheduling and minimal waiting time.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Patient-Centered Care:</strong> Friendly staff ensuring a
              stress-free and comfortable experience for all patients.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Laptop className="w-6 h-6 text-accentOrange flex-shrink-0" />
            <p>
              <strong>Digital Reports Access:</strong> Secure online portal for
              easy access to reports and scans from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
