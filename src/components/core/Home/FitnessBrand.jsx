import React from "react";
import { FaDumbbell, FaLeaf, FaRunning, FaClinicMedical } from "react-icons/fa";
import Link from "next/link";

const FitnessBrand = () => {
  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="container mx-auto text-center">
        <h1 className="lg:text-4xl text-2xl font-extrabold text-white mb-10 tracking-widest uppercase">
          Fitness & Health Revolution
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Supplements",
              icon: <FaLeaf className="text-6xl text-green-400 drop-shadow-lg" />,
              brands: ["MuscleBlaze", "HealthKart", "ON", "MyProtein"],
              gradient: "from-green-500 to-teal-400",
              glow: "shadow-green-500/50",
            },
            {
              title: "Equipment",
              icon: <FaDumbbell className="text-6xl text-blue-400 drop-shadow-lg" />,
              brands: ["Decathlon", "Fitness World", "Afton", "Kobo Sports"],
              gradient: "from-blue-500 to-indigo-500",
              glow: "shadow-blue-500/50",
            },
            {
              title: "Gyms & Studios",
              icon: <FaRunning className="text-6xl text-orange-400 drop-shadow-lg" />,
              brands: ["Gold's Gym", "Cult.Fit", "Anytime Fitness"],
              gradient: "from-orange-500 to-red-500",
              glow: "shadow-orange-500/50",
            },
            {
              title: "Health Startups",
              icon: <FaClinicMedical className="text-6xl text-pink-400 drop-shadow-lg" />,
              brands: ["Cure.fit", "HealthifyMe", "Fittr"],
              gradient: "from-pink-500 to-purple-500",
              glow: "shadow-pink-500/50",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative h-[30vh] bg-gradient-to-r ${item.gradient} text-white p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 ${item.glow} shadow-xl flex flex-col items-center justify-center border border-white/10 backdrop-blur-lg bg-opacity-90`}
            >
              <div className="absolute inset-0 bg-white opacity-10 blur-2xl rounded-2xl"></div>
              <div className="relative flex flex-col items-center">
                {item.icon}
                <h2 className="text-xl font-bold mt-3 uppercase tracking-wide">{item.title}</h2>
                <ul className="mt-2 text-sm font-medium space-y-1 text-gray-900">
                  {item.brands.map((brand, i) => (
                    <li key={i} className="opacity-80 hover:opacity-100 transition">
                      {brand}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-4 px-5 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-200"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessBrand;
