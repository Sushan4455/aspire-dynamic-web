import React, { useState } from "react";

const faqData = [
  {
    question: "Is studying in the UK worth it for Nepali students?",
    answer:
      "Yes! Studying in the UK opens the door to great career opportunities worldwide, access to top universities, and a wide variety of quality courses.",
  },
  {
    question: "What is the best time to apply for the UK from Nepal?",
    answer:
      "You should apply at least six months before your course begins in the UK. This gives you enough time for university offers, CAS, visa processing, and travel arrangements.",
  },
  {
    question: "Is a gap year accepted to study in the UK?",
    answer:
      "Yes. UK universities accept gap years if you provide a valid reason with supporting documents, such as work experience, additional studies, or personal circumstances.",
  },
  {
    question: "Can I get a full scholarship to study in the UK from Nepal?",
    answer:
      "Yes! Scholarships like Chevening and Commonwealth, along with various university-specific awards, can offer full or partial funding for eligible international students.",
  },
  {
    question: "Can I change my course after arriving in the UK from Nepal?",
    answer:
      "In many cases, yes—but it depends on your university’s policy and visa conditions. You must get approval from your university, and in some cases inform the Home Office.",
  },
  {
    question: "How many intakes are there for UK universities yearly?",
    answer:
      "Most UK universities have 3 intakes: September (main intake), January/February (winter), and sometimes April/May (summer), depending on the course and institution.",
  },
  {
    question: "How many hours can I work on a UK student visa?",
    answer:
      "Typically, you can work up to 20 hours per week during term time and full-time during holidays, depending on your visa type and course level.",
  },
];

const UKDetails = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="uk-details" className="w-full bg-slate-50">
     {/* Banner / Hero */}
