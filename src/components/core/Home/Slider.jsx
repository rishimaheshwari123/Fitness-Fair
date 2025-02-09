import React from "react";
import banner from "../../../assets/banner1.jpg";
import Image from "next/image";
import ContactCom from "./ContactCom";

const Slider = () => {
  return (
    <div className="relative w-full flex flex-col lg:block">
      <Image
        src={banner}
        alt="not found"
        className="w-full lg:h-[85vh] object-fill"
      />
      <div className="w-full  lg:max-w-md p- bg-white/60 shadow-lg rounded-lg mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:right-4 lg:-translate-y-1/2">
        <ContactCom />
      </div>
    </div>
  );
};

export default Slider;
