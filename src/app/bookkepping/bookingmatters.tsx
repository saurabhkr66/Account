// components/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';

// --- Data for the feature cards ---
// You can replace this with data from a CMS or API.
const featuresData = [
  {
    imageUrl: "/3.png",
 description: "Most of your clients like to stay up to date on finances? Bookkeeping's unique 'client-only' spaces create genuine interactions by mirroring all your reports online without the need for anyone to see your work."  },
  {
    imageUrl: '/4.png',
    description: 'Most of your audience to shy to go on video? Happens unique "avatar only" spaces creates genuine interactions by mirroring all your reactions online without the need for anyone to see your video.',
  },
  {
    imageUrl: "/5.png",
    description: "Bookkeeping spaces let your financial data move around, joining and syncing transactions more naturally than any other accounting management tool.",
  },
  {
    imageUrl: "/4.png",
    description: 'Happen Events get you noticed recommending your community to those interested so your communities grows.',
  },
];

// --- The Main Component ---
const BookkeepingFeatures = () => {
  return (
    <section className="relative bg-[#4f46e5] text-white py-20 md:py-28 overflow-hidden">
      {/* Background SVG Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Main large curve */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-204 93.882C-137.333 70.5487 -18 30.5487 114 93.882C312.5 183.382 429.5 291.549 648.5 291.549C867.5 291.549 962.5 160.549 1151.5 93.882C1340.5 27.2154 1478.17 49.382 1558 93.882V800H-204V93.882Z"
            fill="#3730a3"
            fillOpacity="0.6"
          />
        </svg>
        {/* Decorative shapes on the right */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 opacity-30">
            <div className="w-32 h-32 bg-white/10 rounded-full -rotate-45 transform"></div>
            <div className="w-24 h-24 bg-white/10 rounded-full -rotate-12 transform -mt-16 ml-24"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Happen Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              // --- CHANGE: Added translation to offset the cards ---
              // The top row (index 0, 1) is shifted left on medium screens and up.
              // The bottom row (index 2, 3) is shifted right on medium screens and up.
              className={`bg-white rounded-2xl shadow-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300 ${
                index < 2 ? 'md:-translate-x-8' : 'md:translate-x-8'
              }`}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={feature.imageUrl}
                  alt={feature.description.substring(0, 20)} // Use part of description for alt text
                  width={200}
                  height={100}
                  className="object-cover justify-center"
                />
              </div>
              <p className="text-gray-600 text-center text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookkeepingFeatures;
