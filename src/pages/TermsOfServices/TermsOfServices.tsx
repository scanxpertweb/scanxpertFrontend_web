const TermsOfServices = () => {
    return (
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Terms & <span className="text-primaryBlue">Conditions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-3">
              Please read these Terms & Conditions carefully before using our website.
            </p>
          </div>
  
          {/* Content */}
          <div className="bg-white shadow-xl rounded-xl p-8 sm:p-10 md:p-12 text-gray-700 leading-relaxed justify-center items-center">
            
            <p className="text-lg text-justify">
              The Website Owner, including subsidiaries and affiliates ("Website" or "Website Owner" or "we" or "us" or "our"), provides the information contained on this website or any of its pages to visitors ("you" or "your") subject to these terms and conditions, along with our privacy policy and any other relevant notices.
            </p>
  
            {/* Website Use */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Website Usage
            </h2>
            <p className="text-lg mt-2 text-justify">
              By continuing to browse and use this website, you agree to comply with and be bound by these terms of use, which govern the relationship between you and <strong>ScanXperts Pvt. Ltd.</strong> in relation to this website.
            </p>
            <p className="text-lg mt-2 text-justify">
              The term <strong>ScanXperts Pvt. Ltd.</strong> refers to the owner of this website, whose registered office is <strong>Plot No. 475, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India</strong>. The term "you" refers to the user or viewer of our website.
            </p>
  
            {/* Terms of Use */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Terms of Use
            </h2>
            <ul className="list-disc pl-6 mt-2 text-lg text-justify">
              <li>The content on this website is for general information purposes only and is subject to change without notice.</li>
              <li>We do not provide any warranty or guarantee regarding the accuracy, timeliness, completeness, or suitability of the information and materials on this website.</li>
              <li>You acknowledge that such information and materials may contain inaccuracies, and we expressly exclude liability for any such errors to the fullest extent permitted by law.</li>
              <li>Your use of any content on this website is at your own risk. You are responsible for ensuring that any products, services, or information meet your specific requirements.</li>
            </ul>
  
            {/* Intellectual Property */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Intellectual Property
            </h2>
            <p className="text-lg mt-2 text-justify">
              This website contains material owned by or licensed to us, including (but not limited to) the design, layout, appearance, and graphics. Unauthorized reproduction is prohibited except as permitted under copyright law.
            </p>
  
            {/* Trademarks */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Trademarks
            </h2>
            <p className="text-lg mt-2 text-justify">
              All trademarks reproduced on this website that are not our property or licensed to us are acknowledged accordingly.
            </p>
  
            {/* Unauthorized Use */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Unauthorized Use
            </h2>
            <p className="text-lg mt-2 text-justify">
              Unauthorized use of this website may result in a claim for damages and/or be considered a criminal offense.
            </p>
  
            {/* External Links */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              External Links
            </h2>
            <p className="text-lg mt-2 text-justify">
              This website may include links to third-party websites for your convenience. These links do not imply endorsement, and we are not responsible for the content of any linked websites.
            </p>
  
            {/* Linking Policy */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Linking Policy
            </h2>
            <p className="text-lg mt-2 text-justify">
              You may not create a link to this website from another website or document without prior written consent from <strong>ScanXperts Pvt. Ltd.</strong>.
            </p>
  
            {/* Governing Law */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Governing Law
            </h2>
            <p className="text-lg mt-2 text-justify">
              Your use of this website and any disputes arising from it are subject to the laws of India or other relevant regulatory authorities.
            </p>
  
            {/* Payment & Transaction Liability */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Payment & Transaction Liability
            </h2>
            <p className="text-lg mt-2 text-justify">
              We shall not be liable for any loss or damage arising directly or indirectly due to the decline of transaction authorization on account of the cardholder exceeding the pre-set limit mutually agreed upon by us and our acquiring bank.
            </p>
  
            {/* Contact Us */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Contact Us
            </h2>
            <p className="text-lg mt-2 text-justify">
              If you have any questions regarding these terms and conditions, please contact us:
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
  
            {/* Policy Updates */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Changes to Terms & Conditions
            </h2>
            <p className="text-lg mt-2 text-justify">
              We reserve the right to modify these terms at any time. Any updates will be effective immediately upon posting to this website.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TermsOfServices;