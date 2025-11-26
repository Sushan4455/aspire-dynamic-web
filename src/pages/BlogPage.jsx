import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbynlH8HAdsS6QtwPUk9OFglhtyNO9knZJcZqYM6cTR7CNiqWm-aWDQojsNXHulhY_z6EQ/exec";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOG_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog list fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <section className="w-full bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
              Blog
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Latest Guides & Updates
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Explore articles on visas, universities, exams, and study abroad
              tips specially written for Nepali students.
            </p>
          </div>

          {/* List */}
{loading ? (
  <p className="text-center text-sm text-slate-500">Loading blogs...</p>
) : posts.length === 0 ? (
  <p className="text-center text-sm text-slate-500">
    No blogs have been published yet.
  </p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
    {posts.map((post) => (
      <article
        key={post.id}
        className="group bg-white rounded-3xl border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.15)] transition"
      >
        {post.image && (
          <div className="h-44 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-sm text-slate-600 flex-1 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-2 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              {/* optional: date if your API has it */}
            </span>

            {/* ✅ Link to blog detail page */}
            <Link
              to={`/blogs/${post.id}`}
              className="text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 inline-flex items-center"
            >
              Read article
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
)}
        </div>
      </section>


    </>
  );
}
