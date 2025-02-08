"use client";

import React from "react";
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
  const slides = [
    { id: 1, image: s1, altText: "Slide 1", price: "$100" },
    { id: 2, image: s1, altText: "Slide 2", price: "$120" },
    { id: 3, image: s1, altText: "Slide 3", price: "$140" },
    { id: 4, image: s1, altText: "Slide 4", price: "$160" },
    { id: 5, image: s1, altText: "Slide 5", price: "$180" },
    { id: 6, image: s1, altText: "Slide 6", price: "$200" },
  ];

  return (
    <div className="relative mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="w-full h-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-auto group">
              {/* Image with Dynamic Hover Effect */}
              <Image
                src={slide.image}
                alt={slide.altText}
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out 
                           group-hover:scale-110 group-hover:rotate-[var(--rotate)] group-hover:shadow-xl"
                style={{
                  "--rotate": Math.random() > 0.5 ? "3deg" : "-3deg",
                }}
              />

              {/* Price Display with Animation */}
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
