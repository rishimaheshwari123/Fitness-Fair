import Image from "next/image";
import { FaStar } from "react-icons/fa";
import chief1 from "@/assets/k2.jpg";
import chief2 from "@/assets/k3.jpg";
import chief3 from "@/assets/s2.jpg";
import chief4 from "@/assets/s5.jpg";

export default function ChiefGuests() {
  const guests = [
    {
      name: "Sahil Khan",
      role: "Film Actor & Fitness Icon",
      images: [chief3, chief4],
    },
    {
      name: "Krishna Shroff",
      role: "Actress & Fitness Expert",
      images: [chief1, chief2],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-8">Celebrity Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guests.map((guest, index) => (
          <div key={index} className="text-center">
            {/* Image Container */}
            <div className="relative w-full h-[95vh] overflow-hidden group">
              {/* First Image (Default) */}
              <Image
                src={guest.images[0]}
                alt={guest.name}
                width={500}
                height={400}
                className="w-full h-full object-fit absolute transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Second Image (Shows on Hover) */}
              <Image
                src={guest.images[1]}
                alt={guest.name}
                width={500}
                height={400}
                className="w-full h-full object-cover absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            {/* Text Section */}
            <h3 className="text-xl font-semibold mt-4">{guest.name}</h3>
            <p className="text-lg text-gray-500">{guest.role}</p>
            <div className="mt-4 flex justify-center">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
