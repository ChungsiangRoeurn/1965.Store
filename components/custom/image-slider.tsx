"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string;
}

const images = [
  { src: "/sliders/banner1.jpeg" },
  { src: "/sliders/banner2.jpg" },
  { src: "/sliders/banner3.jpg" },
  { src: "/sliders/banner4.png" },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative max-w-[1500px] w-full mx-auto">
      <div
        className="relative h-[600px] mx-12 group transition-all"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-14 top-1/2 transform rounded-xl hover:bg-[#e0eef5] mx-1 -mt-[10px] -translate-y-1/2 bg-[#F0F2F3] text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-gray-500" />
      </button>
      <button
        className="absolute right-14 top-1/2 transform rounded-xl hover:bg-[#e0eef5] mx-1 -mt-[10px] -translate-y-1/2 bg-[#F0F2F3] text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-gray-500" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex ? "bg-[#272343]" : "bg-gray-300"
            } rounded-xl transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
