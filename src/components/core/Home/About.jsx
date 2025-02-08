"use client";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

export default function About() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const toggleVideoSize = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12 max-w-7xl mx-auto relative">
      {/* Text Section */}
      <div
        className={`transition-opacity duration-300 ${
          isVideoExpanded ? "opacity-30" : "opacity-100"
        }`}
      >
        <p className="text-2xl font-bold uppercase text-red-600 mb-4 text-center lg:text-left">
          Being Fit is not a fashion or trend.
          <br />
          <span className="text-cyan-500">It’s a Way of Life</span>
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Fitness & Lifestyle Expo 2025, the biggest fitness & wellness festival
          of Central India, is set to take Bhopal by storm. The stage is set,
          and this grand event is ready to amaze you!
        </p>

        <p className="text-gray-600 leading-relaxed">
          The event aims to inspire people in fitness and wellness, raise
          awareness about health, and share cutting-edge technologies and
          solutions. It will feature renowned experts, athletes, fitness brands,
          and young enthusiasts from across the country.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔️ Madhya Pradesh Bodybuilding Championship (MPBCT)</li>
          <li>✔️ Female Fitness Award Show</li>
          <li>✔️ Fitness & Wellness Seminars</li>
          <li>✔️ Exhibition & Product Launches</li>
          <li>✔️ Interactive Fitness Challenges & Live Demonstrations</li>
        </ul>
      </div>

      {/* Video Section */}
      <div
        className={`flex justify-center items-center cursor-pointer transition-all duration-500 ${
          isVideoExpanded ? "fixed inset-0 bg-black bg-opacity-50 z-50" : ""
        }`}
      >
        <div
          className={`relative w-full max-w-lg rounded-lg overflow-hidden shadow-lg transition-transform ${
            isVideoExpanded ? "w-[90vw] md:w-[80vw] lg:w-[60vw]" : "h-[66vh]"
          }`}
          onClick={toggleVideoSize}
        >
          <video
            src="/banner2.mp4"
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <FaPlayCircle className="text-white text-5xl opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Background Blur Overlay */}
      {isVideoExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleVideoSize}
        ></div>
      )}
    </div>
  );
}
