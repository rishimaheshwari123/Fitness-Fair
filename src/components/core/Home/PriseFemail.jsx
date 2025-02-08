import Image from "next/image";
import bike from "../../../assets/escooty.jpg";
import bike2 from "../../../assets/ee2.jpg";
import { Slide } from "react-awesome-reveal";
import { FaDumbbell, FaMotorcycle, FaMoneyBillWave, FaGift, FaStar, FaCameraRetro } from "react-icons/fa";

export default function PriseFemail() {
  const prizes = [
    { icon: <FaDumbbell className="text-indigo-600 text-2xl" />, text: "Vital Exposure in the Fitness World" },
    { icon: <FaMotorcycle className="text-red-500 text-2xl" />, text: "Iron Lady Fitness Award Trophy or E-Scooty" },
    { icon: <FaMoneyBillWave className="text-green-500 text-2xl" />, text: "Cash Prizes (All 5 Categories)" },
    { icon: <FaGift className="text-purple-500 text-2xl" />, text: "Gift Vouchers" },
    { icon: <FaStar className="text-yellow-500 text-2xl" />, text: "Rub Shoulders with Celebrities" },
    { icon: <FaCameraRetro className="text-blue-500 text-2xl" />, text: "Professional Photo Shoot" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-5 ">
      <h3 className="lg:text-4xl text-2xl  font-extrabold text-center mb-8 animate-[bounceBlink_1.5s_infinite] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Prizes For Winners (Female Category)
      </h3>

      <p className="text-xl text-gray-700 mb-6 text-center">
      <strong className="text-indigo-600">🏆 First prize:</strong> E-Scooty
       
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
      {/* Prizes List */}
      <Slide direction="left">
        <ul className="grid gap-4">
          {prizes.map((prize, index) => (
            <li
              key={index}
              className="flex items-center py-3 px-4 shadow-md shadow-blue-500/30 rounded-lg bg-gray-50 hover:bg-indigo-100 transition-all duration-300 gap-4 text-gray-800 font-semibold text-lg"
            >
              {prize.icon} {prize.text}
            </li>
          ))}
        </ul>
      </Slide>

      {/* Second Image with Hover Effect */}
      <Slide direction="right">
        <div className="relative group w-full h-[300px] lg:h-[400px] overflow-hidden">
          <Image
            src={bike2}
            alt="not found"
            className="w-full cursor-pointer h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={bike}
            alt="not found"
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Slide>
    </div>


    </div>
  );
}
