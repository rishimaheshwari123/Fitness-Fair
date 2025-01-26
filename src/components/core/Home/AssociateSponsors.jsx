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

const AssociateSponsors = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Associate Sponsors
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaBroadcastTower size={40} className="text-blue-500 mb-2" />
          <span className="text-lg font-medium">Telecommunications</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaIndustry size={40} className="text-green-500 mb-2" />
          <span className="text-lg font-medium">Telecoms Operators</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaGem size={40} className="text-yellow-500 mb-2" />
          <span className="text-lg font-medium">Jewellers</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaUsers size={40} className="text-purple-500 mb-2" />
          <span className="text-lg font-medium">Media House</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaUniversity size={40} className="text-red-500 mb-2" />
          <span className="text-lg font-medium">Institutions & Colleges</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaHotel size={40} className="text-indigo-500 mb-2" />
          <span className="text-lg font-medium">Hospitality Industry</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaPiggyBank size={40} className="text-orange-500 mb-2" />
          <span className="text-lg font-medium">Financial Institutes</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaCar size={40} className="text-red-600 mb-2" />
          <span className="text-lg font-medium">Automobile Companies</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaBolt size={40} className="text-yellow-600 mb-2" />
          <span className="text-lg font-medium">Energy Drinks</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaIndustry size={40} className="text-gray-600 mb-2" />
          <span className="text-lg font-medium">Manufacturing</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaAppleAlt size={40} className="text-green-700 mb-2" />
          <span className="text-lg font-medium">Food & Beverages</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600">
          <FaDumbbell size={40} className="text-red-700 mb-2" />
          <span className="text-lg font-medium">Fitness & Sport</span>
        </div>
      </div>
    </div>
  );
};

export default AssociateSponsors;
