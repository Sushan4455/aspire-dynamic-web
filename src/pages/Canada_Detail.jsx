// Canada_Detail.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const canadaFaq = [
  {
    question: "Why is Canada popular among Nepali students?",
    answer:
      "Canada offers high-quality education, comparatively affordable tuition, a safe environment, and pathways to work and immigration.",
  },
  {
    question: "What are the main intakes in Canada?",
    answer:
      "The major intakes are Fall (September) and Winter (January), with some institutions also offering Spring/Summer intakes.",
  },
  {
    question: "Can I work while studying in Canada?",
    answer:
      "Yes. Most international students can work part-time during their studies and full-time during scheduled breaks, subject to visa conditions.",
  },
  {
    question: "Is Canada good for PR opportunities?",
    answer:
      "Many students choose Canada because certain programmes and work experience can support permanent residency pathways, depending on current policies.",
  },
  {
    question: "Are there scholarships for international students?",
    answer:
      "Some universities and provinces offer scholarships based on academic performance or other criteria, though competition can be high.",
  },
];

const Canada_Detail = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <>
      <Navbar />
      <main className="w-full bg-slate-50">
        {/* Banner */}
        <section className="w-full">
          <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
            <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_50%)]" />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
              {/* Left */}
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                  Study Destination · Canada
                </span>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Study in Canada
                </h1>
                <p className="max-w-xl text-sm text-slate-100 sm:text-base">
                  Canada is known for its welcoming culture, excellent education
                  system, and strong focus on research, innovation, and
                  employability.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-700 shadow-lg shadow-red-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Book an appointment
                    <span className="ml-2 text-lg">↗</span>
                  </a>
                  <span className="text-xs text-slate-100/80 sm:text-sm">
                    Plan your Canadian study pathway with expert guidance.
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1">
                <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-red-300/50 blur-3xl" />
                  <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-slate-900/50 blur-3xl" />
                  <img
                    src="https://images.pexels.com/photos/756117/pexels-photo-756117.jpeg"
                    alt="Study in Canada"
                    className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="relative border-t border-white/10 bg-slate-900/40 px-5 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose-100">
                      Canada · Top Study Destination
                    </p>
                    <p className="mt-1 text-xs text-slate-100/80">
                      Quality education, safety, and post-study work options
                      attract students worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
          {/* Why Canada */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Why Study in Canada?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Canada has become a top destination for international students
              thanks to its high academic standards, safe cities, and inclusive
              society. Degrees from Canadian institutions are globally
              recognised and valued.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Affordable tuition fees compared to some other popular countries,
              along with part-time work and post-graduation work permits, make
              Canada an attractive choice for students seeking long-term
              opportunities.
            </p>
          </section>

          {/* Top Universities */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Top Universities in Canada
              </h2>
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                Popular choices
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
                    <td className="px-4 py-3 font-medium">
                      University of Toronto
                    </td>
                    <td className="px-4 py-3">Toronto</td>
                    <td className="px-4 py-3">Top in Canada</td>
                    <td className="px-4 py-3">
                      Computer Science, Engineering, Business
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      University of British Columbia
                    </td>
                    <td className="px-4 py-3">Vancouver</td>
                    <td className="px-4 py-3">Highly ranked</td>
                    <td className="px-4 py-3">
                      Forestry, Engineering, Life Sciences
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      McGill University
                    </td>
                    <td className="px-4 py-3">Montreal</td>
                    <td className="px-4 py-3">Top global</td>
                    <td className="px-4 py-3">Medicine, Law, Sciences</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      University of Alberta
                    </td>
                    <td className="px-4 py-3">Edmonton</td>
                    <td className="px-4 py-3">Well ranked</td>
                    <td className="px-4 py-3">
                      Energy, Engineering, Business
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Popular Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Popular Courses in Canada
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Students often choose programmes that align with Canada’s labour
              market needs, such as IT, Healthcare, Business, and Engineering.
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
                    Computer Science, Business &amp; Commerce, Engineering,
                    Nursing, Environmental Science.
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
                    MBA, Data Analytics, Engineering Management, Public Health,
                    Supply Chain Management.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Eligibility Criteria &amp; Admission Requirements
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Requirements vary by college and province, but here is a general
              outline:
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
                      Completion of 10+2 or equivalent with a minimum of around{" "}
                      <span className="font-semibold">60–65%</span>, depending
                      on institution.
                    </td>
                    <td className="px-4 py-3">
                      Recognised Bachelor’s degree with a minimum overall
                      percentage in the range of{" "}
                      <span className="font-semibold">55–60%</span> or
                      equivalent.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      English Language Proficiency
                    </td>
                    <td className="px-4 py-3">
                      Generally IELTS{" "}
                      <span className="font-semibold">6.0–6.5</span> overall
                      with no band below{" "}
                      <span className="font-semibold">5.5–6.0</span>.
                    </td>
                    <td className="px-4 py-3">
                      Often IELTS{" "}
                      <span className="font-semibold">6.5</span> overall with no
                      band below <span className="font-semibold">6.0</span>,
                      depending on course.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Additional Requirements
                    </td>
                    <td className="px-4 py-3">
                      Transcripts, SOP, references, and sometimes résumés or
                      portfolios for specific programmes.
                    </td>
                    <td className="px-4 py-3">
                      Transcripts, SOP, CV, recommendation letters, and where
                      applicable, work experience or portfolios.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Process */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Application Process
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              The typical process for studying in Canada includes:
            </p>
            <ul className="ml-5 list-disc space-y-2 text-sm sm:text-base text-slate-700">
              <li>
                Shortlist colleges/universities and programmes based on your
                academic background and goals.
              </li>
              <li>
                Prepare and submit applications with all required documents.
              </li>
              <li>
                Receive an offer letter, pay the required tuition deposit, and
                obtain your Letter of Acceptance.
              </li>
              <li>
                Apply for a Canadian study permit and complete biometrics as
                required.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-5 pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {canadaFaq.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-2xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-red-200 shadow-md shadow-red-100"
                        : "border-slate-200 hover:border-red-200 hover:bg-red-50/40"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-semibold text-red-700">
                          {index + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-medium text-slate-900">
                          {item.question}
                        </h3>
                      </div>
                      <div className="ml-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-700">
                        {isOpen ? "−" : "+"}
                      </div>
                    </div>
                    <div
                      className={`px-4 pb-4 pr-10 text-xs sm:text-sm text-slate-700 transition-all duration-200 sm:px-5 ${
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

export default Canada_Detail;
