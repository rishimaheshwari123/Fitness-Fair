import Image from "next/image";
import logo from "@/assets/logo.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-b ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="bg-white shadow-lg rounded-full w-32 h-32 mx-auto flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-800 mt-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            We're here to assist you. Reach out to us anytime!
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="lg:w-1/2 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.328235109365!2d77.431851!3d23.215551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425113595615%3A0x8bdb8f8c604c7bdf!2s44%2C%20E-4%2C%20Arera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e1!3m2!1sen!2sin!4v1737879416538!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Contact Details Section */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg">
            <p className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Being People Organization
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Address:</h3>
              <p className="text-lg text-gray-600 mt-1">
                E-4 /44 Arera Colony, Bhopal - 462003
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Contact:
              </h3>
              <ul className="space-y-3">
                <li className="text-lg text-gray-600">
                  <strong>Prashant Shrivastava:</strong> 9407487775
                </li>
                <li className="text-lg text-gray-600">
                  <strong>Ravi Shukla:</strong> 99811 22493
                </li>
                {/* <li className="text-lg text-gray-600">
                  <strong>Bhavna Naskar:</strong> [Your contact number]
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
