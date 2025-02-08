import React from "react";
import {
  FaIndustry,
  FaBroadcastTower,
  FaGem,
  FaUsers,
  FaUniversity,
  FaHotel,
  FaPiggyBank,
  FaCar,
  FaBolt,
  FaAppleAlt,
  FaDumbbell,
} from "react-icons/fa";

const sponsors = [
  { icon: <FaBroadcastTower />, label: "Telecommunications", color: "text-blue-500" },
  { icon: <FaIndustry />, label: "Telecoms Operators", color: "text-green-500" },
  { icon: <FaGem />, label: "Jewellers", color: "text-yellow-500" },
  { icon: <FaUsers />, label: "Media House", color: "text-purple-500" },
  { icon: <FaUniversity />, label: "Institutions & Colleges", color: "text-red-500" },
  { icon: <FaHotel />, label: "Hospitality Industry", color: "text-indigo-500" },
  { icon: <FaPiggyBank />, label: "Financial Institutes", color: "text-orange-500" },
  { icon: <FaCar />, label: "Automobile Companies", color: "text-red-600" },
  { icon: <FaBolt />, label: "Energy Drinks", color: "text-yellow-600" },
  { icon: <FaIndustry />, label: "Manufacturing", color: "text-gray-600" },
  { icon: <FaAppleAlt />, label: "Food & Beverages", color: "text-green-700" },
  { icon: <FaDumbbell />, label: "Fitness & Sport", color: "text-red-700" },
];

const AssociateSponsors = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">
        Our Associate Sponsors
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-indigo-100 hover:text-indigo-800"
          >
            <div className={`${sponsor.color} text-4xl mb-3`}>{sponsor.icon}</div>
            <span className="text-lg font-medium text-center">{sponsor.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociateSponsors;
