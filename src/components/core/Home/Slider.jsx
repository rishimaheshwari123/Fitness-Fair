import React from "react";
import banner from "@/assets/banner.jpg";
import Image from "next/image";
import ContactCom from "./ContactCom";

const Slider = () => {
  return (
    <div className="relative w-full">
      <Image src={banner} alt="not found" className="w-full h-auto" />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-full max-w-xs p-4 bg-white shadow-lg rounded-lg lg:max-w-sm">
        <ContactCom />
      </div>
    </div>
  );
};

export default Slider;
