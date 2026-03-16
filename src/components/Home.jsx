// HomeHero.jsx
import React from "react";

export default function HomeHero() {
  return (
    <section className="w-full bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20 lg:py-24">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
            Aspire Career Education Consultancy
          </span>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Turn Your Study Abroad Dream into Reality
          </h1>

          <p className="max-w-xl text-sm text-slate-100 sm:text-base">
            Get expert guidance for the UK, Australia, USA, Canada, Japan,
            Dubai and more. From course selection to visa support, we’re with
            you at every step.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-lg shadow-green-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Free Consultation
              <span className="ml-2 text-lg">↗</span>
            </a>

            <a
              href="/study-abroad"
              className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Explore Study Destinations
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
            {/* Glow blobs */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/60 blur-3xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-teal-900/60 blur-3xl" />

            <img
              src="https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg"
              alt="Students planning to study abroad"
              className="relative h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="relative border-t border-white/10 bg-slate-900/40 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                Study Abroad · UK · Australia · USA · Canada · Japan · Dubai
              </p>
              <p className="mt-1 text-xs text-slate-100/80">
                Personalised counselling, test preparation, documentation, and
                visa support under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
