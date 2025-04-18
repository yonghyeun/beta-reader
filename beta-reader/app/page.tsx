"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:2222/posts");
        if (!response.ok) {
          throw new Error("API 응답이 올바르지 않습니다");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "데이터를 불러오는 중 오류가 발생했습니다"
        );
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">JSON Placeholder API 테스트</h1>

      {loading && <p data-testid="loading">로딩 중...</p>}
      {error && (
        <p data-testid="error" className="text-red-500">
          오류: {error}
        </p>
      )}

      <ul data-testid="posts-list" className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="rounded border p-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
