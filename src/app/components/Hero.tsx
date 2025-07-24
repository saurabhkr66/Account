"use client";

export default function LandingPage() {
  const images = ["/3.png", "/4.png", "/5.png"];

  return (
      <div className=" max-h-screen mx-auto bg-gradient-to-r from-[#211F36] to-[#4a2a58]  p-8 md:p-12 shadow-2xl border border-gray-700/30">
        {/* Title */}
        <div className="text-center mb-12 py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
            Accounting Software That
            <br />
            Exceeds Expectations
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-500 ${
                index === 1 ? "-translate-y-6" : "translate-y-2"
              }`}
            >
              {index === 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-32 bg-purple-500/60 blur-2xl rounded-full z-0" />
              )}
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-128 mx-auto rounded-2xl shadow-xl object-cover relative z-10"
              />
            </div>
          ))}
        </div>
      </div>
  );
}
