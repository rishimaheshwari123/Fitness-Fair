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
      setFormData({ name: "", email: "", contact: "", message: "" });
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
      <div className=" grid gap-4 main  my-5 items-center">
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

export default ContactCom;
