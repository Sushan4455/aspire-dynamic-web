import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getBlog(slug).then(setPost);
  }, [slug]);

  if (!post) return null;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.thumbnail}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.thumbnail}
          className="rounded-xl mb-8 w-full"
        />
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
