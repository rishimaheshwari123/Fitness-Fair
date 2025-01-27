"use client";

import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import s1 from "@/assets/s3.jpg";
import s2 from "@/assets/s4.jpg";
import Image from "next/image";
const Swipper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: s1,
      altText: "Slide 1",
    },
    {
      id: 2,
      image: s2,
      altText: "Slide 2",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <Image src={slide.image} alt="not found" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
