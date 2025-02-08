import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiMaplibre } from "react-icons/si";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const TopHeader = () => {
  return (
    <>
      {/* Desktop Header */}
      <Fade direction="right" triggerOnce>
        <div className="bg-yellow-300 text-gray-800 p-3 hidden md:block h-[50px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 px-4">
            <div className="flex flex-wrap items-center space-x-6">
              <Zoom triggerOnce>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-xl text-red-600 animate-pulse" />
                  <span className="font-semibold">Bhopal</span>
                </div>
              </Zoom>
              <Zoom triggerOnce delay={100}>
                <div className="hidden md:flex items-center space-x-2">
                  <FiPhone className="text-xl text-green-600" />
                  <a href="tel:919981122493" className="font-semibold hover:underline">
                    +91 9981122493
                  </a>
                </div>
              </Zoom>
              <Zoom triggerOnce delay={200}>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-xl text-blue-600" />
                  <a href="mailto:fitnessexpoindia@gmail.com" className="font-semibold hover:underline">
                    fitnessexpoindia@gmail.com
                  </a>
                </div>
              </Zoom>
            </div>

            <div className="flex space-x-4">
              {[{ Icon: FaFacebook, color: "text-blue-600" }, { Icon: FaInstagram, color: "text-pink-600" }, { Icon: FaYoutube, color: "text-red-600" }, { Icon: SiMaplibre, color: "text-green-600" }].map(({ Icon, color }, index) => (
                <Zoom key={index} triggerOnce delay={index * 100}>
                  <Link href="#" aria-label="Social Link">
                    <Icon size={22} className={`${color} hover:scale-125 transition-transform duration-300`} />
                  </Link>
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* Mobile Header */}
      <div className="bg-yellow-300 text-black p-4 md:hidden">
        <div className="flex flex-wrap items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-xl text-red-600 animate-pulse" />
            <span className="font-semibold">Bhopal</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-xl text-blue-600" />
            <a href="mailto:fitnessexpoindia@gmail.com" className="font-semibold hover:underline">
              Email Us
            </a>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-xl text-green-600" />
            <a href="tel:919981122493" className="font-semibold hover:underline">9981122493</a>
          </div>
          <div className="flex space-x-4">
            {[FaFacebook, FaInstagram, FaYoutube, SiMaplibre].map((Icon, index) => (
              <Zoom key={index} triggerOnce delay={index * 100}>
                <Link href="#" aria-label="Social Link">
                  <Icon size={22} className="hover:scale-125 transition-transform duration-300" />
                </Link>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
