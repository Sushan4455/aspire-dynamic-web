import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveBlog, uploadImage } from "../../services/blogService";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [status, setStatus] = useState("draft");

  const uploadThumb = async e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const url = await uploadImage(reader.result);
      setThumbnail(url);
    };
    reader.readAsDataURL(file);
  };

  const save = async () => {
    await saveBlog({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      thumbnail,
      status,
    });
    alert("Saved");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="card p-6 space-y-6">
        <input
          className="input text-2xl font-bold"
          placeholder="Blog title"
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          className="input"
          rows="2"
          placeholder="SEO description"
          onChange={e => setExcerpt(e.target.value)}
        />

        <div className="border rounded-lg overflow-hidden">
          <ReactQuill value={content} onChange={setContent} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail</label>
          <input type="file" onChange={uploadThumb} />
          {thumbnail && (
            <img
              src={thumbnail}
              className="mt-4 h-32 rounded-lg object-cover"
            />
          )}
        </div>

        <div className="flex items-center justify-between">
          <select
            className="input w-40"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button onClick={save} className="btn-primary">
            Save Blog
          </button>
        </div>
      </div>
    </div>
  );
}
