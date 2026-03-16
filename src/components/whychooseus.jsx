// src/components/WhyChooseTraining.jsx
import React from "react";

const reasons = [
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    desc: "Learn directly from experienced trainers and industry professionals who guide you with real-life examples and feedback.",
  },
  {
    icon: "🎯",
    title: "Job-Oriented Curriculum",
    desc: "Every module is designed around today’s job market so you build skills that employers are actually looking for.",
  },
  {
    icon: "🧪",
    title: "Practical Hands-on Projects",
    desc: "Work on assignments, case studies, and live projects so you can apply what you learn instead of just memorizing theory.",
  },
  {
    icon: "📜",
    title: "Certification & Support",
    desc: "Receive course completion certificates and guidance for internships, portfolio building, and next steps in your career.",
  },
];

export default function WhyChooseTraining() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500">
            Why Choose Our Training
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
            Training Designed for Real Growth
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Aspire training programs combine expert guidance, practical learning, 
            and career-focused content to help you move confidently toward your goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-400 hover:bg-white shadow-sm hover:shadow-xl transition-all p-6 md:p-7 flex gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
