"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    occupation: "",
    areaOfIntrest: [],
    FitenssGoal: [],
    serviceBefoure: [],
    intrested: "",
    hereAbout: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" || type === "radio") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "select-multiple") {
      setFormData({
        ...formData,
        [name]: [...e.target.selectedOptions].map((option) => option.value),
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
    const toastId = toast.loading("Loading...");

    const dataToSubmit = {
      ...formData,
      areaOfIntrest: JSON.stringify(formData.areaOfIntrest),
      FitenssGoal: JSON.stringify(formData.FitenssGoal),
      serviceBefoure: JSON.stringify(formData.serviceBefoure),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/contact/create",
        dataToSubmit
      );
      if (!response?.data?.message) {
        throw new Error(toast.success(response?.data?.message));
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        age: "",
        occupation: "",
        areaOfIntrest: [],
        FitenssGoal: [],
        serviceBefoure: [],
        intrested: "",
        hereAbout: "",
        consent: false,
      });

      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      return toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };

  return (
    <div>
      <p className="font-bold text-center text-2xl mt-5 p-5">
        Fitness Expo Visitor Registration Form
      </p>
      <p className="mt-5 max-w-7xl mx-auto p-5">
        This form is designed for visitors to fill out upon entry, either on a
        tablet or online. It will gather essential information to create a
        detailed database for sponsors.
      </p>
      <p className="mt-5 max-w-7xl mx-auto p-5">
        Welcome to the Fitness Expo 2025! Please fill out the form to complete
        your registration and help us understand your interests better. Your
        information will also be shared with our sponsors to provide you with
        relevant updates and offers
      </p>
      <div className="container mx-auto p-4">
        <p className="text-3xl font-bold text-center">Registration Form </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium">
              Age Group
            </label>
            <select
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Age Group</option>
              <option value="Below 18">Below 18</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45+">45+</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="occupation" className="block text-sm font-medium">
              Occupation
            </label>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Fitness Trainer/Coach">
                Fitness Trainer/Coach
              </option>
              <option value="Influencer">Influencer</option>
              <option value="Other">Other (Specify)</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="areaOfIntrest"
              className="block text-sm font-medium"
            >
              Interest Areas
            </label>
            <select
              id="areaOfIntrest"
              name="areaOfIntrest"
              multiple
              value={formData.areaOfIntrest}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Healthcare">
                Healthcare (e.g., diagnostic centers, medical startups)
              </option>
              <option value="Health Insurance Plans">
                Health Insurance Plans
              </option>
              <option value="Gyms and Fitness Studios">
                Gyms and Fitness Studios
              </option>
              <option value="Supplements and Protein Products">
                Supplements and Protein Products
              </option>
              <option value="Fitness Equipment and Wearables">
                Fitness Equipment and Wearables
              </option>
              <option value="Diet and Nutrition Services">
                Diet and Nutrition Services
              </option>
              <option value="Yoga and Wellness Programs">
                Yoga and Wellness Programs
              </option>
              <option value="Others">Others (Specify)</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="FitenssGoal" className="block text-sm font-medium">
              Fitness Goals
            </label>
            <select
              id="FitenssGoal"
              name="FitenssGoal"
              multiple
              value={formData.FitenssGoal}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Building">Muscle Building</option>
              <option value="Improved Flexibility">Improved Flexibility</option>
              <option value="General Health and Wellness">
                General Health and Wellness
              </option>
              <option value="Recovery from Injury or Medical Conditions">
                Recovery from Injury or Medical Conditions
              </option>
              <option value="Sports Performance">Sports Performance</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="serviceBefoure"
              className="block text-sm font-medium"
            >
              Have You Used These Services Before?
            </label>
            <select
              id="serviceBefoure"
              name="serviceBefoure"
              multiple
              value={formData.serviceBefoure}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Supplements/Protein Shakes">
                Supplements/Protein Shakes
              </option>
              <option value="Gym Memberships">Gym Memberships</option>
              <option value="Health Insurance Plans">
                Health Insurance Plans
              </option>
              <option value="Healthcare Services">Healthcare Services</option>
              <option value="Medical Startups or Digital Health Platforms">
                Medical Startups or Digital Health Platforms
              </option>
              <option value="Other">Other (Specify)</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="intrested" className="block text-sm font-medium">
              Are You Interested in Receiving Offers or Updates?
            </label>
            <select
              id="intrested"
              name="intrested"
              value={formData.intrested}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="hereAbout" className="block text-sm font-medium">
              How Did You Hear About This Expo?
            </label>
            <select
              id="hereAbout"
              name="hereAbout"
              value={formData.hereAbout}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Social Media">Social Media</option>
              <option value="Online Ads">Online Ads</option>
              <option value="Friends/Word of Mouth">
                Friends/Word of Mouth
              </option>
              <option value="Gyms/Studios">Gyms/Studios</option>
              <option value="Email/SMS Invite">Email/SMS Invite</option>
              <option value="Others">Others (Specify)</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="consent" className="inline-flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mr-2"
              />
              I consent to my information being shared with sponsors and
              exhibitors for personalized offers and updates.
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
