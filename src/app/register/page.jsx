"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaBriefcase,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    occupation: "",
    stallCategory: "", // Additional field for Stall Booking
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting...");
    try {
      const response = await axios.post(
        "https://api.fitnessexpo.in/api/v1/contact/create",
        formData
      );
      if (!response?.data?.message) {
        throw new Error("Submission failed!");
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        occupation: "",
        stallCategory: "",
      });
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
    toast.dismiss(toastId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center contactbg">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 border-t-4 border-red-500">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-4">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Name", name: "name", type: "text", icon: <FaUser /> },
            {
              label: "Email",
              name: "email",
              type: "email",
              icon: <FaEnvelope />,
            },
            { label: "Phone", name: "phone", type: "text", icon: <FaPhone /> },
            { label: "City", name: "city", type: "text", icon: <FaCity /> },
          ].map(({ label, name, type, icon }) => (
            <div key={name} className="relative">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-red-500">
                {icon}
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-2 outline-none"
                />
              </div>
            </div>
          ))}

          <div>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none"
            >
              <option value="">Select Category</option>
              <option value="Sponsors">Sponsors</option>
              <option value="Participating">Participating</option>
              <option value="Stall Booking">Stall Booking</option>
            </select>
          </div>

          {formData.occupation === "Stall Booking" && (
            <div>
              <select
                name="stallCategory"
                value={formData.stallCategory}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none"
              >
                <option value="">Select Stall Category</option>
                <option value="Fitness">Fitness</option>
                <option value="Wellness">Wellness</option>
                <option value="Cosmetic">Cosmetic</option>
                <option value="Gym">Gym</option>
                <option value="Supplement">Supplement</option>
                <option value="Yoga">Yoga</option>
                <option value="Beauty Product">Beauty Product</option>
                <option value="Sports Cloths">Sports Cloths</option>
                <option value="University">University</option>
                <option value="Schools">Schools</option>
                <option value="Hospitals">Hospitals</option>
                <option value="Lifestyles">Lifestyles</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
