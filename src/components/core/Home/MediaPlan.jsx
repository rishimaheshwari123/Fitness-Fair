import React from "react";
import {
  FaTv,
  FaNewspaper,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdRadio } from "react-icons/md";
import { GiMegaphone } from "react-icons/gi";
import { BsFillPostcardFill } from "react-icons/bs";

const MediaPlan = () => {
  const mediaItems = [
    {
      icon: <FaTv className="text-blue-500 text-4xl" />,
      title: "Electronic Media",
      description: "TV News Channel, Online Channel",
    },
    {
      icon: <FaNewspaper className="text-green-500 text-4xl" />,
      title: "Print Media",
      description: "Daily Hindi Newspaper",
    },
    {
      icon: <MdRadio className="text-red-500 text-4xl" />,
      title: "Radio FM",
      description: "Jingles, Jockey Ads",
    },
    {
      icon: <GiMegaphone className="text-yellow-500 text-4xl" />,
      title: "Hoardings",
      description: "Minimum 2, maximum 4 in prime city locations",
    },
    {
      icon: (
        <div className="flex space-x-2">
          <FaFacebook className="text-blue-600 text-4xl" />
          <FaInstagram className="text-pink-500 text-4xl" />
          <FaTwitter className="text-blue-400 text-4xl" />
        </div>
      ),
      title: "Digital Media",
      description:
        "Facebook, Instagram, Twitter\n- 20 organic posts\n- 20 paid posts",
    },
    {
      icon: <BsFillPostcardFill className="text-purple-500 text-4xl" />,
      title: "Posters",
      description: "Posters for campaigns",
    },
    {
      icon: <BsFillPostcardFill className="text-teal-500 text-4xl" />,
      title: "Pamphlets",
      description: "Pamphlets for distribution",
    },
  ];

  return (
    <div className="w-full h-full py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Media Plan</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-xl font-bold text-gray-700">{item.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPlan;
