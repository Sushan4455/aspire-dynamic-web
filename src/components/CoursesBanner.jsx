import React from "react";
import bannerImage from "../assets/coursesbannerimg.avif"; // change image

export default function CoursesBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Courses Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Explore Our Professional Courses
        </h1>

        <p className="text-lg md:text-xl opacity-90 mb-6">
          Upgrade your skills with industry-focused courses designed for global success.
        </p>

        <a
          href="/study-destination"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
