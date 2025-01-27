"use client";
import { useState } from "react";

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);

  const handleOpenModal = (content) => {
    setCurrentContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentContent(null);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Video Section */}
        <div
          className="relative w-full lg:w-1/2 h-[693px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() =>
            handleOpenModal({ type: "video", src: "/banner3.mp4" })
          }
        >
          <video
            className="w-full h-full object-cover"
            src="/banner3.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div>

        {/* Images Section */}
        <div className="flex flex-col lg:w-1/2 gap-4">
          {/* First Image */}
          <div
            className="relative w-full h-[340px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal({ type: "image", src: "/s1.jpg" })}
          >
            <img
              src="/s1.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Second Image */}
          <div
            className="relative w-full h-[340px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal({ type: "image", src: "/s2.jpg" })}
          >
            <img
              src="/s2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-screen h-screen flex items-center justify-center bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={handleCloseModal}
            >
              ✖
            </button>

            {currentContent.type === "video" ? (
              <video
                className="w-full h-full object-contain"
                src={currentContent.src}
                controls
                autoPlay
              ></video>
            ) : (
              <img
                src={currentContent.src}
                alt="Modal Content"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
