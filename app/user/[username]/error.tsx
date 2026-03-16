"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // ኤረሩን ለዲበገን እንዲረዳን ኮንሶል ላይ እናውጣው
    console.error(error);
  }, [error]);

  return (
    <div className="text-center mt-10 p-10 bg-red-50 rounded-xl border border-red-200">
      <h2 className="text-red-600 text-2xl font-bold mb-2">ችግር ተፈጥሯል! ❌</h2>
      <p className="text-gray-700 mb-6">{error.message || "የሆነ ስህተት ተፈጥሯል"}</p>

      <button
        onClick={() => reset()} // <--- እዚህ ጋር ነው ስራው
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        እንደገና ሞክር
      </button>
    </div>
  );
}
