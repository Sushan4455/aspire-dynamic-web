import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map(b => (
          <Link
            key={b.id}
            to={`/blogs/${b.slug}`}
            className="card overflow-hidden hover:shadow-lg transition"
          >
            <img src={b.thumbnail} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm">{b.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
