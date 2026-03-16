// Dubai_Detail.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";   // 🔧 adjust path if needed


const faqDataDubai = [
  {
    question: "Why is Dubai popular for international students?",
    answer:
      "Dubai offers modern campuses, international branch universities, tax-free income, strong industry links, and a vibrant multicultural lifestyle.",
  },
  {
    question: "Is Dubai safe for Nepali students?",
    answer:
      "Yes. Dubai is known for its high level of safety, strict laws, and well-maintained public spaces, making it a comfortable place to live and study.",
  },
  {
    question: "Can I work part-time while studying in Dubai?",
    answer:
      "Part-time work depends on visa type and institutional rules. In some cases, students may work on campus or with approved employers. Always check the latest regulations.",
  },
  {
    question: "Are there scholarships available in Dubai?",
    answer:
      "Many universities in Dubai offer merit-based scholarships, tuition discounts, and special grants for international students.",
  },
  {
    question: "What are the main intakes in Dubai?",
    answer:
      "Most universities have major intakes in September and January, with some offering additional summer or rolling intakes depending on the programme.",
  },
  {
    question: "Can a Dubai degree help my international career?",
    answer:
      "Yes. Many universities in Dubai are internationally accredited or are branch campuses of well-known global universities, which can support global career opportunities.",
  },
];

const Dubai_Detail = () => {
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
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-amber-500 text-white">
            <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_55%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
              {/* Left content */}
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                  Study Destination · Dubai
                </span>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Study in Dubai
                </h1>

                <p className="max-w-xl text-sm text-slate-100 sm:text-base">
                  Study in one of the world’s fastest-growing education hubs.
                  Dubai offers modern infrastructure, international branch
                  campuses, and excellent exposure to global business and
                  innovation.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Book an appointment
                    <span className="ml-2 text-lg">↗</span>
                  </a>
                  <span className="text-xs text-slate-100/80 sm:text-sm">
                    Get guidance for your study and career options in Dubai.
                  </span>
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1">
                <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  {/* Glow blobs */}
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/60 blur-3xl" />
                  <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-amber-500/60 blur-3xl" />

                  <img
                    src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg"
                    alt="Study in Dubai"
                    className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="relative border-t border-white/10 bg-slate-900/50 px-5 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                      Dubai · Global Education Hub
                    </p>
                    <p className="mt-1 text-xs text-slate-100/80">
                      Home to international branch campuses, business
                      opportunities, and a diverse student community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
          {/* Why Study in Dubai */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Study in Dubai?
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Dubai has rapidly grown into an education and business hub in the
              Middle East. Many international universities have branch campuses
              in Dubai, offering globally recognised degrees with modern
              facilities and strong industry connections.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The city is known for its safety, high standard of living, and
              multicultural environment. Students gain exposure to global
              business, tourism, finance, and technology sectors while studying
              in a vibrant, future-focused city.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              For Nepali students, Dubai provides an opportunity to access
              quality education closer to home, with good connectivity, familiar
              communities, and promising career prospects.
            </p>
          </section>

          {/* Top Universities */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Top Universities &amp; Institutions in Dubai
              </h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                International campuses &amp; local universities
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">University / Institution</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Focus Areas</th>
                    <th className="px-4 py-3">Popular Fields</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      University of Dubai
                    </td>
                    <td className="px-4 py-3">Local university</td>
                    <td className="px-4 py-3">
                      Business, IT, Engineering, Law
                    </td>
                    <td className="px-4 py-3">
                      Business Administration, Finance, IT
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Heriot-Watt University Dubai
                    </td>
                    <td className="px-4 py-3">International branch campus</td>
                    <td className="px-4 py-3">
                      Engineering, Business, Design
                    </td>
                    <td className="px-4 py-3">
                      Architecture, Engineering, Management
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      Middlesex University Dubai
                    </td>
                    <td className="px-4 py-3">International branch campus</td>
                    <td className="px-4 py-3">
                      Business, IT, Media, Law
                    </td>
                    <td className="px-4 py-3">
                      Business, Psychology, Media, Computing
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium">
                      American University in Dubai (AUD)
                    </td>
                    <td className="px-4 py-3">Local private university</td>
                    <td className="px-4 py-3">
                      Business, Engineering, Media
                    </td>
                    <td className="px-4 py-3">
                      Business, Engineering, Visual Communication
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Popular Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Popular Courses in Dubai
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Due to its strong economy and business environment, Dubai is
              especially popular for programmes related to business, IT,
              hospitality, design, and engineering. These fields are closely
              linked with local and regional job markets.
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
                    Business Administration, Accounting &amp; Finance,
                    Hospitality &amp; Tourism, Computer Science, Civil &amp;
                    Mechanical Engineering, Media &amp; Communication.
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
                    MBA, Project Management, Data Analytics, Engineering
                    Management, Marketing, International Business, Luxury Brand
                    Management, Supply Chain Management.
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
              Each university in Dubai has its own specific entry criteria, but
              below is a general overview of typical requirements for Bachelor’s
              and Master’s programmes:
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
                      Completion of 10+2 or equivalent from a recognised board,
                      with a minimum percentage often around{" "}
                      <span className="font-semibold">55–65%</span>, depending
                      on the programme and institution.
                    </td>
                    <td className="px-4 py-3">
                      A recognised Bachelor’s degree in a relevant field, usually
                      with at least{" "}
                      <span className="font-semibold">50–60%</span> overall,
                      subject to university requirements.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      English Language Proficiency
                    </td>
                    <td className="px-4 py-3">
                      Many institutions require{" "}
                      <span className="font-semibold">IELTS</span> or equivalent
                      scores, often around{" "}
                      <span className="font-semibold">5.5–6.0</span> overall for
                      undergraduate programmes.
                    </td>
                    <td className="px-4 py-3">
                      For postgraduate programmes, IELTS scores around{" "}
                      <span className="font-semibold">6.0–6.5</span> overall are
                      commonly expected, depending on the course.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Additional Requirements
                    </td>
                    <td className="px-4 py-3">
                      Academic transcripts, passport copy, Statement of Purpose
                      (SOP), and sometimes an interview or entrance assessment.
                    </td>
                    <td className="px-4 py-3">
                      Academic transcripts, CV, SOP, recommendation letters, and
                      sometimes relevant work experience for certain programmes
                      such as MBA.
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
              The typical application journey to study in Dubai includes:
            </p>
            <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 sm:text-base">
              <li>
                Shortlist universities and programmes that align with your
                academic profile, interests, and budget.
              </li>
              <li>
                Prepare required documents such as academic transcripts, English
                test scores (if needed), SOP, CV, and passport copy.
              </li>
              <li>
                Submit your applications online through university portals or
                authorised representatives and wait for offers.
              </li>
              <li>
                Once you receive an offer and complete fee/payment formalities,
                proceed with the student visa process as guided by the
                institution and relevant authorities.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-5 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqDataDubai.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-2xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-emerald-200 shadow-md shadow-emerald-100"
                        : "border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/40"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
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

    </>
  );
};

export default Dubai_Detail;
