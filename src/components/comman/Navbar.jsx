"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
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
    <div className="lg:top-11 left-0 w-full bg-white text-black z-50 py-1  shadow">
      <div className="hidden sm:flex justify-between max-w-7xl mx-auto items-center px-6  py-1 border-gray-200">
        <Link href="/" className="text-xl">
          <Image src={logo} className="w-52" alt="not found" />
        </Link>
        <div className="flex space-x-6 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.to || "#"}
              className=" hover:text-[#800080] text-[17px] font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Hamburger Menu for Small Devices */}
      <div className="sm:hidden flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <Link href="/" className="text-xl">
          <Image src={logo} className="w-52" alt="not found" />
        </Link>{" "}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar for Small Devices */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <Link href="/">Fitness Fair</Link>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>
            <div className="px-6 py-4">
              {/* Render links */}
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.to || "#"}
                  className="block mb-4 hover:text-gray-600"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
