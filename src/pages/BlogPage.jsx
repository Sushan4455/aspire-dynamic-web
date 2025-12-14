// src/pages/LatestBlogsFromGAS.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// adjust path if your components folder differs
import BlogCard from "../components/Blog"; // <-- use this if your file default-exports the card as BlogCard
import Navbar from "../components/Navbar";
// If your file default-exports a component named `Blog`, change above to:
// import Blog from "../components/blog";

const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbynlH8HAdsS6QtwPUk9OFglhtyNO9knZJcZqYM6cTR7CNiqWm-aWDQojsNXHulhY_z6EQ/exec";

export default function LatestBlogsFromGAS() {
  const [posts, setPosts] = useState(null); // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchBlogs() {
      try {
        setError(null);
        setPosts(null);

        const res = await fetch(BLOG_API_URL);
        const rawText = await res.text();

        let data;
        try {
          data = rawText ? JSON.parse(rawText) : null;
        } catch (parseErr) {
          console.error("GAS returned non-JSON:", rawText);
          throw new Error("Invalid JSON from blog API");
        }

        console.log("raw blog data:", data);

        // Normalize into an array
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (data && typeof data === "object") {
          if (Array.isArray(data.posts)) items = data.posts;
          else if (Array.isArray(data.data)) items = data.data;
          else if (Array.isArray(data.result)) items = data.result;
          else {
            // fallback to object values if many values look like posts
            const values = Object.values(data).filter(Boolean);
            const haveTitle = values.filter(v => v && typeof v === "object" && ("title" in v || "name" in v)).length;
            if (values.length > 0 && haveTitle >= Math.floor(values.length / 2)) {
              items = values;
            } else {
              items = [];
            }
          }
        } else {
          items = [];
        }

        const cleaned = items
          .filter(Boolean)
          .map(item => (typeof item === "object" ? item : { title: String(item) }));

        if (!cancelled) setPosts(cleaned);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        if (!cancelled) {
          setError(err.message || "Failed to fetch blogs");
          setPosts([]); // show empty state
        }
      }
    }

    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white text-slate-900">
      <header className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block text-indigo-600 font-semibold tracking-widest text-sm mb-4">
            BLOG
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Latest Guides & Updates
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600">
            Explore articles on visas, universities, exams, and study abroad tips
            specially written for Nepali students.
          </p>

          {posts && posts.length === 0 && (
            <p className="mt-8 text-slate-500">No blogs have been published yet.</p>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 p-4 rounded-md bg-red-50 text-red-700 border border-red-100">
            Error loading blogs: {error}
          </div>
        )}

        {posts === null && (
          <div className="text-center py-16">
            <span className="inline-block animate-pulse bg-slate-200 h-4 w-44 rounded"></span>
            <div className="mt-4 text-slate-500">Loading articles…</div>
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, idx) => {
              // Map your GAS fields to the card's props.
              // Adapt these keys if your sheet uses different column names.
              const normalized = {
                id: p.id ?? p.ID ?? p.slug ?? p.title ?? `post-${idx}`,
                title: p.title ?? p.name ?? p.heading ?? `Untitled ${idx + 1}`,
                excerpt: p.excerpt ?? p.summary ?? p.description ?? "",
                image: p.image ?? p.thumbnail ?? p.img ?? "",
                tags:
                  Array.isArray(p.tags) ? p.tags
                  : typeof p.tags === "string" ? p.tags.split(",").map(t => t.trim()).filter(Boolean)
                  : [],
                author: p.author ?? p.by ?? p.writer ?? "Team",
                date: p.date ?? p.published_at ?? p.publishedAt ?? "",
                minutes: p.minutes ?? p.read_time ?? null,
                _raw: p,
              };

              // Ensure the card receives a defined `post` prop (avoids destructure crash)
              return (
                <div key={normalized.id ?? `post-${idx}`}>
                  {/* If your component file exports default with a different name, adjust above import */}
                  <BlogCard post={normalized} />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
    
    </>
  );
}
