import About from "@/components/core/Home/About";
import AssociateSponsors from "@/components/core/Home/AssociateSponsors";
import ChiefGuests from "@/components/core/Home/ChiefGuests";
import EventFlow from "@/components/core/Home/EventFlow";
import FitnessBrand from "@/components/core/Home/FitnessBrand";
import GallerySection from "@/components/core/Home/GallerySection";
import MediaPlan from "@/components/core/Home/MediaPlan";
import Prize from "@/components/core/Home/Prise";
import PriseFemail from "@/components/core/Home/PriseFemail";
import Slider from "@/components/core/Home/Slider";
import Sponsors from "@/components/core/Home/Sponsors";
import Swiper from "@/components/core/Home/Swipper";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Slider />
      <About />
      <div className="w-full h-[400px] relative">
        <Image
          src="/image.png"
          alt="not found"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <br />
      <EventFlow />
      <Prize />
      <PriseFemail />
      <Swiper />
      <AssociateSponsors />
      <Sponsors />
      <ChiefGuests />
      <GallerySection />
      <FitnessBrand />
      <MediaPlan />
    </div>
  );
};

export default page;
