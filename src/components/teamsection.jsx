import React from "react";

// ✅ Import all images from src/team
import roshanaImg from "../assets/team/roshana.jpg";
import bidhyaImg from "../assets/team/bidhya.jpg";
import sushanImg from "../assets/team/sushan.jpg";
import suzuImg from "../assets/team/suzu-karki.jpg";
import priyankaImg from "../assets/team/roy.jpg";
import bimalaImg from "../assets/team/office-helper.jpg";
import sabnamImg from "../assets/team/sabnam.jpg";
import nishantImg from "../assets/team/nishant.jpg";


const team = [
  { name: "Roshana Sapkota", img: roshanaImg },
  { name: "Bidhya Raj Shiwakoti", img: bidhyaImg },
  { name: "Sushan Karki", img: sushanImg },
  { name: "Suzu Karki", img: suzuImg },
  { name: "Priyanka Roy", img: priyankaImg },
  { name: "Bimala Achami", img: bimalaImg },
  { name: "Sabnam Ghimire", img: sabnamImg },
  { name: "Nishant Oli", img: nishantImg },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold">
            Our Team
          </p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Meet Our Expert Team
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            A team of passionate mentors and counselors dedicated to helping you
            succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="group w-full max-w-[260px] bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              {/* Square Image */}
              <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden border-4 border-emerald-100 group-hover:border-emerald-400 transition-all duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-semibold text-slate-800 tracking-wide">
                {member.name}
              </h3>

              {/* Decorative Line */}
              <div className="mt-3 w-12 h-1.5 bg-emerald-400 mx-auto rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Center last 2 cards on desktop */}
        <style>{`
          @media (min-width: 768px) {
            .grid > :nth-child(9) {
              grid-column: 2 / span 1;
            }
            .grid > :nth-child(10) {
              grid-column: 3 / span 1;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
