"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = "https://api.fitnessexpo.in/api/v1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    priceCategory: "",
    price: "",
    size: "",
    message: "",
  });


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "priceCategory") {
      const [category, priceValue] = value.split(" - ");
      setFormData({
        ...formData,
        priceCategory: category,
        price: priceValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        id: "",
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
    <div className=" w-11/12 mx-auto">


      <div className=" grid gap-4 main lg:grid lg:grid-cols-2 items-center">
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
             9202909715
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-3 bg-yellow-500 rounded-md  text-xl">
              <FaPhone />
            </span>
        99811 22493
          </div>
        </div>
       <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg min-h-full">
            <h2 className="text-center text-2xl font-bold text-red-500 mb-4">
              Contact Form
            </h2>
      
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute top-4 left-3 text-red-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="pl-10 p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
      
              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-3 text-red-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="pl-10 p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
      
              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute top-4 left-3 text-red-500" />
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter your phone"
                  className="pl-10 p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
      
              {/* Date of Birth */}
              <div className="relative">
                <FaCalendarAlt className="absolute top-4 left-3 text-red-500" />
                <input
                  type="date"
                  name="dob"
                  className="pl-10 p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
      
              {/* Price Category & T-Shirt Size (Same Line) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <MdCategory className="absolute top-4 left-3 text-red-500" />
                  <select
                    name="priceCategory"
                    className="pl-10 p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                    value={`${formData.priceCategory} - ${formData.price}`}
                    onChange={handleChange}
                  >
                    <option value="">Select Price</option>
                    <option value="Womens fitness Champions Trophy - 1500">Womens fitness Champions Trophy - ₹1500</option>
                    <option value="Womens fitness Award - 1000">Womens fitness Award - ₹1000</option>
                    <option value="Madhya Pradesh fitness Champions Trophy (mens) - 2000">
                      Madhya Pradesh fitness Champions Trophy (mens) - ₹2000
                    </option>
                    <option value="Mens Fitness Award - 1000">Mens Fitness Award - ₹1000</option>
                    <option value="Cycling Competition - 500">Cycling Competition - ₹500</option>
                  </select>
      
                  {formData.price && (
                  <span className="block mt-2 text-red-600 font-semibold">
                    Price: ₹{formData.price}
                  </span>
                )}
                </div>
      
                {/* T-Shirt Size */}
                <div>
                  <select
                    name="size"
                    className="p-3 outline-none h-12 border border-gray-300 rounded-lg w-full focus:border-red-500 focus:shadow-lg"
                    value={formData.size}
                    onChange={handleChange}
                  >
                    <option value="">Select Size</option>
                    <option value="S">S (Small)</option>
                    <option value="M">M (Medium)</option>
                    <option value="L">L (Large)</option>
                    <option value="XL">XL (Extra Large)</option>
                    <option value="XXL">XXL (Double Extra Large)</option>
                    <option value="XXXL">XXXL (Triple Extra Large)</option>
                  </select>
                </div>
              </div>
      
              
      
              {/* Submit Button */}
              <button
                type="submit"
                className="px-5 py-3 bg-red-500 text-white rounded-lg w-full text-lg font-semibold hover:bg-red-600 shadow-lg transition-all"
              >
                Send Message!
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
