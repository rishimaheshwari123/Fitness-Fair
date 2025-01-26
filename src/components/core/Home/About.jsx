"use client";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

export default function About() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const toggleVideoSize = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto relative">
      <div
        className={`text-center lg:text-left ${isVideoExpanded ? "blur" : ""}`}
      >
        <p className="text-4xl font-bold mb-4">
          Being Fit is not a fashion or trend… it’s a Way of Life
        </p>

        <p className="text-lg mb-4">
          Fitness Fair 2025 – BIGGER Than Ever. The Biggest Fitness & Wellness
          Festival of Central India is set to take Bhopal by storm… The stage is
          set. FITNESS FAIR 2025 is ready to blow you away. The game just got
          bigger and better.
        </p>
        <p className="text-lg mb-4">
          The total retail market for fitness is estimated to cross Rs. 20,000
          Cr. Don't miss it!
        </p>
        <p className="text-lg">
          Madhya Pradesh Bodybuilding Competition (MPBC) & Female Fitness Award
          Show is an extraordinary competition. It’s a fiesta of Bodybuilding &
          Fitness.
        </p>
      </div>

      <div
        className={`flex justify-center items-center cursor-pointer ${
          isVideoExpanded ? "fixed inset-0 bg-black bg-opacity-50 z-50" : ""
        }`}
      >
        <div
          className={`relative w-full max-w-lg ${
            isVideoExpanded ? "w-[80vw] " : "h-[66vh]"
          }`}
          onClick={toggleVideoSize}
        >
          <video
            src="/banner2.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute bottom-4 right-4 text-white text-3xl cursor-pointer">
            <FaPlayCircle />
          </div>
        </div>
      </div>

      {/* Background Blur Effect */}
      {isVideoExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={toggleVideoSize}
        ></div>
      )}
    </div>
  );
}
