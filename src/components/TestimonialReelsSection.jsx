// TestimonialReelsSection.jsx
import React from "react";

const TestimonialReelsSection = () => {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Student Video Testimonials
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Real experiences from our students, captured in short video reels.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reel 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F500944862627632%2F&show_text=false&width=267&t=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          {/* Reel 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4032176413730273%2F&show_text=false&width=269&t=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          {/* Reel 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1028319108912728%2F&show_text=false&width=267&t=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          {/* Empty for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialReelsSection;
