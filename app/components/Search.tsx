"use client"; // ይህ የClient Component መሆኑን ያሳውቃል

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      // ተጠቃሚውን ወደ አዲስ URL ይወስደዋል
      router.push(`/user/${username}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 justify-center">
      <input
        type="text"
        placeholder="GitHub username..."
        className="border p-2 rounded-lg w-64 outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        ፈልግ
      </button>
    </form>
  );
}
