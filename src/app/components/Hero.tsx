"use client";

export default function LandingPage() {
  const images = ["/3.png", "/4.png", "/5.png"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#211F36] to-[#4a2a58] shadow-2xl border border-gray-700/30 flex flex-col justify-between px-8 md:px-12 py-12">
      
      {/* Title - centered vertically between top and images */}
      <div className="flex-grow flex items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
          Accounting Services That
          <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Exceeds Expectations</span>
          
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-3 gap-4 items-end mx-8 md:mx-16 lg:mx-24 pb-8">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-500 ${
              index === 1 ? "-translate-y-6" : "translate-y-2"
            }`}
          >
            {/* Blurred glow background for center image */}
            {index === 1 && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-32 bg-purple-500/60 blur-2xl rounded-full z-0" />
            )}
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="max-h-[400px] mx-auto rounded-2xl shadow-xl object-cover relative z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
