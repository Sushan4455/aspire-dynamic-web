import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../../services/blogService";
import { Link } from "react-router-dom";

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  const remove = async id => {
    if (!confirm("Delete this blog?")) return;
    await deleteBlog(id);
    setBlogs(b => b.filter(x => x.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Blog Dashboard</h1>
        <Link to="/admin/blogs/new" className="btn-primary">
          + New Blog
        </Link>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-4">Title</th>
              <th>Status</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(b => (
              <tr key={b.id} className="border-t">
                <td className="p-4 font-medium">{b.title}</td>
                <td className="capitalize">{b.status}</td>
                <td>{new Date(b.updatedAt || b.createdAt).toLocaleDateString()}</td>
                <td className="p-4 flex gap-2 justify-end">
                  <Link to={`/admin/blogs/edit/${b.id}`} className="btn-outline">
                    Edit
                  </Link>
                  <button onClick={() => remove(b.id)} className="btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!blogs.length && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">
                  No blogs yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
