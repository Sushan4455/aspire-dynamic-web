import React from "react";
import { Link } from "react-router-dom";

const programs = [
  // Soft Skills / Languages
  {
    title: "Public Speaking Training",
    desc: "Our Public Speaking program builds confidence and communication skills through practice in voice, body language, storytelling, and audience engagement.",
    link: "/course-registration",
  },
  {
    title: "Life Skills Training",
    desc: "Our Life Skills program develops communication, teamwork, decision-making, and problem-solving skills to help students navigate challenges and succeed in life.",
    link: "/course-registration",
  },
  {
    title: "Accounting Training",
    desc: "Our Accounting program teaches financial statements, budgeting, and cost management, helping students and professionals build strong financial skills.",
    link: "/course-registration",
  },
  {
    title: "English Language",
    desc: "Our English program develops grammar, vocabulary, reading, writing, listening, and speaking skills through interactive activities and real-life practice.",
    link: "/course-registration",
  },
  {
    title: "Japanese Language",
    desc: "Our Japanese program teaches reading, writing, speaking, listening, and cultural etiquette to help students live, study, and work confidently in Japan.",
    link: "/course-registration",
  },
  {
    title: "German Language",
    desc: "Our German program develops grammar, conversation, and cultural understanding for education, work, and daily life in German-speaking countries.",
    link: "/course-registration",
  },

  // IT / Creative Courses
  {
    title: "Canva Design",
    desc: "Learn to create professional social media posts, presentations, flyers, and marketing materials using Canva—even with no design background.",
    link: "/course-registration",
  },
  {
    title: "Digital Marketing",
    desc: "Master SEO, social media marketing, content strategy, and ads to grow brands online and build a strong digital marketing portfolio.",
    link: "/course-registration",
  },
  {
    title: "UI Design",
    desc: "Understand design systems, wireframing, and prototyping to create modern, user-friendly interfaces for web and mobile apps.",
    link: "/course-registration",
  },
  {
    title: "Video Editing",
    desc: "Learn cutting, transitions, effects, and storytelling to edit engaging videos for YouTube, social media, and professional projects.",
    link: "/course-registration",
  },
  {
    title: "Graphic Design",
    desc: "Build strong fundamentals in layout, typography, colour, and branding using tools like Adobe Photoshop and Illustrator.",
    link: "/course-registration",
  },
];

export default function TrainingProgramsSection() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500">
              Training Programs
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Skill-building Programs for Your Growth
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl">
              Develop communication, language, and IT skills with structured
              training designed for students and working professionals.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
              {programs.length} training programs available
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.link}
              state={{ courseName: program.title }} // 👈 send title to the form page
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 group-hover:from-indigo-500 group-hover:to-emerald-400 transition" />

              <div className="p-6 md:p-7 flex-1 flex flex-col">
                {/* Icon circle */}
                <div className="mb-5 inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-slate-900 text-white shadow-lg group-hover:bg-emerald-500 transition">
                  <span className="text-lg">↗</span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                  {program.title}
                </h3>

                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed flex-1">
                  {program.desc}
                </p>

                {/* Bottom action row */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1">
                    Register for this course
                    <span className="translate-y-[1px] group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </span>

                  <div className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition">
                    <span className="text-sm text-slate-700 group-hover:text-emerald-600">
                      Go
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
