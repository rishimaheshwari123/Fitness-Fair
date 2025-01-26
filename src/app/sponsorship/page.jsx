"use client";
import React, { useState } from "react";
import {
  FaDollarSign,
  FaUsers,
  FaBullhorn,
  FaHandshake,
  FaRegChartBar,
} from "react-icons/fa";

const sponsorsData = [
  {
    title: "Title Sponsor",
    amount: "25,00,000",
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
    amount: "15,00,000",
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
    title: "Main Sponsor",
    amount: "4,00,000",
    details: [
      "Logo on Stage backdrop.",
      "Logo on main gate.",
      "Invite to the sponsors, Managing Directors, Marketing head for the After Event party with candidates and celebrities.",
      "Name and logo on all press releases.",
      "The opportunity to give the Trophy to the winners.",
      "Minimum 5 mentions during the event by the anchor.",
      "3 VIP and 20 General passes for the event.",
      "Logo on passes and invitations for the event.",
      "Logo on VIP Chair.",
      "Logo on backdrop during candidate introduction with anchor.",
    ],
  },
  {
    title: "Co - Sponsor",
    amount: "10,00,000",
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
];

const SponsorPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Partner With Fitness Fair 2025?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unmatched Market Access */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaDollarSign className="mr-2 text-green-500" />
              Unmatched Market Access
            </h3>
            <ul className="list-disc pl-6">
              <li>
                The Indian fitness industry is valued at ₹20,000 crores and
                growing at an 18-20% CAGR.
              </li>
              <li>
                Bhopal and tier-2 cities are seeing rapid growth in fitness
                adoption, creating untapped opportunities.
              </li>
              <li>
                Fitness-conscious audiences aged 18-50 are actively seeking
                innovative products and services.
              </li>
            </ul>
          </div>

          {/* Elevated Brand Visibility */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaBullhorn className="mr-2 text-blue-500" />
              Elevated Brand Visibility and Positioning
            </h3>
            <ul className="list-disc pl-6">
              <li>Reach over 15,000+ attendees directly at the event.</li>
              <li>
                Digital campaigns expected to reach 500,000+ viewers through
                targeted paid and organic posts.
              </li>
              <li>
                Extensive traditional media coverage via newspapers, FM radio,
                and prime-location hoardings.
              </li>
              <li>
                Prominent logo placement on the main gate, stage backdrops,
                participant tags, and more.
              </li>
            </ul>
          </div>

          {/* Direct ROI-Driven Engagement */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaRegChartBar className="mr-2 text-yellow-500" />
              Direct ROI-Driven Engagement
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Real-time customer interaction through interactive stalls or
                product demonstrations.
              </li>
              <li>
                Opportunity to present trophies and awards, ensuring your brand
                is associated with excellence.
              </li>
              <li>
                Post-event report with audience analytics and engagement metrics
                to measure ROI.
              </li>
            </ul>
          </div>

          {/* High Growth Opportunity */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaUsers className="mr-2 text-purple-500" />
              High Growth Opportunity in a Resilient Market
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Health-conscious consumers are spending on premium fitness
                brands post-COVID.
              </li>
              <li>
                Early positioning in tier-2 markets provides a competitive edge
                in a growing industry.
              </li>
            </ul>
          </div>

          {/* Exclusive Sponsorship Benefits */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaHandshake className="mr-2 text-teal-500" />
              Exclusive Sponsorship Benefits Tailored to Maximize ROI
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Prime logo placements across the venue and marketing materials.
              </li>
              <li>
                Direct media mentions in press releases, radio campaigns, and
                celebrity interviews.
              </li>
              <li>
                5 VIP and 30 general passes, along with networking opportunities
                at the post-event party.
              </li>
            </ul>
          </div>

          {/* Long-Term Brand Loyalty */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaDollarSign className="mr-2 text-red-500" />
              Long-Term Brand Loyalty
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Build a trusted relationship with a fitness-savvy audience.
              </li>
              <li>
                Be recognized as an innovator and leader in the health and
                wellness industry.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-green-500 text-white font-semibold text-lg rounded-full hover:bg-green-600 transition">
            Partner with Us Today!
          </button>
        </div> */}
      </div>
      <h1 className="text-4xl font-semibold text-center mb-8">Our Sponsors</h1>
      {sponsorsData.map((sponsor, index) => (
        <div key={index} className="mb-6 border p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{sponsor.title}</h2>
            <span className="text-xl font-semibold">{sponsor.amount}</span>
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
    </div>
  );
};

export default SponsorPage;
