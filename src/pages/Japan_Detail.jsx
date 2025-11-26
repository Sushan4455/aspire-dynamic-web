// Japan_Detail.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";   // 🔧 adjust path if needed
import Footer from "../components/footer";   // 🔧 adjust path if needed

const faqDataJapan = [
  {
    question: "Is Japan a good study destination for Nepali students?",
    answer:
      "Yes. Japan offers high-quality education, strong technology and engineering programs, a safe environment, and opportunities to learn the Japanese language and culture.",
  },
  {
    question: "Do I need to know Japanese to study in Japan?",
    answer:
      "Many universities offer English-taught programmes, but learning Japanese is highly recommended for daily life, part-time work, and better career opportunities.",
  },
  {
    question: "Can I work part-time while studying in Japan?",
    answer:
      "Yes. With special permission from immigration, international students can work part-time for a limited number of hours per week.",
  },
  {
    question: "Are scholarships available for international students in Japan?",
    answer:
      "Yes. Scholarships are offered by the Japanese government (like MEXT), universities, and private organisations for eligible students.",
  },
  {
    question: "Is Japan safe for international students?",
    answer:
      "Japan is considered one of the safest countries in the world, with low crime rates and a highly organised society.",
  },
  {
    question: "What are the main intakes to study in Japan?",
    answer:
      "The main intake is usually April, and some universities also offer an October or September intake depending on the programme.",
  },
];

const Japan_Detail = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />

      <main className="w-full bg-slate-50">
        {/* Banner / Hero */}
        <section className="w-full">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-700 via-rose-600 to-slate-900 text-white">
            <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_55%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
              {/* Left content */}
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                  Study Destination · Japan
                </span>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Study in Japan
                </h1>

                <p className="max-w-xl text-sm text-slate-100 sm:text-base">
                  Experience a unique blend of tradition and innovation. Japan
                  offers excellent education in technology, engineering,
                  business, and design, along with a safe and organised lifestyle
                  for international students.
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
                    Get personalised guidance for your Japan study plan.
                  </span>
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1">
                <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  {/* Glow blobs */}
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-rose-300/60 blur-3xl" />
                  <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-slate-900/60 blur-3xl" />

                  <img
                    src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
                    alt="Study in Japan"
                    className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="relative border-t border-white/10 bg-slate-900/50 px-5 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose-200">
                      Japan · High-tech & Cultural Hub
                    </p>
                    <p className="mt-1 text-xs text-slate-100/80">
                      World-class technology, engineering programmes, and a rich
                      cultural experience in a safe environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
          {/* Why Study in Japan */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Study in Japan?
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Japan is a leader in innovation, technology, engineering, and
              research. Japanese universities are known for their strong focus on
              practical learning, discipline, and industry collaboration,
              allowing students to build real-world skills.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Along with academics, Japan offers a safe, clean, and organised
              environment with efficient public transport, modern infrastructure,
              and a unique blend of traditional and modern culture.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              For Nepali students, Japan is an attractive option to gain quality
              education, learn a new language, and access global career
              opportunities in fields like IT, engineering, business, and
              hospitality.
            </p>
          </section>

          {/* Top Universities */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Top Universities in Japan
              </h2>
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
                Highly reputed institutions
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">University Name</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Approx. Standing</th>
                    <th className="px-4 py-3">Popular Courses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">University of Tokyo</td>
                    <td className="px-4 py-3">Tokyo</td>
                    <td className="px-4 py-3">Top-ranked in Japan</td>
                    <td className="px-4 py-3">
                      Engineering, Science, Economics, Public Policy
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Kyoto University
                    </td>
                    <td className="px-4 py-3">Kyoto</td>
                    <td className="px-4 py-3">Leading research university</td>
                    <td className="px-4 py-3">
                      Science, Engineering, Agriculture, Medicine
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Osaka University
                    </td>
                    <td className="px-4 py-3">Osaka</td>
                    <td className="px-4 py-3">Reputed national university</td>
                    <td className="px-4 py-3">
                      Engineering, IT, Life Sciences, Humanities
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Tokyo Institute of Technology
                    </td>
                    <td className="px-4 py-3">Tokyo</td>
                    <td className="px-4 py-3">Specialised tech institution</td>
                    <td className="px-4 py-3">
                      Engineering, Computer Science, Robotics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Popular Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Popular Courses in Japan
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              International students in Japan often select programmes linked to
              technology, innovation, and business. Courses in IT, engineering,
              robotics, design, and international business are especially popular
              due to Japan’s strong industry and global reputation in these
              sectors.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* UG */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Undergraduate Courses
                  </h3>
                </div>
                <div className="px-4 py-3 text-sm text-slate-700">
                  <p className="font-medium text-slate-800">Courses</p>
                  <p className="mt-1">
                    Computer Science, Mechanical Engineering, Electrical &
                    Electronics, International Business, Hospitality &
                    Tourism, Language &amp; Cultural Studies.
                  </p>
                </div>
              </div>

              {/* PG */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Master’s Courses
                  </h3>
                </div>
                <div className="px-4 py-3 text-sm text-slate-700">
                  <p className="font-medium text-slate-800">Courses</p>
                  <p className="mt-1">
                    Robotics &amp; AI, Data Science, Engineering Management,
                    International Relations, Business Administration, Design &
                    Innovation.
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
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Entry requirements can vary by university and programme, but the
              following gives a general idea of what is expected for Bachelor’s
              and Master’s studies in Japan:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Parameter</th>
                    <th className="px-4 py-3">Bachelor’s (UG) Requirements</th>
                    <th className="px-4 py-3">Master’s (PG) Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Academic Credentials
                    </td>
                    <td className="px-4 py-3">
                      Completion of 10+2 or equivalent with a strong academic
                      record (often around{" "}
                      <span className="font-semibold">60–65%</span> or above),
                      depending on the institution.
                    </td>
                    <td className="px-4 py-3">
                      A recognised Bachelor’s degree in a relevant field with a
                      minimum overall percentage (commonly{" "}
                      <span className="font-semibold">55–60%</span> or higher),
                      subject to university requirements.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Language Proficiency
                    </td>
                    <td className="px-4 py-3">
                      For English-taught programmes, universities may ask for
                      IELTS/TOEFL. For Japanese-taught programmes, proof of
                      Japanese proficiency (such as JLPT) is usually required.
                    </td>
                    <td className="px-4 py-3">
                      Similar requirements as UG, with higher expectations for
                      some programmes. Both English and Japanese language
                      proficiency may be considered depending on the course.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Additional Requirements
                    </td>
                    <td className="px-4 py-3">
                      Academic transcripts, Statement of Purpose (SOP), letters
                      of recommendation, and sometimes entrance examinations or
                      interviews.
                    </td>
                    <td className="px-4 py-3">
                      Academic transcripts, CV, research proposal (for research
                      programmes), SOP, recommendation letters, and sometimes
                      interviews or additional tests.
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
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The general process to study in Japan usually includes the
              following steps:
            </p>
            <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 sm:text-base">
              <li>
                Research universities and programmes in Japan that match your
                academic interests and budget.
              </li>
              <li>
                Prepare academic transcripts, language test scores, SOP, CV, and
                recommendation letters as required.
              </li>
              <li>
                Submit your application directly to universities or through
                their online portals and wait for offer letters.
              </li>
              <li>
                After receiving an acceptance and the required documents from
                the institution, apply for your student visa through the
                Japanese embassy/consulate.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-5 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqDataJapan.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-2xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-rose-200 shadow-md shadow-rose-100"
                        : "border-slate-200 hover:border-rose-200 hover:bg-rose-50/40"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-700">
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

export default Japan_Detail;
