// AbroadStudySection.jsx
import React from "react";

import ukImage from "../assets/uk.jpg";
import ausImage from "../assets/australia.webp";
import usaImage from "../assets/usa.jpeg";
import canadaImage from "../assets/canada.jpeg";
import japanImage from "../assets/japan.jpeg";
import dubaiImage from "../assets/dubai.jpeg";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Study in UK",
    desc: "Explore top UK universities, scholarships, and visa guidance.",
    image: ukImage,
    link: "/study-in-uk",
  },
  {
    title: "Study in Australia",
    desc: "Find the best courses and universities in Australia for you.",
    image: ausImage,
    link: "/study-in-australia",
  },
  {
    title: "Study in USA",
    desc: "Start your journey with world-class education in the USA.",
    image: usaImage,
    link: "/study-in-usa",
  },
  {
    title: "Study in Canada",
    desc: "Affordable education and PR opportunities in Canada.",
    image: canadaImage,
    link: "/study-in-canada",
  },
  {
    title: "Study in Japan",
    desc: "Experience advanced education and unique culture in Japan.",
    image: japanImage,
    link: "/study-in-japan",
  },
  {
    title: "Study in Dubai",
    desc: "Modern campuses and international career opportunities in Dubai.",
    image: dubaiImage,
    link: "/study-in-dubai",
  },
];

export default function AbroadStudySection({ showSeeMore = true }) {
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          Study Abroad
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Explore global opportunities for your higher education dreams.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Updated overlay – visible on mobile, hover on md+ */}
              <div
                className="
                  absolute inset-0 flex items-end
                  bg-gradient-to-t from-black/80 via-black/50 to-transparent
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-200">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center text-[11px] md:text-xs font-semibold text-emerald-200">
                    View details <span className="ml-1 text-sm">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        {showSeeMore && (
          <div className="flex justify-center mt-12">
            <Link
              to="/study-abroad"
              className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
            >
              See More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
