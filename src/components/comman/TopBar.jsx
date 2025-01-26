import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="w-full hidden md:block bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="flex items-center justify-between py-2 px-6">
          {/* Left side content */}
          <div className="text-sm sm:text-base">
            <span className="font-semibold">Fitness Fair</span> |
            <span className="ml-2">20 - 21 JAN 2025</span> |
            <span className="ml-2">Bittan Market Ground, Bhopal</span>
          </div>

          {/* Right side content */}
          <div className="space-x-4 text-sm sm:text-base">
            <span className="font-semibold">
              MADHYA PRADESH BODYBUILDING COMPETITION
            </span>{" "}
            |<span className="ml-2">FEMALE FITNESS AWARD SHOW</span> |
            <span className="ml-2">FITNESS SEMINARS</span> |
            <span className="ml-2">EXHIBITIONS</span>
          </div>
        </div>
      </div>

      <div className="w-full block md:hidden bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="flex items-center justify-between py-2 px-6">
          {/* Left side content */}
          <div className="text-sm sm:text-base">
            <span className="font-semibold">Fitness Fair</span> |
            <span className="ml-2">20 - 21 JAN 2025</span> |
            <span className="ml-2">Bittan Market Ground, Bhopal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
