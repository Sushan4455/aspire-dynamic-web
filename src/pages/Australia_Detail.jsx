// Australia_Detail.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const faqData = [
  {
    question: "Is Australia a good study destination for Nepali students?",
    answer:
      "Yes. Australia is one of the most popular destinations for Nepali students because of high-quality education, post-study work opportunities, and the possibility of long-term settlement.",
  },
  {
    question: "What is the main intake to study in Australia?",
    answer:
      "The main intakes are February and July. Some universities also offer additional intakes in November, depending on the course.",
  },
  {
    question: "Can I work while studying in Australia?",
    answer:
      "Yes. International students are allowed to work part-time during their studies, subject to the latest visa rules and working hour limits.",
  },
  {
    question: "Is a gap accepted for studying in Australia?",
    answer:
      "Yes, gap years can be accepted if you can justify them with valid documents such as work experience, further studies, or other genuine reasons.",
  },
  {
    question: "Are scholarships available for Nepali students in Australia?",
    answer:
      "Many Australian universities and the Australian government offer scholarships based on academic performance and other criteria.",
  },
  {
    question: "Can I apply for PR after studying in Australia?",
    answer:
      "Studying in Australia can be a pathway towards permanent residency, depending on your course, occupation, and immigration policies at the time.",
  },
];

const Australia_Detail = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
<>

<Navbar />
    <section id="australia-details" className="w-full bg-slate-50">
      {/* Banner / Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
        {/* soft glow overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_50%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
              Study Destination · Australia
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Study in Australia
            </h1>

            <p className="max-w-xl text-sm text-slate-100 sm:text-base">
              Discover top-ranked universities, globally recognised degrees, and
              a high quality of life. Australia offers excellent education,
              vibrant cities, and promising post-study work options for Nepali
              students.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-700 shadow-lg shadow-orange-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book an appointment
                <span className="ml-2 text-lg">↗</span>
              </a>
              <span className="text-xs text-slate-100/80 sm:text-sm">
                Get personalised guidance for your Australian study journey.
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1">
            <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
              {/* Glow blobs */}
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-amber-300/50 blur-3xl" />
              <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-rose-900/50 blur-3xl" />

              <img
                src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg"
                alt="Study in Australia"
                className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="relative border-t border-white/10 bg-slate-900/40 px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-200">
                  Australia · Top Study Destination
                </p>
                <p className="mt-1 text-xs text-slate-100/80">
                  Modern campuses, multicultural lifestyle, and strong graduate
                  outcomes across many fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
        {/* Why Study in Australia */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Study in Australia?
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Australia is home to some of the world’s leading universities and is
            known for its practical, industry-focused education system. Degrees
            from Australian institutions are recognised globally, giving you a
            competitive advantage in the international job market.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            The country offers a safe, multicultural environment where
            international students feel welcomed and supported. With flexible
            work rights and post-study opportunities, you can gain international
            work experience while pursuing your studies.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Choosing Australia means choosing quality education, a comfortable
            lifestyle, and promising long-term prospects.
          </p>
        </section>

        {/* Top Universities */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Top Universities in Australia
            </h2>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              Globally ranked institutions
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
                    University of Melbourne
                  </td>
                  <td className="px-4 py-3">Melbourne</td>
                  <td className="px-4 py-3">Top-ranked in Australia</td>
                  <td className="px-4 py-3">Business, Law, Medicine</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Sydney
                  </td>
                  <td className="px-4 py-3">Sydney</td>
                  <td className="px-4 py-3">Leading global university</td>
                  <td className="px-4 py-3">
                    Engineering, Health Sciences, Arts
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Queensland
                  </td>
                  <td className="px-4 py-3">Brisbane</td>
                  <td className="px-4 py-3">Top research institution</td>
                  <td className="px-4 py-3">
                    Biotechnology, Business, Environmental Science
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    Monash University
                  </td>
                  <td className="px-4 py-3">Melbourne</td>
                  <td className="px-4 py-3">Highly ranked globally</td>
                  <td className="px-4 py-3">Pharmacy, IT, Engineering</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of New South Wales (UNSW)
                  </td>
                  <td className="px-4 py-3">Sydney</td>
                  <td className="px-4 py-3">Top-tier university</td>
                  <td className="px-4 py-3">
                    Business, Engineering, Data Science
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Popular Courses in Australia
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            International students often choose courses that align with global
            career demand and Australian skill shortages. Fields like
            Engineering, IT, Nursing, Business, and Accounting are especially
            popular due to strong job prospects and migration pathways.
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
                  Business &amp; Commerce, Information Technology, Nursing,
                  Engineering (Civil, Mechanical, Electrical), Hospitality &
                  Tourism Management.
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
                  Master of Professional Accounting (MPA), MBA, Data Science,
                  Cyber Security, Engineering Management, Public Health, Supply
                  Chain &amp; Logistics.
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
            Each university has its own entry requirements, but the following
            gives a general overview of what is expected for Bachelor’s and
            Master’s programmes in Australia:
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
                    Completion of 10+2 or equivalent from a recognised board
                    with a minimum aggregate of around{" "}
                    <span className="font-semibold">60–65%</span>, depending on
                    the institution and course.
                  </td>
                  <td className="px-4 py-3">
                    A recognised Bachelor’s degree (usually 3 or 4 years) with
                    a minimum overall score of around{" "}
                    <span className="font-semibold">55–60%</span>, subject to
                    university requirements.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    English Language Proficiency
                  </td>
                  <td className="px-4 py-3">
                    Commonly{" "}
                    <span className="font-semibold">IELTS 6.0–6.5</span>{" "}
                    overall with no band less than{" "}
                    <span className="font-semibold">5.5–6.0</span>, depending on
                    the course.
                  </td>
                  <td className="px-4 py-3">
                    Typically{" "}
                    <span className="font-semibold">IELTS 6.5</span> overall
                    with no band below{" "}
                    <span className="font-semibold">6.0</span>. Some
                    specialised courses may require higher scores.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Additional Requirements
                  </td>
                  <td className="px-4 py-3">
                    Academic transcripts, Statement of Purpose (SOP), reference
                    letters, and in some cases portfolios or auditions for
                    creative courses.
                  </td>
                  <td className="px-4 py-3">
                    Academic transcripts, detailed CV, SOP, reference letters,
                    and sometimes work experience or standardised tests,
                    depending on the programme.
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
            To study in Australia, you must secure admission to a registered
            education provider and then apply for a student visa (subclass 500).
            The general process is as follows:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 sm:text-base">
            <li>
              Research universities and courses in Australia that match your
              profile, interests, and budget.
            </li>
            <li>
              Prepare necessary documents such as academic transcripts, English
              test scores, SOP, CV, and references.
            </li>
            <li>
              Submit applications to your chosen universities and wait for
              offers (conditional or unconditional).
            </li>
            <li>
              Once you receive a Confirmation of Enrolment (CoE), you can apply
              for your Australian student visa.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-5 pb-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`cursor-pointer rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? "border-orange-200 shadow-md shadow-orange-100"
                      : "border-slate-200 hover:border-orange-200 hover:bg-orange-50/40"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-semibold text-orange-700">
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
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Australia_Detail;