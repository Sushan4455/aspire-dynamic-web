// AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LeftSide – Video */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <video
            src="/videos/aspire-intro.mp4"  // ✅ change to your video path
            controls
            className="w-full h-[250px] md:h-[400px] object-cover rounded-3xl"
          />

          {/* Play overlay effect (optional look) */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* RightSide – Content */}
        <div>
          {/* Small label */}
          <p className="text-sm tracking-[0.25em] uppercase text-indigo-600 font-semibold mb-4">
            About Aspire
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Why Choose Aspire for Your <br /> Study Abroad Journey?
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            With expert
            counselors, personalized support, and a proven track record,
            we make your international education journey smooth, reliable,
            and successful.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              ✅ Expert career counseling and university guidance
            </li>
            <li className="flex items-center gap-3">
              ✅ High visa success rate and complete documentation support
            </li>
            <li className="flex items-center gap-3">
              ✅ Scholarships and financial guidance
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-lg active:scale-95">
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
