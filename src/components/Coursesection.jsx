// src/components/CoursesSection.jsx
import React from "react";

const courses = [
  {
    title: "IELTS Preparation",
    desc: "We provide IELTS training with strategies, practice, and feedback to help you achieve your target score for study, career, or immigration.",
  },
  {
    title: "PTE Preparation",
    desc: "Our PTE Preparation training builds all four skills with strategies and mock tests to boost fluency, accuracy, and confidence for top scores.",
  },
  {
    title: "TOEFL Preparation",
    desc: "Our TOEFL program trains students in reading, listening, writing, and speaking with strategies and practice tests to build academic English skills and achieve top scores.",
  },
  {
    title: "SAT Preparation",
    desc: "Our SAT program builds math, reading, and writing skills with strategies, mock tests, and personalized plans to help students achieve top scores and unlock global study opportunities.",
  },
  {
    title: "Duolingo English Test",
    desc: "Our Duolingo prep builds fluency and test strategies through practice in speaking, writing, reading, and listening—helping students adapt to the format and achieve top results.",
  },
  {
    title: "GMAT Preparation",
    desc: "Our GMAT program sharpens math, verbal, reasoning, and writing skills with strategies, practice tests, and coaching to help students achieve competitive scores for top business schools.",
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500">
              Test Preparation
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Prep Courses for Your Study Abroad Exams
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl">
              Build strong exam skills with focused training, mock tests, and expert
              feedback tailored to international admission requirements.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
              6 specialized preparation programs
            </span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {courses.map((course, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 group-hover:from-indigo-500 group-hover:to-emerald-400 transition" />

              <div className="p-6 md:p-7 flex-1 flex flex-col">
                {/* Icon circle */}
                <div className="mb-5 inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-slate-900 text-white shadow-lg group-hover:bg-emerald-500 transition">
                  <span className="text-lg">↗</span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed flex-1">
                  {course.desc}
                </p>

                {/* Bottom action row */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="text-xs md:text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1">
                    View details
                    <span className="translate-y-[1px] group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </button>

                  <div className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition">
                    <span className="text-sm text-slate-700 group-hover:text-emerald-600">
                      Go
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
