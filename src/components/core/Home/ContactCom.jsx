"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "https://fitness-fair.onrender.com/api/v1";

const ContactCom = () => {
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
    <div className="w-11/12 mx-auto">
      <div className="grid gap-4 my-5 items-center">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name & Email - Adjusts to single column on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 outline-none h-14 border border-gray-300 bg-transparent w-full"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 outline-none h-14 border border-gray-300 bg-transparent w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            placeholder="Enter your phone"
            className="p-3 outline-none h-14 border border-gray-300 bg-transparent w-full"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />

          {/* Date of Birth Field */}
          <input
            type="date"
            className="p-3 outline-none h-14 border border-gray-300 bg-transparent w-full"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

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
            className="p-3 outline-none h-28 border border-gray-300 bg-transparent w-full"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="px-5 bg-yellow-500 text-white py-3 rounded-md text-center text-lg w-full"
          >
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCom;
