import React from "react";
import { FaDumbbell, FaLeaf, FaRunning, FaClinicMedical } from "react-icons/fa";

const FitnessBrand = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Fitness and Health Brands
        </h1>

        {/* Supplements Companies Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6 rounded-lg shadow-xl flex items-center">
            <FaLeaf className="text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Supplements Companies</h2>
              <ul className="space-y-2 mt-2">
                <li>MuscleBlaze</li>
                <li>HealthKart</li>
                <li>ON (Optimum Nutrition)</li>
                <li>MyProtein</li>
                <li>BigMuscles Nutrition</li>
              </ul>
            </div>
          </div>

          {/* Fitness Equipment Brands Card */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-xl flex items-center">
            <FaDumbbell className="text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">
                Fitness Equipment Brands
              </h2>
              <ul className="space-y-2 mt-2">
                <li>Decathlon</li>
                <li>Fitness World</li>
                <li>Afton Fitness Equipment</li>
                <li>Kobo Sports</li>
              </ul>
            </div>
          </div>

          {/* Gyms and Fitness Studios Card */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg shadow-xl flex items-center">
            <FaRunning className="text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">
                Gyms and Fitness Studios
              </h2>
              <ul className="space-y-2 mt-2">
                <li>Gold’s Gym</li>
                <li>Cult.Fit</li>
                <li>Anytime Fitness</li>
                <li>Talwalkars</li>
              </ul>
            </div>
          </div>

          {/* Health and Wellness Startups Card */}
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-6 rounded-lg shadow-xl flex items-center">
            <FaClinicMedical className="text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">
                Health and Wellness Startups
              </h2>
              <ul className="space-y-2 mt-2">
                <li>Cure.fit</li>
                <li>HealthifyMe</li>
                <li>Fittr</li>
                <li>Practo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessBrand;
