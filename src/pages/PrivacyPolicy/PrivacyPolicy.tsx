const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Privacy <span className="text-primaryBlue">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-3 text-justify">
            Your privacy is our priority. We are committed to protecting your
            personal data and ensuring a secure experience.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white shadow-xl rounded-xl p-8 sm:p-10 md:p-12 text-gray-700 leading-relaxed">
          <p className="text-lg text-justify">
            <strong>ScanXperts Pvt. Ltd.</strong> values your privacy and is
            committed to safeguarding the personal information you share with
            us. We adhere to the highest security standards to ensure your data
            remains confidential and protected.
          </p>

          {/* Information Collection */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Information We Collect
          </h2>
          <p className="text-lg mt-2 text-justify">
            When you interact with our website or services, we may collect the
            following information:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-justify">
            <li>
              <strong>Personal Information:</strong> Name, contact details, age
              and gender.
            </li>
            <li>
              <strong>Transaction Details:</strong> Payments, invoices, and
              related service usage.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and
              website interactions.
            </li>
          </ul>

          {/* Usage of Collected Data */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            How We Use Your Information
          </h2>
          <p className="text-lg mt-2 text-justify">
            We use your data to improve our services, provide medical reports,
            and ensure seamless communication. Your personal information is
            never shared without your explicit consent.
          </p>

          {/* Data Protection */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Data Protection & Security
          </h2>
          <p className="text-lg mt-2 text-justify">
            We implement strict security measures to protect your information
            from unauthorized access, misuse, or disclosure. All data
            transmissions are encrypted and stored securely.
          </p>

          {/* Cookies & Tracking */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Cookies & Online Tracking
          </h2>
          <p className="text-lg mt-2 text-justify">
            Our website uses cookies to enhance your experience. These cookies
            help us understand visitor behavior, but they do not store sensitive
            information like credit card details. You may choose to disable
            cookies in your browser settings.
          </p>

          {/* User Rights */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Your Rights & Choices
          </h2>
          <p className="text-lg mt-2 text-justify">
            You have the right to access, update, or delete your personal
            information upon request. If you wish to make changes to your data,
            please contact us.
          </p>

          {/* Contact Us */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Contact Us
          </h2>
          <p className="text-lg mt-2 text-justify">
            If you have any questions or concerns regarding our privacy policy,
            please reach out to us:
          </p>
          <p className="text-lg font-semibold mt-2">
            📧 Email:{" "}
            <a
              href="mailto:scanxpert@contact.com"
              className="text-primaryBlue font-medium"
            >
              scanxpert@contact.com
            </a>
          </p>
          <p className="text-lg font-semibold">
            📍 Address: Plot No. 475, 11th Cross Road, Panampilly Nagar, Kochi,
            Kerala, India
          </p>

          {/* Policy Updates */}
          <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
            Updates to This Policy
          </h2>
          <p className="text-lg mt-2 text-justify">
            We reserve the right to modify this policy at any time. Updates will
            be effective immediately upon posting on our website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
