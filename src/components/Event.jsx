// src/components/EventsSection.jsx
import React from "react";

const events = [
  {
    title: "UK University Open Day",
    date: "15 Dec 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Aspire Office, Kathmandu",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSIwKf8VcIV0y9znmExKFHaS3-2IvIcDJ2ktWLwu-61x7xWztr8_dqAiHCmZOFK4TCuubNkan3t4QCKCjkoJiGQaLQ&s=19",
  },
  {
    title: "Free Visa Counselling Session",
    date: "20 Dec 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Study Abroad Seminar – Australia",
    date: "28 Dec 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Hotel Annapurna, Kathmandu",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

export default function EventsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
            Our Events
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Upcoming Events & Seminars
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Join our expert sessions to get complete guidance on studying abroad.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-slate-600">
                  <p>📅 <span className="font-medium">{event.date}</span></p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>

                {/* Button */}
                <button className="mt-5 w-full bg-green-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-50 transition">
            View All Events →
          </button>
        </div>

      </div>
    </section>
  );
}
