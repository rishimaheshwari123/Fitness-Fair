import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={logo}
              alt="Event Logo"
              className="h-16 w-auto mb-4 filter drop-shadow-lg"
            />
            <p className="text-gray-400 max-w-xs">
              Join the ultimate fitness experience! 🏋️‍♂️🔥
            </p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/register"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Register Now
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              Contact
            </h3>
            <p className="text-gray-400">
              📍 E-4 /44 Arera Colony, Bhopal - 462003
            </p>
            <p className="text-gray-400">📞 +91 9407487775, +91 9981122493 </p>
            <p className="text-gray-400">📧 fitnessexpoindia@gmail.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/p/1EUJERQCPa/?mibextid=oFDknk"
                className="text-blue-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/fitnessexpoindia?igsh=MTZ4YmxsOWd0YXJ3MQ=="
                className="text-pink-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-blue-400 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-red-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-yellow-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 Fitness & Lifestyle Expo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
