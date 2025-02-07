import React from "react";
import {
  FaCut,
  FaBuilding,
  FaHandshake,
  FaUserMd,
  FaRegNewspaper,
} from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";

const EventFlow = () => {
  return (
    <div>
      <p className="text-center font-bold text-2xl md:text-3xl mb-6">
        Event Flow
      </p>
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Card for 20 Dec 2025 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8 March 2025
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaCut size={20} className="text-blue-500" />
              <span>Event Ribbon Cut by the Guest</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaBuilding size={20} className="text-green-500" />
              <span>Exhibition Visit</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaRegNewspaper size={20} className="text-orange-500" />
              <span>Seminar</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUserMd size={20} className="text-red-500" />
              <span>How to Fit Expert View</span>
            </li>
            <li className="flex items-center space-x-3">
              <IoFitnessOutline size={20} className="text-purple-500" />
              <span>Product Introduction and Presentation</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaHandshake size={20} className="text-teal-500" />
              <span>Being People Fitness Award</span>
            </li>
          </ul>
        </div>

        {/* Card for 21 Dec 2025 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9 March 2025
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaBuilding size={20} className="text-green-500" />
              <span>Guest Visit</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaBuilding size={20} className="text-green-500" />
              <span>Exhibition Event</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaRegNewspaper size={20} className="text-orange-500" />
              <span>Seminar</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUserMd size={20} className="text-red-500" />
              <span>How to Fit, Wellness Expert View</span>
            </li>
            <li className="flex items-center space-x-3">
              <IoFitnessOutline size={20} className="text-purple-500" />
              <span>Product Introduction and Presentation</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaHandshake size={20} className="text-teal-500" />
              <span>Being People Fitness Award</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaBuilding size={20} className="text-yellow-500" />
              <span>Madhya Pradesh Bodybuilding Competition</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventFlow;
