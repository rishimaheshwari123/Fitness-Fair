import React from "react";

const Sponsors = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Sponsors
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-lg font-medium text-gray-700">Supported by</div>
          <div className="text-xl font-semibold text-green-600">
            ₹3,00,000 /-
          </div>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-lg font-medium text-gray-700">
            Main Gate Side Panel
          </div>
          <div className="text-xl font-semibold text-green-600">
            ₹1,00,000 /-
          </div>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-lg font-medium text-gray-700">
            Stalls (8x6) - Gym, Yoga Centre, Fitness Club, Zumba
          </div>
          <div className="text-xl font-semibold text-green-600">₹50,000 /-</div>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-lg font-medium text-gray-700">
            Stalls (8x6) - Tea, Coffee
          </div>
          <div className="text-xl font-semibold text-green-600">₹25,000 /-</div>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-lg font-medium text-gray-700">Banners (5x3)</div>
          <div className="text-xl font-semibold text-green-600">₹10,000 /-</div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
