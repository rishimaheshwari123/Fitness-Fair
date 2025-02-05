import React from "react";
import ContactCom from "./ContactCom";

const Slider = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gray-900">
      {/* Background Video */}
      <video
        src="/banner1.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      ></video>

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-[90vw] max-w-6xl gap-6">
        {/* Left - Smaller Video */}
        <div className="overflow-hidden rounded-xl shadow-2xl border-4 border-gray-800">
          <video
            src="/banner1.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* Right - Contact Component */}
        <div className="flex justify-center items-center">
          <ContactCom />
        </div>
      </div>
    </div>
  );
};

export default Slider;