<div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
  {/* Soft light overlay */}
  <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_50%)]" />

  <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
    {/* Left content */}
    <div className="flex-1 space-y-6">
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
        Study Destination · United Kingdom
      </span>

      <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        Study in the United Kingdom
      </h1>

      <p className="max-w-xl text-sm text-slate-100 sm:text-base">
        Begin your academic journey in one of the world’s most recognised study
        destinations. Explore top universities, scholarships, and career
        prospects tailored for Nepalese students.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="/contact-us"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-lg shadow-green-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Book an appointment
          <span className="ml-2 text-lg">↗</span>
        </a>

        <span className="text-xs text-slate-100/80 sm:text-sm">
          Get personalised guidance for your UK study plan.
        </span>
      </div>
    </div>

    {/* Right image */}
    <div className="flex-1">
      <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
        {/* Green glow effects */}
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/40 blur-3xl" />
        <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-green-900/40 blur-3xl" />

        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          alt="Study in UK"
          className="relative h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="relative border-t border-white/10 bg-slate-900/40 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
            UK · Top Study Destination
          </p>
          <p className="mt-1 text-xs text-slate-100/80">
            World-class education, diverse culture, and strong career outcomes
            after graduation.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:py-16">
        {/* Why Study in UK */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Study in the UK?
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Studying in the UK opens the door to world-class education and
            excellent career growth. The UK is home to top universities that
            offer practical, industry-focused courses designed to build real
            skills. With shorter program durations, you can complete your degree
            faster and save both time and money.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            The UK is also known for its safe, multicultural environment where
            international students feel welcomed and supported. After completing
            your studies, the post-study work visa (PSW) allows you to stay and
            work in the UK, giving you valuable global experience.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Choosing the UK means choosing quality education, better
            opportunities, and a bright future.
          </p>
        </section>

        {/* Top Universities */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Top Universities in the UK
            </h2>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              High ranked & globally recognised
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">University Name</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Ranking</th>
                  <th className="px-4 py-3">Popular Courses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Oxford
                  </td>
                  <td className="px-4 py-3">Oxford</td>
                  <td className="px-4 py-3">#1 (UK)</td>
                  <td className="px-4 py-3">Medicine, Law, Business</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Cambridge
                  </td>
                  <td className="px-4 py-3">Cambridge</td>
                  <td className="px-4 py-3">#2 (UK)</td>
                  <td className="px-4 py-3">
                    Engineering, Science, Arts
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    Imperial College London
                  </td>
                  <td className="px-4 py-3">London</td>
                  <td className="px-4 py-3">#3 (UK)</td>
                  <td className="px-4 py-3">
                    Engineering, Technology, Medicine
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Manchester
                  </td>
                  <td className="px-4 py-3">Manchester</td>
                  <td className="px-4 py-3">#6 (UK)</td>
                  <td className="px-4 py-3">
                    Computer Science, Business, Engineering
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium">
                    University of Edinburgh
                  </td>
                  <td className="px-4 py-3">Edinburgh</td>
                  <td className="px-4 py-3">#7 (UK)</td>
                  <td className="px-4 py-3">
                    Arts, Medicine, Social Sciences
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Popular Courses in the UK
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            International students in the UK often choose courses that offer
            strong career opportunities and global recognition. Some of the top
            choices include Engineering, Business &amp; Management, and Computer
            Science. These fields provide practical skills, high employability,
            and strong industry demand, making them ideal for students planning
            a successful future.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* UG Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Undergraduate Courses
                </h3>
              </div>
              <div className="px-4 py-3 text-sm text-slate-700">
                <p className="font-medium text-slate-800">Courses</p>
                <p className="mt-1">
                  Business &amp; Management, Computer Science, Engineering
                  (Mechanical, Civil, Electrical), Nursing, Marketing &amp;
                  Digital Marketing
                </p>
              </div>
            </div>

            {/* Masters Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Master’s Courses
                </h3>
              </div>
              <div className="px-4 py-3 text-sm text-slate-700">
                <p className="font-medium text-slate-800">Courses</p>
                <p className="mt-1">
                  MBA (Master of Business Administration), Data Science &amp;
                  Analytics, Finance &amp; Accounting, International Relations,
                  Environmental Science
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Eligibility Criteria &amp; Admission Requirements
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Each university sets its own entry requirements, but the following
            gives you a general idea of what is expected for Bachelor’s and
            Master’s programmes in the UK:
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
                    Completion of 10+2 or international equivalent from a
                    recognised institution with a minimum aggregate of{" "}
                    <span className="font-semibold">around 60–65%</span> (or
                    equivalent grade), depending on the university.
                  </td>
                  <td className="px-4 py-3">
                    A completed three or four-year Bachelor’s degree (usually
                    First Class or equivalent) from a recognised university with
                    a minimum aggregate of{" "}
                    <span className="font-semibold">around 60%</span> or above.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    English Language Proficiency
                  </td>
                  <td className="px-4 py-3">
                    Commonly{" "}
                    <span className="font-semibold">IELTS 6.0–6.5</span>{" "}
                    overall with no component below{" "}
                    <span className="font-semibold">5.5–6.0</span> (varies by
                    programme and institution).
                  </td>
                  <td className="px-4 py-3">
                    Typically{" "}
                    <span className="font-semibold">IELTS 6.0–7.5</span>{" "}
                    overall depending on the course; many programmes request{" "}
                    <span className="font-semibold">6.5</span> with no band
                    below <span className="font-semibold">6.0</span>.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Additional Requirements
                  </td>
                  <td className="px-4 py-3">
                    May include academic transcripts, personal statement,
                    references, and portfolios for creative or design-related
                    disciplines.
                  </td>
                  <td className="px-4 py-3">
                    Often includes academic transcripts, CV, personal statement,
                    references, and occasionally GMAT/GRE scores or portfolios,
                    depending on the course.
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
            Students who plan to study in the UK must secure admission to a
            recognised institution and obtain a valid student visa. The
            university application process generally follows these steps:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 sm:text-base">
            <li>
              Explore different UK universities and choose the one that best
              matches your academic interests and career goals.
            </li>
            <li>
              Collect all necessary documents in advance, including transcripts,
              test scores, statements, and references.
            </li>
            <li>
              Submit your application to your selected course and upload all
              required documents before the deadline.
            </li>
            <li>
              Once the university issues your CAS (Confirmation of Acceptance
              for Studies), you can begin the process of applying for your UK
              student visa.
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
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
      </div>
    </section>
  );
};

export default UKDetails;
