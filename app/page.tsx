import Search from "./components/Search";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-xl mb-4 text-gray-600">
        የማንን የ GitHub ፕሮፋይል ማየት ይፈልጋሉ?
      </h2>
      <Search />
    </div>
  );
}
