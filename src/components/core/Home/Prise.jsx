import Image from "next/image";
import bike from "@/assets/b.png";
import bike2 from "@/assets/bike2.png";
import { Slide } from "react-awesome-reveal";
import { FaTrophy, FaDumbbell, FaStar, FaCameraRetro } from "react-icons/fa";

// Bounce + Blink Animation
const styles = {
  bounceBlink: `@keyframes bounceBlink {
    0%, 100% { transform: translateY(0); opacity: 1; }
    25% { transform: translateY(-10px); opacity: 0.8; }
    50% { transform: translateY(0); opacity: 0.6; }
    75% { transform: translateY(10px); opacity: 0.8; }
  }`
};  const features = [
  { icon: <FaDumbbell className="text-indigo-600 text-2xl" />, text: "Vital Exposure in the Fitness World" },
  { icon: <FaTrophy className="text-yellow-500 text-2xl" />, text: "Madhya Pradesh Bodybuilding Champions Trophy" },
  { icon: <FaStar className="text-red-500 text-2xl" />, text: "Rub Shoulders with Celebrities" },
  { icon: <FaCameraRetro className="text-blue-500 text-2xl" />, text: "Professional Photo Shoot" }
];

export default function Prize() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Gradient Heading */}
      <style>{styles.bounceBlink}</style>
      <h3 className="lg:text-4xl text-2xl font-extrabold text-center mb-8 animate-[bounceBlink_1.5s_infinite] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Prizes for Winners: Madhya Pradesh Bodybuilding Champion's Trophy (Male)
      </h3>

      <p className="text-xl text-gray-700 mb-6 text-center">
        <strong className="text-indigo-600">🏆 First prize:</strong> Sports Bike
      </p>

      {/* Images Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Slide direction="left">
          <div className="relative group w-full h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg shadow-indigo-500/50">
            <Image
              src={bike}
              alt="Bike Image"
              className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={bike2}
              alt="Bike Alternate"
              className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Slide>

        <Slide direction="right">
          <div className="relative group w-full h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg shadow-indigo-500/50">
            <Image
              src={bike2}
              alt="Bike Image"
              className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={bike}
              alt="Bike Alternate"
              className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Slide>
      </div>

      {/* Features List */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center py-4 px-5 shadow-md shadow-blue-500/30 rounded-lg bg-gray-50 hover:bg-indigo-100 transition-all duration-300 gap-4 text-gray-800 font-semibold text-lg"
        >
          {feature.icon} {feature.text}
        </li>
      ))}
    </ul>
    </div>
  );
}
