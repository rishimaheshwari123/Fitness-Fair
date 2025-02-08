"use client";
import React, { useState } from "react";
import { Bounce } from "react-awesome-reveal";

const sponsorsData = [
  {
    title: "Title Sponsor",
    amount: "10,00,000",
    details: [
      "Top billing on all advertising & Marketing activities.",
      "Logo on Backdrop, Press Conference, Celebrity Interviews, and all promotional activities.",
      "Logo on all participant’s t-shirts who come for the Competition.",
      "Logo on mugs, gifted to invite guests, press, and selected candidates.",
      "Title sponsor name and logo on paid advertisements on social media pages.",
      "Advertisements with electronic media— News Channels, Online Channels, Local TV Channel.",
      "Advertisements with Print Media— In leading newspapers and magazines, in Hindi, English, and Regional Languages.",
      "Advertisement on Radio Channels.",
      "Advertisement on minimum 2 Hoardings, Banners, Standees, Flex, and distribution of Pamphlets in every City.",
    ],
  },
  {
    title: "Main Sponsor",
    amount: "7,00,000",
    details: [
      "Logo on Stage backdrop.",
      "Logo on main gate.",
      "Invite to the sponsors, Managing Directors, Marketing head for the After Event party with candidates and celebrities.",
      "Name and logo on all press releases.",
      "The opportunity to give the Trophy to the winners.",
      "Minimum 5 times mentioning during the event by the anchor.",
      "5 VIP and 30 General passes for the event.",
      "Logo on passes and invitations of the event.",
      "Logo on VIP Chair.",
      "Logo on every participant’s number tags.",
      "Logo on backdrop during candidate introduction with anchor.",
      "Top billing on all advertising activities.",
      "Logo on Backdrop, Press Conference, Celebrity Interviews, and all promotional activities.",
      "Logo on mugs, gifted to invite guests, press, and selected candidates.",
      "Main sponsor name and logo on paid advertisements on social media pages.",
      "Advertisements through electronic media— News Channels, Online Channels, Local TV Channel.",
      "Advertisements Through Print Media— In leading newspapers and magazines, in Hindi, English, and Regional Languages.",
      "Advertisement on Radio Channels.",
      "Advertisement on minimum 2 Hoardings, Banners, Standees, Flex and distribution of Pamphlets in every City.",
    ],
  },

  {
    title: "Co - Sponsor",
    amount: "5,00,000",
    details: [
      "Logo on Backdrop, Press Conference, Celebrity Interviews, and all promotional activities.",
      "Logo on mugs, gifted to invite guests, press, and selected candidates.",
      "Title sponsor name and logo on paid advertisements on social media pages.",
      "Advertisements with electronic media— News Channels, Online Channels, Local TV Channel.",
      "Advertisements with Print Media— In leading newspapers and magazines, in Hindi, English, and Regional Languages.",
      "Advertisement on Radio Channels.",
      "Advertisement on minimum 2 Hoardings, Banners, Standees, Flex, and distribution of Pamphlets in every City.",
      "Logo on Stage backdrop.",
      "Logo on main gate.",
      "Invite to the sponsors, Managing Directors, Marketing head for the After Event party with candidates and celebrities.",
      "Name and logo on all press releases.",
      "The opportunity to give the Trophy to the winners.",
      "Minimum 5 times mentions during the event by the anchor.",
      "2 VIP and 15 General passes for the event.",
      "Logo on passes and invitations for the event.",
      "Logo on backdrop during candidate introduction with anchor.",
    ],
  },
  {
    title: "Supported By",
    amount: "2,00,000",
    details: [
      "Logo on Backdrop, Press Conference, Celebrity Interviews, and all promotional activities.",
      "Logo on mugs, gifted to invite guests, press, and selected candidates.",
      "Title sponsor name and logo on paid advertisements on social media pages.",
      "Advertisements with electronic media— News Channels, Online Channels, Local TV Channel.",
      "Advertisements with Print Media— In leading newspapers and magazines, in Hindi, English, and Regional Languages.",
      "Advertisement on Radio Channels.",
      "Advertisement on minimum 2 Hoardings, Banners, Standees, Flex, and distribution of Pamphlets in every City.",
      "Logo on Stage backdrop.",
      "Logo on main gate.",
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
        Sponsors Category
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
              <span className="text-2xl font-semibold text-green-600">
                {sponsor.amount}
              </span>
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
