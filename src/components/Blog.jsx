// src/pages/LatestBlogsFromGAS.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "../components/blog"; // adjust path/name if needed

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

        const res = await fetch(BLOG_API_URL, { method: "GET" });

        // Debug: status + CORS issues
        console.log("GAS fetch status:", res.status, res.statusText);

        const rawText = await res.text();

        let data;
        try {
          data = rawText ? JSON.parse(rawText) : null;
        } catch (parseErr) {
          console.error("Failed to parse JSON from GAS response:", rawText);
          throw new Error("Invalid JSON response from blog API");
        }

        console.log("raw blog data:", data);

        // Normalize into an array `rows`
        let rows = [];
        if (Array.isArray(data)) {
          rows = data;
        } else if (data && typeof data === "object") {
          // Typical shapes: data.posts, data.data, data.result, or values object
          if (Array.isArray(data.posts)) rows = data.posts;
          else if (Array.isArray(data.data)) rows = data.data;
          else if (Array.isArray(data.result)) rows = data.result;
          else {
            // fallback: object values (useful if GAS returns object keyed by numeric indices)
            const values = Object.values(data).filter(Boolean);
            // if values appear to be objects with title or excerpt keys, treat as rows
            const haveTitle = values.filter((v) => v && typeof v === "object" && ("title" in v || "excerpt" in v)).length;
            if (values.length > 0 && haveTitle >= Math.floor(values.length / 2)) {
              rows = values;
            } else {
              // nothing usable found — assume empty
              rows = [];
            }
          }
        }

        // Clean and map rows using your sheet's column names
        const cleaned = rows
          .filter(Boolean)
          .map((r) => {
            // r may be strings if sheet returns 1-row simple array; coerce into object
            const row = typeof r === "object" ? r : { title: String(r) };

            // Map exact sheet columns:
            const id = row.id ?? row.ID ?? row.DocID ?? row.doc_id ?? row.rowId ?? null;
            const title = row.title ?? row.Name ?? row.name ?? "";
            const slug = row.slug ?? row.Slug ?? "";
            const date = row.date ?? row.Date ?? "";
            const status = (row.status ?? "").toString().toLowerCase();
            const image = row.image ?? row.Image ?? row.thumbnail ?? "";
            const doc_id = row.doc_id ?? row.Doc_ID ?? row.docId ?? "";
            const tagsRaw = row.tags ?? row.Tags ?? "";
            const likes = Number(row.likes ?? row.Likes ?? 0) || 0;
            const dislikes = Number(row.dislikes ?? row.Dislikes ?? 0) || 0;
            const excerpt = row.excerpt ?? row.summary ?? row.description ?? "";

            // Convert tags string "uk,visa" or "uk" -> array
            let tags = [];
            if (Array.isArray(tagsRaw)) tags = tagsRaw;
            else if (typeof tagsRaw === "string" && tagsRaw.trim() !== "") {
              tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
            }

            return {
              id: id ?? slug ?? title ?? `post-${Math.random().toString(36).slice(2, 9)}`,
              title,
              slug,
              excerpt,
              image,
              tags,
              author: "Aspire", // fallback; you can add an `author` column if you want
              date,
              status,
              likes,
              dislikes,
              doc_id,
              _raw: row,
            };
          });

        // Filter: only show published posts (change if you want to show drafts)
        const published = cleaned.filter((p) => (p.status ?? "").toString().toLowerCase() === "published");

        if (!cancelled) setPosts(published);
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
            Explore articles on visas, universities, exams, and study abroad tips specially written for Nepali students.
          </p>

          {/* empty-state message inside hero */}
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
            <div className="inline-block animate-pulse bg-slate-200 h-4 w-44 rounded"></div>
            <div className="mt-4 text-slate-500">Loading articles…</div>
          </div>
        )}

        {posts && posts.length === 0 && (
          <div className="max-w-xl mx-auto mt-6 text-center">
            <p className="text-slate-600 mb-6">No blogs have been published yet.</p>
            <div className="flex justify-center gap-3">
              <a href="/admin" className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600">Open Admin</a>
              <a href="/contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Contact us</a>
            </div>
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, idx) => (
              <div key={p.id ?? `post-${idx}`}>
                <BlogCard post={p} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
