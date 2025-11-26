// src/components/LatestBlogsSection.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbynlH8HAdsS6QtwPUk9OFglhtyNO9knZJcZqYM6cTR7CNiqWm-aWDQojsNXHulhY_z6EQ/exec";

export default function LatestBlogsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(BLOG_API_URL);
        const data = await res.json(); // same as your JS: "posts"
        setPosts(data || []);          // adjust if your API wraps it (e.g. {posts: [...]})
      } catch (err) {
        console.error("Blog list error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
          Latest Blogs
        </h2>

        {/* Loading state */}
        {loading && (
          <p className="text-center text-sm text-slate-500">
            Loading latest blogs...
          </p>
        )}

        {/* No posts */}
        {!loading && posts.length === 0 && (
          <p className="text-center text-sm text-slate-500">
            No blogs found. Please add some rows in your Google Sheet.
          </p>
        )}

    
{!loading && posts.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {posts.map((post) => (
      <article
        key={post.id}
        className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
      >
        {/* Image */}
        {post.image && (
          <div className="h-44 md:h-48 w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* ✅ REPLACED <a> WITH <Link> */}
        <Link
          to={`/blogs/${post.id}`}
          className="flex-1 flex flex-col p-5 md:p-6"
        >
          <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
            Read more →
          </span>
        </Link>
      </article>
    ))}
  </div>
)}

      </div>
    </section>
  );
}
