// USA_Detail.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const usaFaq = [
  {
    question: "Why is the USA popular among Nepali students?",
    answer:
      "The USA offers world-renowned universities, flexible education systems, strong research opportunities, and broad career options in almost every field.",
  },
  {
    question: "What are the main intakes for the USA?",
    answer:
      "The primary intakes are Fall (August/September) and Spring (January). Some universities also offer Summer intakes for selected programs.",
  },
  {
    question: "Can I work while studying in the USA?",
    answer:
      "Yes. Most international students can work part-time on-campus during their studies, and may be eligible for OPT/CPT depending on their course and visa conditions.",
  },
  {
    question: "Is a gap accepted for USA study?",
    answer:
      "Gaps can be accepted if you justify them with valid reasons like work experience, further studies, or personal circumstances, supported by documents.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes. Many US universities offer merit-based and need-based scholarships or assistantships, depending on academic profile and program.",
  },
];

const USA_Detail = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <>
      <Navbar />
      <main className="w-full bg-slate-50">
        {/* Banner / Hero */}
        <section className="w-full">
          <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
            <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_50%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
              {/* Left */}
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                  Study Destination · United States
                </span>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Study in the United States of America
                </h1>

                <p className="max-w-xl text-sm text-slate-100 sm:text-base">
                  The USA is home to many of the world’s top-ranked universities
                  offering flexible, research-driven education and strong global
                  career prospects for international students.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Book an appointment
                    <span className="ml-2 text-lg">↗</span>
                  </a>
                  <span className="text-xs text-slate-100/80 sm:text-sm">
                    Get tailored guidance for your US study plan.
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1">
                <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-sky-300/50 blur-3xl" />
                  <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-red-900/50 blur-3xl" />

                  <img
                    src="https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg"
                    alt="Study in USA"
                    className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="relative border-t border-white/10 bg-slate-900/40 px-5 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-100">
                      USA · Top Study Destination
                    </p>
                    <p className="mt-1 text-xs text-slate-100/80">
                      World-leading universities, diverse campuses, and strong
                      innovation culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
          {/* Why USA */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Study in the USA?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              The United States offers one of the most flexible and diverse
              education systems in the world. Students can choose from thousands
              of institutions and programs, customise their study plans, and
              access cutting-edge research facilities.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              With a strong focus on innovation, entrepreneurship, and practical
              learning, US degrees are highly valued by employers worldwide.
              Campuses are multicultural and provide excellent support services
              for international students.
            </p>
          </section>

          {/* Top Universities */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Top Universities in the USA
              </h2>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                Highly ranked globally
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">University Name</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Approx. Ranking</th>
                    <th className="px-4 py-3">Popular Courses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">Harvard University</td>
                    <td className="px-4 py-3">Massachusetts</td>
                    <td className="px-4 py-3">Top global</td>
                    <td className="px-4 py-3">Business, Law, Public Policy</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Massachusetts Institute of Technology (MIT)
                    </td>
                    <td className="px-4 py-3">Massachusetts</td>
                    <td className="px-4 py-3">Top global</td>
                    <td className="px-4 py-3">
                      Engineering, Computer Science, Data Science
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Stanford University
                    </td>
                    <td className="px-4 py-3">California</td>
                    <td className="px-4 py-3">Top global</td>
                    <td className="px-4 py-3">
                      Engineering, Business, Entrepreneurship
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      University of California, Berkeley
                    </td>
                    <td className="px-4 py-3">California</td>
                    <td className="px-4 py-3">Highly ranked</td>
                    <td className="px-4 py-3">
                      Computer Science, Economics, Engineering
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Popular Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Popular Courses in the USA
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Many students choose STEM fields, Business, and Computer Science
              due to strong industry demand and good career outcomes in the US
              and globally.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Undergraduate Courses
                  </h3>
                </div>
                <div className="px-4 py-3 text-sm text-slate-700">
                  <p className="font-medium text-slate-800">Courses</p>
                  <p className="mt-1">
                    Computer Science, Business Administration, Engineering,
                    Economics, Media &amp; Communication, Life Sciences.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Master’s Courses
                  </h3>
                </div>
                <div className="px-4 py-3 text-sm text-slate-700">
                  <p className="font-medium text-slate-800">Courses</p>
                  <p className="mt-1">
                    MS in Computer Science, Data Science, MBA, Electrical &
                    Mechanical Engineering, Public Health, Finance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Eligibility Criteria &amp; Admission Requirements
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Entry requirements vary by university, but this overview provides a
              general idea for Bachelor’s and Master’s degrees in the USA:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Parameter</th>
                    <th className="px-4 py-3">Bachelor’s (UG)</th>
                    <th className="px-4 py-3">Master’s (PG)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Academic Credentials
                    </td>
                    <td className="px-4 py-3">
                      Completion of 10+2 or equivalent with a strong academic
                      record. Some universities may require specific subject
                      combinations.
                    </td>
                    <td className="px-4 py-3">
                      A recognised Bachelor’s degree, usually with a minimum
                      equivalent of 2.7–3.0 GPA on a 4.0 scale, depending on the
                      university.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      English Language Proficiency
                    </td>
                    <td className="px-4 py-3">
                      Commonly TOEFL iBT or IELTS scores (e.g. IELTS 6.0–6.5
                      overall), depending on the institution.
                    </td>
                    <td className="px-4 py-3">
                      Usually slightly higher requirements (e.g. IELTS 6.5–7.0
                      overall) for postgraduate programmes.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Additional Requirements
                    </td>
                    <td className="px-4 py-3">
                      SOP/Personal Essay, recommendation letters, transcripts,
                      and sometimes SAT/ACT scores.
                    </td>
                    <td className="px-4 py-3">
                      SOP, CV, recommendation letters, transcripts, and in some
                      cases GRE/GMAT, portfolio, or work experience.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Process */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Application Process
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              The US application process involves careful planning and multiple
              steps. A typical flow looks like this:
            </p>
            <ul className="ml-5 list-disc space-y-2 text-sm sm:text-base text-slate-700">
              <li>
                Shortlist universities and programmes based on your academic
                profile, test scores, budget, and preferences.
              </li>
              <li>
                Prepare documents such as transcripts, English test scores,
                standardised test scores (if required), SOP, and references.
              </li>
              <li>
                Submit online applications to selected universities before the
                deadlines.
              </li>
              <li>
                After receiving an I-20 from a university, pay the SEVIS fee and
                apply for the F-1 student visa.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-5 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {usaFaq.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-2xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-indigo-200 shadow-md shadow-indigo-100"
                        : "border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/40"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                          {index + 1}
                        </span>
                        <h3 className="text-sm font-medium text-slate-900 sm:text-base">
                          {item.question}
                        </h3>
                      </div>
                      <div className="ml-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-700">
                        {isOpen ? "−" : "+"}
                      </div>
                    </div>
                    <div
                      className={`px-4 pb-4 pr-10 text-xs text-slate-700 transition-all duration-200 sm:px-5 sm:text-sm ${
                        isOpen
                          ? "max-h-40 opacity-100"
                          : "max-h-0 overflow-hidden opacity-0"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default USA_Detail;
