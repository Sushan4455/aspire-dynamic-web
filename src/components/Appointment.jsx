import React, { useState } from "react";
import girl from "../assets/appointmentgirl.png";

export default function AppointmentSection() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzbNh__S66x5l6sb_eSRXTjDuUrM1I3L64HDr5RU-SVYUQ7zyDIdZQ565yE6kUrSUDYXA/exec";

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting your appointment...");

    const form = e.target;

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();

      if (data.status === "success") {
        setStatus("✅ Your appointment has been successfully submitted!");
        form.reset();
      } else {
        setStatus("❌ Error: " + data.message);
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again.");
    }
  };

  const goBack = () => {
    window.location.href = "index.html";
  };

  return (
    <section className="w-full bg-[#E8F8FF] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#E8F8FF] rounded-[32px] md:rounded-[40px] flex flex-col lg:flex-row items-stretch gap-10 md:gap-12">
          {/* LEFT: FORM */}
          <div className="w-full lg:w-3/5 px-5 sm:px-8 md:px-10 py-8 md:py-10 relative">

            {/* Heading + subtitle */}
            <div className="mb-7 md:mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-5 w-1 rounded-full bg-amber-500" />
                <p className="text-[13px] uppercase tracking-[0.25em] text-amber-600 font-semibold">
                  Aspire Career
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                Book Your Study Abroad Appointment
              </h2>
              <p className="mt-3 text-sm md:text-[15px] text-slate-600 max-w-xl">
                Schedule your free counseling session with Aspire Career.
              </p>
            </div>

            {/* FORM – same content as your HTML */}
            <form onSubmit={handleSubmit} className="space-y-4" id="appointmentForm">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Mode + Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Preferred Mode of Counselling
                  </label>
                  <select
                    name="mode"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-[15px] outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  >
                    <option value="">Preferred Mode of Counselling</option>
                    <option>In-Person</option>
                    <option>Online</option>
                    <option>Phone Call</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Study Level
                  </label>
                  <select
                    name="level"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-[15px] outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  >
                    <option value="">Select Study Level</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                </div>
              </div>

              {/* Course + Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Preferred Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    placeholder="Preferred Course"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Preferred Destination
                  </label>
                  <select
                    name="country"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-[15px] outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  >
                    <option value="">Preferred Destination</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-[15px] outline-none resize-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full md:w-auto md:min-w-[220px] inline-flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white text-sm md:text-[15px] font-semibold px-8 py-3.5 shadow-[0_14px_30px_rgba(37,99,235,0.45)] transition active:scale-[0.99]"
              >
                Book Appointment
              </button>

              {status && (
                <p className="text-xs md:text-sm mt-3 text-emerald-600">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: IMAGE + SHAPES */}
          <div className="w-full lg:w-2/5 flex items-center justify-center relative">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Colored shapes behind */}
              <div className="absolute -top-6 -right-4 w-40 h-40 md:w-52 md:h-52 rounded-[40px] bg-[#3CCB3C] -z-10" />
              <div className="absolute bottom-0 right-10 w-32 h-24 md:w-40 md:h-28 rounded-[40px] bg-[#FF8A3C] -z-10" />
              <div className="absolute bottom-[-14px] left-4 w-40 h-32 md:w-52 md:h-36 rounded-[40px] bg-[#007BFF] -z-10" />

              {/* Student image */}
              <img
                src={girl}
                alt="Student"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
