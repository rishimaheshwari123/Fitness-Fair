import React from "react";
import { FaDumbbell, FaCalendarCheck, FaTrophy } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className=" text-gray-900 py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          About Fitness Fair 2025
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 italic">
          “Being Fit is not a fashion or trend… it’s a Way of Life”
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaDumbbell className="mr-3 text-green-500" />
            The Fitness Fever Gripped India
          </h2>
          <p className="text-lg md:text-xl">
            The Indian fitness industry is undergoing a revolution with
            monumental changes in fitness awareness, equipment, and diet.
            Spending on fitness and wellness is no longer a luxury. It is
            becoming a necessity for people in both metro and smaller cities who
            are increasingly becoming aware of their fitness and wellness.
          </p>
        </section>

        <section className="py-10 px-6 rounded-xl shadow-lg mb-16 bg-white border border-gray-200">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaCalendarCheck className="mr-3 text-blue-500" />
            Fitness Fair 2025 – Bigger Than Ever
          </h2>
          <p className="text-lg md:text-xl mb-6">
            The Biggest Fitness & Wellness Festival of Central India is set to
            take Bhopal by storm. Fitness Fair 2025 is ready to blow you away.
            The game just got bigger and better. This is the biggest event of
            2025 that no fitness, wellness, or lifestyle business can afford to
            miss!
          </p>
          <p className="text-lg md:text-xl">
            The total retail market for fitness is estimated to cross ₹20,000
            crores. It’s an extraordinary opportunity to showcase your brand,
            connect with fitness enthusiasts, and be a part of the fitness
            revolution.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaTrophy className="mr-3 text-yellow-500" />
            Madhya Pradesh Bodybuilding Competition (MPBC) & Female Fitness
            Award Show
          </h2>
          <p className="text-lg md:text-xl">
            The MPBC & Female Fitness Award Show is an extraordinary
            competition, celebrating bodybuilders, athletes, and fitness
            enthusiasts from across the nation. It’s a fiesta of bodybuilding &
            fitness, where the best will be recognized for their dedication and
            hard work.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
