"use client";

import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

import s1 from "@/assets/p1.png";

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: s1, altText: "Slide 1" },
    { id: 2, image: s1, altText: "Slide 2" },
    { id: 3, image: s1, altText: "Slide 3" },
    { id: 4, image: s1, altText: "Slide 4" },
    { id: 5, image: s1, altText: "Slide 4" },
    { id: 6, image: s1, altText: "Slide 4" },
    { id: 7, image: s1, altText: "Slide 4" },
  ];

  return (
    <div className="relative mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 }, // xl: 4 slides
        }}
        className="w-full h-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-auto">
              <Image
                src={slide.image}
                alt={slide.altText}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
