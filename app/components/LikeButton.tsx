"use client";

export default function LikeButton({ username }: { username: string }) {
  const handleLike = async () => {
    const res = await fetch("/api/like", {
      method: "POST",
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <button
      onClick={handleLike}
      className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
    >
      ❤️ Like
    </button>
  );
}
