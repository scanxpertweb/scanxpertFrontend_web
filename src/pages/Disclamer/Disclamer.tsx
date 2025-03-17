const Disclaimer = () => {
    return (
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Disclaimer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-3">
              Important legal information about our website.
            </p>
          </div>
  
          {/* Content */}
          <div className="bg-white shadow-xl rounded-xl p-8 sm:p-10 md:p-12 text-gray-700 leading-relaxed">
            
            <p className="text-lg">
              <a href="https://www.scanxperts.in" className="text-primaryBlue font-medium">
                www.scanxperts.in{" "}
              </a> 
              makes no representations or warranties of any kind, express or implied, regarding the operation of this website, the information, content, or services provided through or in connection with the website.
            </p>
  
            {/* Information Disclaimer */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Information Disclaimer
            </h2>
            <p className="text-lg mt-2">
              The information on this website is for informational purposes only and should not be construed as legal or medical advice on any subject matter. The content may contain general information and may not reflect current legal developments, medical advancements, or industry standards.
            </p>
  
            {/* No Substitute for Professional Advice */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              No Substitute for Professional Advice
            </h2>
            <p className="text-lg mt-2">
              Any information contained on this website is not intended as a substitute for professional medical or legal advice. No one should act or refrain from acting based on any content included on this site without consulting a qualified medical professional or a licensed attorney regarding specific circumstances.
            </p>
            <p className="text-lg mt-2">
              <strong>ScanXperts Pvt. Ltd.</strong> expressly disclaims all liability for actions taken or not taken based on the contents of this website.
            </p>
  
            {/* No Attorney-Client or Doctor-Patient Relationship */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              No Attorney-Client or Doctor-Patient Relationship
            </h2>
            <p className="text-lg mt-2">
              By accessing this site, you acknowledge that the information provided does not establish an attorney-client or doctor-patient relationship. This website is not intended as advertising, and <strong>ScanXperts Pvt. Ltd.</strong> does not seek to represent anyone based on their use of this website in a jurisdiction where it fails to comply with local laws and ethical rules.
            </p>
  
            {/* Warranties & Liability */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Warranties & Liability
            </h2>
            <p className="text-lg mt-2">
              <strong>ScanXperts Pvt. Ltd.</strong> provides no express or implied warranties regarding the services offered. This disclaimer is intended to ensure smooth operation and facilitate transparency regarding our services and payment processes.
            </p>
  
            {/* Contact Us */}
            <h2 className="text-xl font-semibold mt-6 text-primaryBlue">
              Contact Us
            </h2>
            <p className="text-lg mt-2">
              If you have any questions about this disclaimer, please contact us:
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
  
  export default Disclaimer;
  