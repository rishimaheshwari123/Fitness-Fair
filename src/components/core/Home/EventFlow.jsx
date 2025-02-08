import React from "react";
import {
  FaCut,
  FaBuilding,
  FaHandshake,
  FaUserMd,
  FaRegNewspaper,
} from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { IoIosBicycle } from "react-icons/io";

const EventFlow = () => {
  return (
    <div className="bg-gradient-to-b from-red-700 to-red-900/60  text-white py-12 px-4">
      <h2 className="text-center text-white font-extrabold text-3xl md:text-4xl mb-10">
        Event Flow
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Card for 8 March 2025 */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-6 w-full lg:w-1/2 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl text-red-700 text-center font-bold mb-6">
            8 March 2025
          </h3>
          <ul className="space-y-2">
            {[
              {
                icon: <GrRestroomWomen size={24} className="text-blue-500" />,
                text: "Zumba Session",
              },
              {
                icon: <IoIosBicycle size={24} className="text-blue-500" />,
                text: "Cycle Marathon",
              },
              {
                icon: <FaCut size={24} className="text-blue-500" />,
                text: "Event Ribbon Cut by the Guest",
              },
              {
                icon: <FaBuilding size={24} className="text-green-500" />,
                text: "Exhibition Visit",
              },
              {
                icon: <FaRegNewspaper size={24} className="text-orange-500" />,
                text: "Seminar",
              },
              {
                icon: <FaUserMd size={24} className="text-red-500" />,
                text: "How to Fit Expert View",
              },
              {
                icon: (
                  <IoFitnessOutline size={24} className="text-purple-500" />
                ),
                text: "Product Introduction and Presentation",
              },
              {
                icon: <FaHandshake size={24} className="text-teal-500" />,
                text: "Being People Fitness Award",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg transition-transform duration-300 hover:bg-red-200 hover:scale-105"
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card for 9 March 2025 */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-6 w-full lg:w-1/2 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl text-red-700 text-center font-bold mb-6">
            9 March 2025
          </h3>
          <ul className="space-y-2">
            {[
              {
                icon: <GrRestroomWomen size={24} className="text-blue-500" />,
                text: "Zumba Session",
              },
              {
                icon: <IoIosBicycle size={24} className="text-blue-500" />,
                text: "Cycle Marathon",
              },
              {
                icon: <FaBuilding size={24} className="text-green-500" />,
                text: "Guest Visit",
              },
              {
                icon: <FaBuilding size={24} className="text-green-500" />,
                text: "Exhibition Event",
              },
              {
                icon: <FaRegNewspaper size={24} className="text-orange-500" />,
                text: "Seminar",
              },
              {
                icon: <FaUserMd size={24} className="text-red-500" />,
                text: "How to Fit, Wellness Expert View",
              },
              {
                icon: (
                  <IoFitnessOutline size={24} className="text-purple-500" />
                ),
                text: "Product Introduction and Presentation",
              },
              {
                icon: <FaHandshake size={24} className="text-teal-500" />,
                text: "Being People Fitness Award",
              },
              {
                icon: <FaBuilding size={24} className="text-yellow-500" />,
                text: "Madhya Pradesh Bodybuilding Competition",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg transition-transform duration-300 hover:bg-red-200 hover:scale-105"
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventFlow;
