import LikeButton from "../../../components/LikeButton"; // 1. እዚህ ጋር ኢምፖርት አድርገው

// 1. የ Props አይነቱን (Type) ለ Next.js 15 በሚሆን መልኩ እናስተካክል
type Props = {
  params: Promise<{ username: string }>; // params አሁን Promise ነው
};

// ዳታውን ከ GitHub የሚያመጣ ሰርቨር ሳይድ ፈንክሽን
async function getGithubUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // ተጠቃሚው ካልተገኘ null እንመልስ (ወይም throw እናድርግ)
    // እዚህ ጋር null መመለስ የተሻለ የሚሆነው በገጹ ላይ የራሳችንን መልእክት ለማሳየት ነው
    return null;
  }

  return res.json();
}

export default async function UserPage({ params }: Props) {
  // 2. ቁልፉ መፍትሄ፦ paramsን መጀመሪያ await እናደርጋለን
  const { username } = await params;

  // 3. አሁን ዳታውን እናምጣ
  const user = await getGithubUser(username);

  // ዳታው ካልተገኘ (null ከሆነ)
  if (!user) {
    throw new Error("ተጠቃሚው አልተገኘም!"); // ይህ ወደ error.tsx ይወስደናል
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg text-center mt-10">
      <img
        src={user.avatar_url}
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        alt="avatar"
      />
      <h2 className="text-2xl font-bold mt-4">{user.name || user.login}</h2>
      <p className="text-gray-500 italic">{user.bio || "No bio available"}</p>
      <LikeButton username={username} />
      <div className="flex justify-around mt-6">
        <div>
          <p className="font-bold text-blue-600">{user.followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold text-blue-600">{user.public_repos}</p>
          <p className="text-sm text-gray-500">Repos</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 bg-gray-800 hover:bg-black text-white py-2 rounded-lg transition-colors"
      >
        GitHub ላይ እይ
      </a>
    </div>
  );
}
