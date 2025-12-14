import React from "react";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later: connect to Google Sheet / backend
    alert("Thank you for reaching out! We’ll get back to you soon.");
  };

  return (
    <section className="relative w-full py-20 bg-slate-950/5 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
              Contact Aspire
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Let’s Talk About Your Study Plans
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl">
              Reach out to us for counselling, course selection, visa guidance, or any
              questions about studying abroad. Our counsellors are here to help.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 bg-white/70 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Average response time: under 24 hours</span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT – Office info + map */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Office Information
                </h3>
                <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 border border-emerald-100">
                  Kathmandu • Nepal
                </span>
              </div>

              <div className="space-y-5 text-sm md:text-[15px] text-slate-700">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-lg">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p>Sukedhara, Kathmandu, Nepal</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-lg">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p>01-5925762, 9851352285</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-lg">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p>aspire.acec@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                    Find Us
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Aspire Career Education Consultancy
                  </p>
                </div>
                <span className="text-[11px] text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                  Open in Google Maps
                </span>
              </div>
              <div className="h-[260px] md:h-[300px]">
                <iframe
                  title="Aspire Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4753.738012095279!2d85.34156586643776!3d27.730182899133865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c54e8c4075%3A0xd5c17fa4a9636adc!2sAspire%20Career%20Education%20Consultancy%20(ACEC)!5e0!3m2!1sen!2snp!4v1764204035224!5m2!1sen!2snp"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT – Contact form */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-[0_22px_60px_rgba(15,23,42,0.12)] p-7 md:p-9">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Share your questions and we’ll connect you with the right counsellor
              for your study destination or course.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="98XXXXXXXX"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Button + helper text */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-2xl bg-green-500 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(79,70,229,0.4)] hover:shadow-[0_22px_50px_rgba(79,70,229,0.6)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send Message
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by Aspire
                  Career for counselling and guidance.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
