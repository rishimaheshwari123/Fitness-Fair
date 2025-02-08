"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bounce } from "react-awesome-reveal";

const sponsorsData = [
  {
    title: "Stalls (10x10) ",
    amount: "1,00000",
    details: [
      "GYM, YOGA CENTER, Fitness club, ZUMBA, COSMATICS, ",
      "EQUIPMENTS AND Food SupplyMENTS, CARSHOROOM, Bikes .",
    
    ],
  },
  {
    title: "Stalls (8x6)  ",
    amount: "50,000",
    details: [
      "GYM, YOGA CENTRE, FITNESS club, ZUMBA, COSMATICS,  ",
      "EQIPMENTS And Supplyments, jwellery, SPORTS  .",
    
    ],
  },
  {
    title: "Stalls (8x6)  ",
    amount: "25,000",
    details: [
      "TEA/Coffee/Food   ",
    
    ],
  },
  {
    title: "Stalls 18 SQM.   ",
    amount: "1,50000",
    details: [
      "Hospitals, WELLNESS CENTRE,  ",
      "HEALTH EQIPMENTS, Fashion Brands   ",
    
    ],
  },
  {
    title: "Banners (5x3)  ",
    amount: "10,000",
    details: [
      "Term & Condition Applycable  ",
    
    
    ],
  },
  
];

const SponsorPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl uppercase text-red-500 font-semibold text-center mb-8">
        {" "}
        Stall Category
      </h1>
      <Bounce>
        {sponsorsData.map((sponsor, index) => (
          <div
            key={index}
            className="mb-6 border p-6 rounded-lg cursor-pointer shadow-lg shadow-yellow-500 
               transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-cyan-400">
                {sponsor.title}
              </h2>
              <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg shadow-md bg-white">
      <span className="text-2xl font-semibold text-green-600">
        {sponsor?.amount}
      </span>
      <Link
        href="/register"
        className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 text-center"
      >
        Book Now
      </Link>
    </div>
            </div>
            <div
              className={`mt-4 ${expandedIndex === index ? "block" : "hidden"}`}
            >
              <ul className="list-disc pl-5 space-y-2">
                {sponsor.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => toggleExpand(index)}
              className="mt-4 text-blue-500"
            >
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </Bounce>
    </div>
  );
};

export default SponsorPage;
