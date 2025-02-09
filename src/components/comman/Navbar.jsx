"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import logo from "@/assets/logo.png";
import TopHeader from "./TopBar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiMaplibre } from "react-icons/si";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Event", to: "/event" },
    { name: "Sponsorship", to: "/sponsorship" },
    { name: "Stall Booking", to: "/stall" },
    { name: "Contact", to: "/contact" },
    { name: "Registration Form", to: "/register" },
  ];

  return (
    <>
      <div className="w-full bg-white text-black shadow-lg fixed top-0 left-0 z-50 h-[120px]">
        <TopHeader />
        {/* Desktop Navbar */}
        <Fade direction="down" triggerOnce>
          <div className="hidden sm:flex justify-between max-w-7xl mx-auto items-center px-6 py-">
            <Zoom triggerOnce>
              <Link href="/" className="text-xl">
                <Image
                  src={logo}
                  className="w-48 transition-transform duration-300 hover:scale-110"
                  alt="Logo"
                />
              </Link>
            </Zoom>
            <div className="flex space-x-6 items-center">
              {links.map((link, index) => (
                <Slide
                  direction="down"
                  triggerOnce
                  key={index}
                  delay={index * 100}
                >
                  <Link
                    href={link.to}
                    className="hover:text-[#800080] text-[17px] font-semibold transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </Slide>
              ))}
            </div>
          </div>
        </Fade>

        {/* Mobile Navbar */}
        <div className="sm:hidden bg-white flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Link href="/" className="text-xl">
            <Image
              src={logo}
              className="w-36 transition-transform duration-300 hover:scale-110"
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="transition-all duration-300"
          >
            {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Sidebar for Small Devices */}
        <div
          className={`fixed top-0 left-0 w-64 h-screen bg-red-500 shadow-lg z-50 transition-transform duration-500 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <Image src={logo} className="w-32" alt="Logo" />
            <button onClick={() => setIsSidebarOpen(false)}>
              <FaTimes size={28} />
            </button>
          </div>
          <div className="px-6 py-4">
            {links.map((link, index) => (
              <Fade direction="up" triggerOnce key={index} delay={index * 100}>
                <Link
                  href={link.to}
                  className="block mb-4 hover:text-gray-600 text-lg font-medium"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              </Fade>
            ))}
          </div>
          <div className="flex space-x-4 pl-10">
            <Link
              href="https://www.facebook.com/share/p/1EUJERQCPa/?mibextid=oFDknk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.instagram.com/fitnessexpoindia?igsh=MTZ4YmxsOWd0YXJ3MQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@rkshomes5376"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Map"
            >
              <SiMaplibre
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
          </div>
        </div>

        {/* Overlay (Fix for Sidebar Click Issue) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
