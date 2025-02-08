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
    <div>
      <p className="text-center text-red-500 font-bold text-2xl md:text-3xl mb-6">
        Event Flow
      </p>
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Card for 8 March 2025 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl text-red-500 text-center font-semibold  mb-4">
            8 March 2025
          </h2>
          <ul className="space-y-4">
            {[
              {
                icon: <GrRestroomWomen size={20} className="text-blue-500" />,
                text: "Zumba Session",
              },
              {
                icon: <IoIosBicycle size={20} className="text-blue-500" />,
                text: "Cycle Marathon",
              },
              {
                icon: <FaCut size={20} className="text-blue-500" />,
                text: "Event Ribbon Cut by the Guest",
              },
              {
                icon: <FaBuilding size={20} className="text-green-500" />,
                text: "Exhibition Visit",
              },
              {
                icon: <FaRegNewspaper size={20} className="text-orange-500" />,
                text: "Seminar",
              },
              {
                icon: <FaUserMd size={20} className="text-red-500" />,
                text: "How to Fit Expert View",
              },
              {
                icon: (
                  <IoFitnessOutline size={20} className="text-purple-500" />
                ),
                text: "Product Introduction and Presentation",
              },
              {
                icon: <FaHandshake size={20} className="text-teal-500" />,
                text: "Being People Fitness Award",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg transition-transform duration-300 hover:bg-gray-100 hover:scale-105"
              >
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card for 9 March 2025 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl text-red-500 text-center font-semibold  mb-4">
            9 March 2025
          </h2>
          <ul className="space-y-4">
            {[
              {
                icon: <GrRestroomWomen size={20} className="text-blue-500" />,
                text: "Zumba Session",
              },
              {
                icon: <IoIosBicycle size={20} className="text-blue-500" />,
                text: "Cycle Marathon",
              },
              {
                icon: <FaBuilding size={20} className="text-green-500" />,
                text: "Guest Visit",
              },
              {
                icon: <FaBuilding size={20} className="text-green-500" />,
                text: "Exhibition Event",
              },
              {
                icon: <FaRegNewspaper size={20} className="text-orange-500" />,
                text: "Seminar",
              },
              {
                icon: <FaUserMd size={20} className="text-red-500" />,
                text: "How to Fit, Wellness Expert View",
              },
              {
                icon: (
                  <IoFitnessOutline size={20} className="text-purple-500" />
                ),
                text: "Product Introduction and Presentation",
              },
              {
                icon: <FaHandshake size={20} className="text-teal-500" />,
                text: "Being People Fitness Award",
              },
              {
                icon: <FaBuilding size={20} className="text-yellow-500" />,
                text: "Madhya Pradesh Bodybuilding Competition",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg transition-transform duration-300 hover:bg-gray-100 hover:scale-105"
              >
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventFlow;
