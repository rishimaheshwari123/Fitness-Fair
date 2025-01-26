import React from "react";

const Slider = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-900 relative">
      <div className="absolute inset-0 z-0">
        <video
          src="/banner1.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover blur-sm"
        ></video>
      </div>

      <div className="relative z-10 w-[90vw] max-w-lg aspect-[9/16] overflow-hidden rounded-xl shadow-2xl border-4 border-gray-800">
        <video
          src="/banner1.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Slider;
