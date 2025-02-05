import React from "react";
import ContactCom from "./ContactCom";

const Slider = () => {
  return (
    <div className="relative max-h-[70vh] flex justify-center items-center bg-gray-900">
      {/* Background Video */}
      <video
        src="/banner1.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      ></video>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-[90vw] max-w-7xl gap-6 items-center">
        <div className="overflow-hidden hidden lg:block h-[70vh] rounded-xl shadow-2xl border-4 border-gray-800">
          <video
            src="/banner1.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

        <div className="flex justify-center items-center h-fit rounded-lg bg-white">
          <ContactCom />
        </div>
      </div>
    </div>
  );
};

export default Slider;
