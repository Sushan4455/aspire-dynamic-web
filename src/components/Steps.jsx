// src/components/AdmissionSteps.jsx
import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Free Counselling",
    desc: "Talk to our counsellors about your goals, budget, and preferred countries.",
  },
  {
    step: "Step 2",
    title: "Profile Evaluation",
    desc: "We assess your academics, language scores, and finances to suggest the best options.",
  },
  {
    step: "Step 3",
    title: "Course & University Selection",
    desc: "Shortlist the right course and university based on your profile and preferences.",
  },
  {
    step: "Step 4",
    title: "Document Preparation",
    desc: "We guide you to prepare SOP, LOR, financial documents, and application forms.",
  },
  {
    step: "Step 5",
    title: "Application & Offer Letter",
    desc: "Submit applications, track status, and receive your conditional or unconditional offers.",
  },
  {
    step: "Step 6",
    title: "Visa & Pre-Departure",
    desc: "Complete visa process, book tickets, and attend pre-departure briefing.",
  },
];

export default function AdmissionSteps() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
            Admission Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Step-by-Step Process to Study Abroad
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            We simplify each step of your journey so you always know what comes next.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6 md:p-7 flex flex-col h-full border border-slate-100"
            >
              {/* Step badge */}
              <div className="inline-flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 mb-3">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600">
                {item.desc}
              </p>

              {/* Bottom progress line (optional decoration) */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="h-1 w-16 rounded-full bg-green-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
