import Image from "next/image";
import { FaStar } from "react-icons/fa";
import chief1 from "@/assets/chief1.png";
import chief2 from "@/assets/chief2.png";

export default function ChiefGuests() {
  const guests = [
    {
      name: "Sahil Khan",
      role: "Film Actor & Fitness Icon",
      image: chief1,
    },
    {
      name: "Sapna Vyas",
      role: "Fitness Expert",
      image: chief2,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-8">Chief Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-8">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-52 h-[45vh] mb-4 relative">
              <Image
                src={guest.image}
                alt={guest.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{guest.name}</h3>
            <p className="text-lg text-gray-500">{guest.role}</p>
            <div className="mt-4 flex">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
