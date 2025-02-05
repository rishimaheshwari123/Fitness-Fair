"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = "https://fitness-fair.onrender.com/api/v1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    priceCategory: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(`${BASE_URL}/contact/send`, formData);

      if (response?.data) {
        Swal.fire({
          title: "Good job!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
      }
      setFormData({
        name: "",
        email: "",
        contact: "",
        dob: "",
        priceCategory: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message. Please try again later.",
        icon: "error",
      });
    }
  };

  if (!isClient) {
    return null;
  }
  return (
    <div className="pt-[87px] w-11/12 mx-auto">
      <iframe
        title="rishi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.328235109365!2d77.431851!3d23.215551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425113595615%3A0x8bdb8f8c604c7bdf!2s44%2C%20E-4%2C%20Arera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e1!3m2!1sen!2sin!4v1737879416538!5m2!1sen!2sin"
        allowFullScreen
        className="w-full h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" grid gap-4 main lg:grid lg:grid-cols-2 my-36 items-center">
        <div className="first flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="px-4 py-3 bg-yellow-500 rounded-md text-xl">
              <FaLocationDot />
            </span>
            <span>E-4 /44 Arera Colony, Bhopal - 462003</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-4 py-3 bg-yellow-500 rounded-md  text-xl">
              <FaPhone />
            </span>
            <span>
              {" "}
              <strong>Prashant Shrivastava:</strong> 9407487775
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-3 bg-yellow-500 rounded-md  text-xl">
              <FaPhone />
            </span>
            <strong>Ravi Shukla:</strong> 99811 22493
          </div>
        </div>
        <form className="second flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Enter your phone "
            className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <div className="relative">
            <label className="absolute top-3 left-3  text-gray-500">
              Date Of Birth
            </label>
            <input
              type="date"
              className="p-3 outline-none h-14 border mt-6 border-gray-300 bg-transparent w-full "
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {/* Price Category Dropdown */}
          <select
            name="priceCategory"
            className="p-3 outline-none h-14 border border-gray-300 bg-transparent w-full"
            value={formData.priceCategory}
            onChange={handleChange}
          >
            <option value="">Select Price Category</option>
            <option value="Womens fitness Champions Trophy - 1500">
              Womens fitness Champions Trophy - ₹1500
            </option>
            <option value="Womens fitness Award - 1000">
              Womens fitness Award - ₹1000
            </option>
            <option value="Madhya Pradesh fitness Champions Trophy (mens) - 2000">
              Madhya Pradesh fitness Champions Trophy (mens) - ₹2000
            </option>
            <option value="Mens Fitness Award - 1000">
              Mens Fitness Award - ₹1000
            </option>
            <option value="Cycling Competition - 500">
              Cycling Competition - ₹500
            </option>
            <option value="Boxing Competition - 500">
              Boxing Competition - ₹500
            </option>
            <option value="Squad Games Competition - 500">
              Squad Games Competition - ₹500
            </option>
            <option value="Karate Competition - 500">
              Karate Competition - ₹500
            </option>
            <option value="Badminton Competition - 500">
              Badminton Competition - ₹500
            </option>
          </select>
          <textarea
            className="p-3 outline-none h-28 border border-gray-300 bg-transparent"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className=" px-5 bg-yellow-500 text-white py-2 rounded-md text-center text-xl  mt-5 contact-btn
          "
          >
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
