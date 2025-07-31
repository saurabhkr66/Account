"use client";
import Image from "next/image";

export default function LandingPage() {
  const images = ["/3.png", "/4.png", "/5.png", "/6.png"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#211F36] to-[#4a2a58] shadow-2xl border border-gray-700/30 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
      
      {/* Title - centered vertically between top and images */}
      <div className="flex-grow flex items-center justify-center text-center px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 max-w-4xl">
          Accounting Services That
          <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Exceeds Expectations
          </span>
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 items-end mx-2 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24 pb-4 sm:pb-6 md:pb-8">
        {images.map((src, index) => {
          const isGlowing = index === 1 || index === 3;

          return (
            <div
              key={index}
              className={`relative transition-transform duration-500 ${
                isGlowing ? "-translate-y-2 sm:-translate-y-4 md:-translate-y-6" : "translate-y-1 sm:translate-y-2"
              }`}
            >
              {/* Blurred glow background for 2nd and 4th images */}
              {isGlowing && (
                <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-20 h-16 sm:w-28 sm:h-24 md:w-36 md:h-32 bg-purple-500/60 blur-2xl rounded-full z-0" />
              )}

              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={400}
                width={600}
                className="max-h-[200px] sm:max-h-[280px] md:max-h-[350px] lg:max-h-[400px] w-full mx-auto rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl object-cover relative z-10"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
