// HearFromCounsellors.jsx
import React from "react";

const counsellorVideos = [
  {
    title: "Why Choose the UK?",
    tag: "Study in UK",
    description: "Our counsellor explains entry requirements and intakes for UK universities.",
    src: "/videos/counsellor-uk.mp4", // <-- put your video file here
  },
  {
    title: "Australia Visa Guidance",
    tag: "Study in Australia",
    description: "Step-by-step overview of GTE, finance and visa documentation.",
    src: "/videos/counsellor-aus.mp4",
  },
  {
    title: "Choosing the Right Course",
    tag: "Course Selection",
    description: "How to match your interest, budget and career plan with the right course.",
    src: "/videos/counsellor-course.mp4",
  },
  {
    title: "Scholarship Tips",
    tag: "Scholarships",
    description: "Quick tips to increase your chances of getting scholarships abroad.",
    src: "/videos/counsellor-scholarship.mp4",
  },
];

export default function HearFromCounsellors() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
              Hear from our experts
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Hear From Our Counsellors
            </h2>
            <p className="mt-2 text-sm md:text-[15px] text-slate-600 max-w-xl">
              Watch quick reels from our counsellors sharing guidance on study
              destinations, visas, scholarships and course selection.
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {counsellorVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Reels-style video */}
              <div className="relative w-full h-80 md:h-[360px] bg-black overflow-hidden">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom info */}
              <div className="p-4 md:p-5 flex flex-col gap-1.5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-100 text-indigo-700">
                  {video.tag}
                </span>
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  {video.title}
                </h3>
                <p className="text-xs md:text-[13px] text-slate-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
