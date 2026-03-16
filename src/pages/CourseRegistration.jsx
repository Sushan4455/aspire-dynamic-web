// TechFusionRegistration.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const COURSES = [
  { value: "", label: "Select Course", price: 0 },

  // ⭐ TechFusion / IT & Creative Courses (with prices)
  { value: "graphics", label: "Graphic Design – NPR 10,000", price: 10000 },
  { value: "video", label: "Video Editing – NPR 12,000", price: 12000 },
  { value: "canva", label: "Canva Design – NPR 6,000", price: 6000 },
  { value: "digital", label: "Digital Marketing – NPR 15,000", price: 15000 },
  {
    value: "bundle",
    label: "Full TechFusion Bundle – NPR 35,999",
    price: 35999,
  },

  // 🎤 Training Programs
  {
    value: "public-speaking",
    label: "Public Speaking Training",
    price: 0, // 🔁 set real price here if paid
  },
  {
    value: "life-skills",
    label: "Life Skills Training",
    price: 0, // 🔁 set real price here
  },
  {
    value: "accounting",
    label: "Accounting Training",
    price: 0, // 🔁 set real price here
  },

  // 🌍 Language Courses
  {
    value: "english-language",
    label: "English Language",
    price: 0, // 🔁 set real price here
  },
  {
    value: "japanese-language",
    label: "Japanese Language",
    price: 0, // 🔁 set real price here
  },
  {
    value: "german-language",
    label: "German Language",
    price: 0, // 🔁 set real price here
  },

  // 🎨 Extra IT / Creative Courses
  {
    value: "canva-design-course",
    label: "Canva Design",
    price: 0, // second variant if you ever need
  },
  {
    value: "digital-marketing-course",
    label: "Digital Marketing",
    price: 0,
  },
  {
    value: "ui-design",
    label: "UI Design",
    price: 0,
  },
  {
    value: "video-editing-course",
    label: "Video Editing",
    price: 0,
  },
  {
    value: "graphic-design-course",
    label: "Graphic Design",
    price: 0,
  },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby3_MfvtIkb05twj7sPnDbjcPgjh3Cckitw01CHGuuBJ9cxFVHLd9VBi6_OeCJEa6bx/exec";

