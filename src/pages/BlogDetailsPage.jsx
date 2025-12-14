// src/pages/BlogDetailPage.jsx (debuggable)
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';

const LS_KEYS = {
  COMMENTS: 'aspire:blog:comments',
  LIKES: 'aspire:blog:likes',
  DISLIKES: 'aspire:blog:dislikes',
  REACTION: 'aspire:blog:reaction',
};

const SHEET_API_BASE =
  'https://script.google.com/macros/s/AKfycbynlH8HAdsS6QtwPUk9OFglhtyNO9knZJcZqYM6cTR7CNiqWm-aWDQojsNXHulhY_z6EQ/exec';

export default function BlogDetailPage() {
  const { slug } = useParams();

  function loadFromLS(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  const defaultComments = [
    { id: 1, author: 'Bimal Rai', time: '2 hours ago', text: 'Nice!', likes: 3, dislikes: 0 },
  ];

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiRaw, setApiRaw] = useState(null);
  const [apiStatus, setApiStatus] = useState(null);
  const [apiError, setApiError] = useState(null);

  // local UI state (kept simple here)
  const [comments, setComments] = useState(() => loadFromLS(LS_KEYS.COMMENTS, defaultComments));
  const [likes, setLikes] = useState(() => loadFromLS(LS_KEYS.LIKES, null));
  const [dislikes, setDislikes] = useState(() => loadFromLS(LS_KEYS.DISLIKES, null));
  const [userReaction, setUserReaction] = useState(() => loadFromLS(LS_KEYS.REACTION, null));
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      setApiError(null);
      setApiRaw(null);
      setApiStatus(null);

      try {
        const query = slug ? `?slug=${encodeURIComponent(slug)}` : '';
        const url = `${SHEET_API_BASE}${query}`;

        console.info('[BlogDetailPage] fetching', url);
        const res = await fetch(url, { method: 'GET' });

        setApiStatus(`${res.status} ${res.statusText}`);

        const text = await res.text();
        setApiRaw(text);

        // try parse
        let data;
        try {
          data = JSON.parse(text);
        } catch (err) {
          console.warn('Failed to parse JSON from API response', err);
          throw new Error('API did not return valid JSON');
        }

        // If array, try find slug, else use object
        let fetched = null;
        if (Array.isArray(data)) {
          fetched = slug ? data.find(p => String(p.slug || '').trim() === String(slug).trim()) : data[0];
        } else if (data && typeof data === 'object') {
          fetched = Object.keys(data).length ? data : null;
        }

        if (!fetched) {
          setApiError('No matching post found in API response (check slug).');
          setPost(null);
        } else {
          const normalized = {
            id: fetched.id ?? fetched.slug ?? Date.now(),
            title: fetched.title ?? 'Untitled',
            author: fetched.author ?? 'Unknown',
            time: fetched.date ?? '',
            readTime: fetched.readTime ?? '',
            cover: fetched.image ?? '',
            tags: fetched.tags ? String(fetched.tags).split(',').map(s => s.trim()) : [],
            body: fetched.body ?? fetched.content ?? '',
            excerpt: fetched.excerpt ?? '',
            likes: Number(fetched.likes ?? 0),
            dislikes: Number(fetched.dislikes ?? 0),
            slug: fetched.slug ?? '',
          };
          setPost(normalized);
          if (localStorage.getItem(LS_KEYS.LIKES) === null) setLikes(normalized.likes);
          if (localStorage.getItem(LS_KEYS.DISLIKES) === null) setDislikes(normalized.dislikes);
        }
      } catch (err) {
        console.error('[BlogDetailPage] fetch error', err);
        setApiError(String(err.message || err));
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => { try { localStorage.setItem(LS_KEYS.COMMENTS, JSON.stringify(comments)); } catch{} }, [comments]);
  useEffect(() => { if (likes === null) return; try { localStorage.setItem(LS_KEYS.LIKES, JSON.stringify(likes)); } catch{} }, [likes]);
  useEffect(() => { if (dislikes === null) return; try { localStorage.setItem(LS_KEYS.DISLIKES, JSON.stringify(dislikes)); } catch{} }, [dislikes]);
  useEffect(() => { try { localStorage.setItem(LS_KEYS.REACTION, JSON.stringify(userReaction)); } catch{} }, [userReaction]);

  function handleLike() {
    if (userReaction === 'like') { setLikes(l => (l ?? 0) - 1); setUserReaction(null); }
    else if (userReaction === 'dislike') { setDislikes(d => (d ?? 0) - 1); setLikes(l => (l ?? 0) + 1); setUserReaction('like'); }
    else { setLikes(l => (l ?? 0) + 1); setUserReaction('like'); }
  }
  function handleDislike() {
    if (userReaction === 'dislike') { setDislikes(d => (d ?? 0) - 1); setUserReaction(null); }
    else if (userReaction === 'like') { setLikes(l => (l ?? 0) - 1); setDislikes(d => (d ?? 0) + 1); setUserReaction('dislike'); }
    else { setDislikes(d => (d ?? 0) + 1); setUserReaction('dislike'); }
  }
  function addComment(e) { e.preventDefault(); const t = commentText.trim(); if(!t) return; setComments(c => [{ id: Date.now(), author: 'You', time: 'just now', text: t, likes:0, dislikes:0 }, ...c]); setCommentText(''); }

  function renderBody(body) {
    if (!body) return <div className="text-slate-500">No body/content available.</div>;
    const isHtml = /<\/?[a-z][\s\S]*>/i.test(body);
    if (isHtml) return <div dangerouslySetInnerHTML={{ __html: body }} />;
    return <div className="prose">{String(body).split('\n\n').map((p,i)=>(<p key={i}>{p}</p>))}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 p-6 md:p-12">
        <main className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6">
            <ol className="flex gap-2 items-center">
              <li><Link to="/" className="hover:underline">Home</Link></li><li>/</li>
              <li><Link to="/articles" className="hover:underline">Articles</Link></li><li>/</li>
              <li className="text-slate-700 font-medium">{slug || 'blog'}</li>
            </ol>
          </nav>

          <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-10 min-h-[200px]">
              {loading ? (
                <div className="text-slate-500">Loading post…</div>
              ) : apiError ? (
                <div>
                  <div className="text-red-600 font-medium">Error loading post</div>
                  <div className="mt-2 text-sm text-slate-600">{apiError}</div>
                </div>
              ) : post ? (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
                  <div className="mt-4 text-slate-600">By {post.author} • {post.time}</div>
                  <div className="mt-6">{renderBody(post.body)}</div>

                  <div className="mt-6 flex items-center gap-3">
                    <button onClick={handleLike} className="px-3 py-2 rounded bg-green-50 border">Like {likes ?? 0}</button>
                    <button onClick={handleDislike} className="px-3 py-2 rounded bg-red-50 border">Dislike {dislikes ?? 0}</button>
                  </div>
                </>
              ) : (
                <div className="text-slate-600">No post found.</div>
              )}
            </div>
          </article>

          {/* debug panel */}
          <div className="mt-6 bg-slate-50 rounded p-4 text-sm border">
            <div><strong>Debug info</strong></div>
            <div className="mt-2"><strong>Slug used:</strong> {slug || '(none)'}</div>
            <div><strong>API status:</strong> {apiStatus || '(not fetched yet)'}</div>
            <div className="mt-2"><strong>API error:</strong> {apiError || '(none)'}</div>
            <div className="mt-2"><strong>Raw API response:</strong></div>
            <pre className="mt-2 max-h-48 overflow-auto text-xs bg-white p-2 border rounded">{apiRaw || '(empty)'}</pre>
            <div className="mt-3 text-xs text-slate-500">If the raw response is HTML or an error page, your Apps Script may not be set to "Anyone, even anonymous" or the slug might not match.</div>
          </div>
        </main>
      </div>
    </>
  );
}
