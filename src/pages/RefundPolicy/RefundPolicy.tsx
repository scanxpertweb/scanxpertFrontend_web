const RefundPolicy = () => {
    return (
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Refund & Cancellation <span className="text-primaryBlue">Policy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-3">
              Please read our refund and cancellation policy carefully before making any payment.
            </p>
          </div>
  
          {/* Content */}
          <div className="bg-white shadow-xl rounded-xl p-8 sm:p-10 md:p-12 text-gray-700 leading-relaxed">
            
            {/* No Refund Policy */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              No Refund Policy
            </h2>
            <p className="text-lg mt-2">
              You agree and acknowledge that, unless explicitly stated otherwise, 
              <strong> all payments made for services at ScanXperts Pvt. Ltd. are non-refundable.</strong> 
              Once a payment is successfully made, it cannot be reversed or refunded.
            </p>
  
            {/* Cancellation Policy */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Cancellation Policy
            </h2>
            <p className="text-lg mt-2">
              We understand that unforeseen circumstances may arise. However, our services are time-sensitive 
              and prepared in advance. Therefore:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 space-y-2">
              <li>
                Appointments must be canceled at least <strong>24 hours</strong> in advance to avoid charges.
              </li>
              <li>
                Cancellations made within <strong>less than 24 hours</strong> of the scheduled appointment 
                may not be eligible for a refund.
              </li>
              <li>
                If you fail to attend your appointment without prior cancellation, no refunds will be provided.
              </li>
            </ul>
  
            {/* Exceptions */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Exceptions to Refund & Cancellation
            </h2>
            <p className="text-lg mt-2">
              Refunds or cancellations may be granted under the following exceptional circumstances:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 space-y-2">
              <li>
                If an appointment is canceled due to <strong>technical issues on our end</strong>.
              </li>
              <li>
                If a service is not delivered due to an error by <strong>ScanXperts Pvt. Ltd.</strong>
              </li>
              <li>
                Medical emergencies (with valid proof) may be considered on a case-by-case basis.
              </li>
            </ul>

  
            {/* Contact Us */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Contact Us
            </h2>
            <p className="text-lg mt-2">
              For any refund or cancellation inquiries, feel free to reach out to us:
            </p>
            <p className="text-lg font-semibold mt-2">
              📧 Email:{" "}
              <a href="mailto:scanxpert@contact.com" className="text-primaryBlue font-medium">
                scanxpert@contact.com
              </a>
            </p>
            <p className="text-lg font-semibold">
              📍 Address: ScanXperts Pvt. Ltd., Plot No. 475, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default RefundPolicy;
  