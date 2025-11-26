import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";



const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbynlH8HAdsS6QtwPUk9OFglhtyNO9knZJcZqYM6cTR7CNiqWm-aWDQojsNXHulhY_z6EQ/exec";

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError("");

    // Expect Apps Script to return ONE post object for ?id=...
    fetch(`${BLOG_API_URL}?id=${encodeURIComponent(id)}`)
      .then((res) => res.json())
      .then((data) => {
        // data can be object or array[0], handle both
        const blog = Array.isArray(data) ? data[0] : data;
        if (!blog) {
          setError("Blog not found.");
        } else {
          setPost(blog);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog detail fetch error:", err);
        setError("Something went wrong while loading the blog.");
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="text-xs md:text-sm text-slate-500 mb-6 flex items-center gap-1">
            <Link to="/blogs" className="hover:text-indigo-600">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-slate-700 truncate max-w-[60%]">
              {post?.title || "Loading..."}
            </span>
          </div>

          {/* Loading / Error */}
          {loading && (
            <p className="text-sm text-slate-500">Loading blog content…</p>
          )}
          {error && !loading && (
            <p className="text-sm text-red-500 mb-4">{error}</p>
          )}

          {!loading && !error && post && (
            <>
              {/* Title */}
              <header className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-indigo-500 font-semibold mb-2">
                  Aspire Blog
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
                  {post.title}
                </h1>
                {post.subtitle && (
                  <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                    {post.subtitle}
                  </p>
                )}
                {/* Optional date from sheet if you have it */}
                {post.date && (
                  <p className="mt-2 text-xs text-slate-500">
                    Published on {post.date}
                  </p>
                )}
              </header>

              {/* Hero Image */}
              {post.image && (
                <div className="mb-8 rounded-3xl overflow-hidden shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[220px] md:h-[320px] object-cover"
                  />
                </div>
              )}

              {/* Blog Body – HTML from Google Docs */}
              <article className="bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-6 md:p-8 text-slate-800 leading-relaxed text-[15px] md:text-[16px]">
                <div
                  className="space-y-4 blog-content"
                  // content / html / body – support whichever field you send
                  dangerouslySetInnerHTML={{
                    __html:
                      post.html ||
                      post.content ||
                      post.body ||
                      "<p>No content found.</p>",
                  }}
                />
              </article>
            </>
          )}
        </div>
      </main>


    </>
  );
}