export default function TechFusionRegistration() {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 course name sent from card:
  // <Link to="/course-registration" state={{ courseName: program.title }} />
  const selectedCourseName = location.state?.courseName || "";

  // 🔎 Find initial course value based on the name from state
  const resolveInitialCourseValue = () => {
    if (!selectedCourseName) return "";
    const match = COURSES.find((c) =>
      c.label.toLowerCase().startsWith(selectedCourseName.toLowerCase())
    );
    return match?.value || "";
  };

  const initialCourseValue = resolveInitialCourseValue();
  const initialCourseObj = COURSES.find((c) => c.value === initialCourseValue);
  const initialPrice = initialCourseObj?.price || 0;

  // Form state
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [course, setCourse] = useState(initialCourseValue);
  const [coupon, setCoupon] = useState("");
  const [txnCode, setTxnCode] = useState("");

  // Pricing state
  const [basePrice, setBasePrice] = useState(initialPrice);
  const [finalPrice, setFinalPrice] = useState(initialPrice);
  const [couponMessage, setCouponMessage] = useState("");
  const [couponError, setCouponError] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupType, setPopupType] = useState(null); // "bank" | "esewa" | null

  // Save initial price to localStorage if it came from card click
  useEffect(() => {
    if (initialPrice > 0) {
      window.localStorage.setItem("selectedPrice", initialPrice.toString());
      window.localStorage.setItem("finalPrice", initialPrice.toString());
    }
  }, [initialPrice]);

  const handleCourseChange = (value) => {
    setCourse(value);
    const selected = COURSES.find((c) => c.value === value);
    const price = selected?.price || 0;
    setBasePrice(price);
    setFinalPrice(price);
    setCoupon("");
    setCouponMessage("");
    setCouponError("");

    window.localStorage.setItem("selectedPrice", price.toString());
    window.localStorage.setItem("finalPrice", price.toString());
  };

  const applyCoupon = () => {
    setCouponMessage("");
    setCouponError("");

    if (!basePrice) {
      setCouponError("Please select a course first.");
      return;
    }

    if (!coupon.trim()) {
      setCouponError("Enter coupon code.");
      return;
    }

    const code = coupon.trim().toUpperCase();
    let newPrice = basePrice;

    if (code === "ACEC500") {
      newPrice = basePrice - 500;
      setCouponMessage("Discount applied: NPR 500 off.");
    } else if (code === "ACEC50") {
      newPrice = Math.round(basePrice * 0.5);
      setCouponMessage("Discount applied: 50% off.");
    } else {
      setCouponError("Invalid coupon code.");
      return;
    }

    if (newPrice < 0) newPrice = 0;
    setFinalPrice(newPrice);
    window.localStorage.setItem("finalPrice", newPrice.toString());
  };

  const showPricingInfo = () => {
    alert(
      "Course Pricing:\n" +
        "• Graphic Design – NPR 10,000\n" +
        "• Video Editing – NPR 12,000\n" +
        "• Canva Design – NPR 6,000\n" +
        "• Digital Marketing – NPR 15,000\n" +
        "• Full TechFusion Bundle – NPR 35,999"
    );
  };

  const validateForm = () => {
    if (
      !fullName.trim() ||
      !gender ||
      !contact.trim() ||
      !email.trim() ||
      !address.trim() ||
      !preferredTime ||
      !course
    ) {
      alert("Please fill all registration fields.");
      return false;
    }

    if (!basePrice) {
      // ❗ If some courses are free / unpriced, remove this block or change behavior
      alert("Please select a course with a valid price.");
      return false;
    }

    if (!txnCode.trim()) {
      alert("Please enter transaction/reference code.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Save to localStorage like original
    window.localStorage.setItem("name", fullName);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("phone", contact);
    window.localStorage.setItem("gender", gender);
    window.localStorage.setItem("address", address);
    window.localStorage.setItem("preferredTime", preferredTime);
    window.localStorage.setItem("selectedPrice", basePrice.toString());
    window.localStorage.setItem("finalPrice", finalPrice.toString());

    const payload = {
      name: fullName.trim(),
      email: email.trim(),
      phone: contact.trim(),
      gender,
      address: address.trim(),
      preferredTime,
      course,
      selectedPrice: basePrice,
      finalPrice: finalPrice,
      txnCode: txnCode.trim(),
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });

      const text = await response.text();
      let result = null;
      try {
        result = JSON.parse(text);
      } catch {
        result = null;
      }

      if (!response.ok || !result || result.status !== "success") {
        alert("There was a problem saving to the sheet. Please contact admin.");
        return;
      }

      alert("Thank you! Your registration has been submitted.");
      // navigate("/thank-you");
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openBankPopup = () => setPopupType("bank");
  const openEsewaPopup = () => setPopupType("esewa");
  const closePopup = () => setPopupType(null);

  const formattedPrice = `NPR ${finalPrice.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900 flex flex-col md:flex-row">
     {/* LEFT PANEL */}
<section className="relative w-full md:w-1/2 bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 text-white px-6 sm:px-10 lg:px-16 py-10 flex flex-col justify-between gap-10 overflow-hidden">
  {/* Decorative blobs */}
  <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-emerald-900/40 blur-3xl" />

  {/* Logo + heading */}
  <div className="relative">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-white/70 bg-white/10 flex items-center justify-center font-bold tracking-[0.16em] text-[10px] sm:text-xs shadow-lg shadow-emerald-900/40">
        ACEC
      </div>
      <div className="text-[11px] sm:text-xs leading-snug text-emerald-50/95">
        Aspire Career Education Consultancy
        <br />
        Training &amp; IT Programs
      </div>
    </div>

    <div className="mt-10 max-w-xl space-y-4">
      <span className="inline-flex items-center rounded-full bg-white/10 border border-white/30 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.24em] backdrop-blur">
        Course Registration · Online &amp; In-person
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-semibold leading-tight">
        Upgrade your
        <br />
        skills with structured training.
      </h1>

      <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed">
        Register for language classes, soft skills, and IT / creative courses in
        one place. Flexible timings, guided learning, and hands-on practice
        designed for students and working professionals.
      </p>

      {/* Quick badges */}
      <div className="mt-4 flex flex-wrap gap-3 text-[11px] sm:text-xs">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-pulse" />
          10+ active training programs
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/20">
          <span className="text-base">📅</span>
          Morning · Day · Evening batches
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/20">
          <span className="text-base">🎓</span>
          Ideal for students &amp; job seekers
        </span>
      </div>
    </div>
  </div>

 {/* Bottom info card – enhanced */}
<div className="relative mt-6 max-w-xl group">
  {/* Glow border on hover */}
  <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-lime-300/60 via-emerald-300/40 to-cyan-300/60 opacity-0 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-300" />

  <div className="relative rounded-2xl bg-slate-950/30 border border-white/18 px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-xl shadow-xl group-hover:translate-y-[-2px] group-hover:shadow-2xl transition-all duration-300">
    {/* Top badge */}
    <div className="mb-3 flex items-center justify-between gap-3 text-[10px] sm:text-[11px] text-emerald-50/85">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 border border-white/20">
        <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-pulse" />
        Students love our trainings
      </span>
      <span className="hidden sm:inline-flex items-center gap-1">
        <span className="text-xs">📊</span>
        200+ registrations this year
      </span>
    </div>

    <div className="flex items-center justify-between gap-4 flex-wrap">
      {/* Left: mini testimonial */}
      <div className="flex items-start gap-3 max-w-xs">
        <div className="w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center text-xs font-semibold text-slate-900">
          S
        </div>
        <div>
          <p className="text-[11px] sm:text-xs text-emerald-50/90 leading-snug">
            “The flexible timing and practical sessions helped me balance work,
            college and skill-building.”
          </p>
          <p className="mt-1 text-[10px] text-emerald-100/80">
            Suman K. · Digital Marketing Trainee
          </p>
        </div>
      </div>

      {/* Right: stats */}
      <div className="flex flex-col items-end text-right gap-1">
        <p className="text-xs font-semibold text-lime-200 flex items-center gap-1">
          4.9/5 rating
          <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full border border-white/20">
            Latest batch
          </span>
        </p>
        <p className="text-[11px] text-emerald-50/80">From verified feedback</p>
        <div className="flex items-center gap-0.5 text-yellow-300 text-sm">
          ★★★★★
        </div>
      </div>
    </div>

    {/* Bottom strip with “system” info */}
    <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-emerald-100/85">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Secure payment &amp; verified registration
        </span>
        <span className="hidden sm:inline-flex items-center gap-1">
          <span className="text-xs">⚡</span>
          Instant confirmation after submission
        </span>
      </div>

      {/* Seats / urgency bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-emerald-900/60 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300" />
        </div>
        <div className="flex flex-col text-[10px] text-emerald-50/85 text-right">
          <span>Limited seats left</span>
          <span className="opacity-80">Next batch starting soon</span>
        </div>
      </div>
    </div>
  </div>
</div>

</section>


      {/* RIGHT PANEL */}
      <section className="w-full md:w-3/5 bg-white px-5 sm:px-8 lg:px-14 py-8 flex flex-col gap-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            <span className="text-lg">←</span>
            Go Back
          </button>

          <a
            href="#"
            className="text-xs sm:text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            Watch Tutorial
          </a>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Registration &amp; Payment
          </h2>
        </div>

        {/* Form wrapper */}
        <div className="max-w-3xl flex flex-col gap-7">
          {/* Registration details */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Registration Details
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Please fill your details carefully. All fields are required.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              {/* Contact */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Contact No.
                </label>
                <input
                  type="tel"
                  placeholder="98XXXXXXXX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="City, Area"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Preferred Time for Live Session
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="">Select preferred time</option>
                  <option>Morning (7–9 AM)</option>
                  <option>Day (1–3 PM)</option>
                  <option>Evening (6–8 PM)</option>
                </select>
              </div>

              {/* Course */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Select Course
                </label>
                <select
                  value={course}
                  onChange={(e) => handleCourseChange(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                >
                  {COURSES.map((c) => (
                    <option key={c.value || "empty"} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing Info button */}
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={showPricingInfo}
                  className="inline-flex items-center rounded-xl border border-emerald-500 bg-white px-3.5 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50 transition"
                >
                  View Course Pricing
                </button>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Payment details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Payment Details
              </h3>
            </div>

            {/* Coupon */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-2">
                Discount Coupon (optional)
              </label>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1">
                <input
                  type="text"
                  placeholder="ACEC500 or ACEC50"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-sm py-1"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="rounded-full border border-emerald-500 bg-white px-3.5 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition"
                >
                  ⟳ Apply Discount
                </button>
              </div>
              {couponMessage && (
                <p className="mt-1 text-[11px] text-emerald-600">
                  {couponMessage}
                </p>
              )}
              {couponError && (
                <p className="mt-1 text-[11px] text-red-500">{couponError}</p>
              )}
            </div>

            {/* Transaction code + payment options */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-2">
                Payment Transaction / Reference Code
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1">
                  <input
                    type="text"
                    placeholder="54TEU87"
                    value={txnCode}
                    onChange={(e) => setTxnCode(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-sm py-1"
                  />
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full border border-slate-200 bg-white text-[11px]"
                    title="Enter the transaction/reference code from your bank or eSewa payment."
                  >
                    i
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={openBankPopup}
                    className="rounded-xl border border-emerald-600 bg-white px-3.5 py-2 text-xs sm:text-[13px] font-semibold text-emerald-700 hover:bg-emerald-50 whitespace-nowrap transition"
                  >
                    Bank Details
                  </button>
                  <button
                    type="button"
                    onClick={openEsewaPopup}
                    className="rounded-xl border border-emerald-600 bg-white px-3.5 py-2 text-xs sm:text-[13px] font-semibold text-emerald-700 hover:bg-emerald-50 whitespace-nowrap transition"
                  >
                    eSewa Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Total price */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold">
                Total Price
              </span>
              {basePrice > 0 && finalPrice !== basePrice && (
                <span className="text-xs text-emerald-600 font-medium mt-0.5">
                  Discounted from NPR {basePrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900">
              {formattedPrice}
            </span>
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Registration & Payment"}
            </button>
          </div>
        </div>
      </section>

      {/* POPUP OVERLAY */}
      {popupType && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-white px-5 py-5 sm:px-7 sm:py-6 shadow-2xl">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs hover:bg-slate-200"
            >
              ✕
            </button>

            {popupType === "bank" && (
              <div className="space-y-1.5 text-sm text-slate-800">
                <h3 className="text-base font-semibold mb-1.5">
                  Nabil Bank – Account Details
                </h3>
                <p>
                  <strong>Bank Name:</strong> Nabil Bank
                </p>
                <p>
                  <strong>Acc Name:</strong> Learn Nepal Academy Institute Pvt.
                  Ltd
                </p>
                <p>
                  <strong>Account No:</strong> 0120 1017 5041 88
                </p>
                <p>
                  <strong>Mobile No:</strong> 9846 993075
                </p>
                <p>
                  <strong>Swift Code:</strong> NARBNPKA
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  After payment, paste the transaction/reference code in the
                  form and click <strong>Submit</strong>.
                </p>
              </div>
            )}

            {popupType === "esewa" && (
              <div className="space-y-1.5 text-sm text-slate-800">
                <h3 className="text-base font-semibold mb-1.5">
                  eSewa Wallet Details
                </h3>
                <p>
                  <strong>Name:</strong> Learn Nepal Academy
                </p>
                <p>
                  <strong>eSewa ID:</strong> 98XXXXXXXX
                </p>
                <p>
                  <strong>Purpose:</strong> TechFusion Essentials Course
                </p>
                <p>
                  <strong>Amount:</strong>{" "}
                  {`NPR ${finalPrice.toLocaleString("en-IN")}`}
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  After paying via eSewa, copy the transaction/reference ID and
                  paste it in the code field, then click{" "}
                  <strong>Submit</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
