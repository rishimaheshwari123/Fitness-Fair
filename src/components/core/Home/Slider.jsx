import React from "react";
import banner from "@/assets/banner.jpg";
import Image from "next/image";
import ContactCom from "./ContactCom";

const Slider = () => {
  return (
    <div className="relative w-full flex flex-col lg:block">
      <Image src={banner} alt="not found" className="w-full h-auto" />
      <div className="w-full  lg:max-w-md p-4 bg-white shadow-lg rounded-lg mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:right-4 lg:-translate-y-1/2">
        <ContactCom />
      </div>
    </div>
  );
};

export default Slider;
