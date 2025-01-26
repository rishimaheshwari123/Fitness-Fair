import Image from "next/image";
import bike from "@/assets/bike1.png";
import bike2 from "@/assets/bike2.png";

export default function Prize() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Prizes For Winners (MPBCT) Male
      </h3>
      <p className="text-xl text-gray-700 mb-6 text-center">
        <strong className="text-indigo-600">First prize:</strong> Royal Enfield
        / Harley Davidson
      </p>

      <div className="grid lg:grid-cols-2 ">
        <Image src={bike} alt="not found" />
        <Image src={bike2} alt="not found" />
      </div>
      <ul className="list-disc ml-8 text-lg text-gray-700 space-y-4">
        <li className="flex items-center gap-3">
          <span className="text-indigo-600">✔️</span> Vital Exposure in the
          Fitness World
        </li>
        <li className="flex items-center gap-3">
          <span className="text-indigo-600">✔️</span> Madhya Pradesh
          Bodybuilding Champions Trophy
        </li>
        <li className="flex items-center gap-3">
          <span className="text-indigo-600">✔️</span> Rub Shoulders with
          Celebrities
        </li>
        <li className="flex items-center gap-3">
          <span className="text-indigo-600">✔️</span> Professional Photo Shoot
        </li>
      </ul>
    </div>
  );
}

{
  /* 

*/
}
