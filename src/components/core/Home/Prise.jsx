import Image from "next/image";
import bike from "@/assets/b.png";
import bike2 from "@/assets/bike2.png";
import { Slide } from "react-awesome-reveal";

export default function Prize() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h3 className="blink-text text-4xl font-bold text-red-500 mb-8 text-center">
        Prizes for Winners: Madhya Pradesh Bodybuilding Champion's Trophy (Male)
      </h3>

      <p className="text-xl text-gray-700 mb-6 text-center">
        <strong className="text-indigo-600">First prize:</strong> Sports Bike
      </p>

      <div className="grid lg:grid-cols-2 gap-4">
        <Slide direction="left">
          <div className="relative group w-full h-[300px] lg:h-[400px] overflow-hidden">
            <Image
              src={bike}
              alt="not found"
              className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={bike2}
              alt="not found"
              className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Slide>

        {/* Second Image with Hover Effect */}
        <Slide direction="right">
          <div className="relative group w-full h-[300px] lg:h-[400px] overflow-hidden">
            <Image
              src={bike2}
              alt="not found"
              className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={bike}
              alt="not found"
              className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Slide>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <li className="flex items-center py-2 shadow-lg shadow-blue-500 rounded-md justify-center gap-3 bg-gray-50">
          <span className="text-indigo-600">✔️</span> Vital Exposure in the
          Fitness World
        </li>
        <li className="flex items-center py-2 shadow-lg shadow-blue-500 rounded-md justify-center gap-3 bg-gray-50">
          <span className="text-indigo-600">✔️</span> Madhya Pradesh
          Bodybuilding Champions Trophy
        </li>
        <li className="flex items-center py-2 shadow-lg shadow-blue-500 rounded-md justify-center gap-3 bg-gray-50">
          <span className="text-indigo-600">✔️</span> Rub Shoulders with
          Celebrities
        </li>
        <li className="flex items-center py-2 shadow-lg shadow-blue-500 rounded-md justify-center gap-3 bg-gray-50">
          <span className="text-indigo-600">✔️</span> Professional Photo Shoot
        </li>
      </ul>
    </div>
  );
}
