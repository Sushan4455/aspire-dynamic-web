// src/components/StudyBanner.jsx
import React from "react";
import bgImage from "../assets/studybanner.avif"; // change path if needed
import { Link } from "react-router-dom";

export default function StudyBanner() {
  return (
    <section className="relative w-full h-[320px] md:h-[430px] flex items-center justify-center overflow-hidden ">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Study Destination"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Explore Your Dream Study Destinations
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-200">
          Discover top universities, global opportunities, and expert guidance to help you study abroad with confidence.
        </p>

        <Link
          to="/study-destination"
          className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
