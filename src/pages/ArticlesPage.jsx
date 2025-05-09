import { useState } from "react";
import { articles } from "../data/articles";
import { Link, useNavigate } from "react-router-dom";

const ArticlesPage = () => {
  const [filter, setFilter] = useState("article");
  const navigate = useNavigate();

  const filteredPosts = articles.filter((post) => post.types === filter);

  return (
    <div className="p-4 max-w-6xl mx-auto" dir="rtl">
      <h1 className="text-center text-2xl font-bold my-8">مقالات</h1>

      {/* دکمه‌های فیلتر */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow ${
            filter === "article"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => setFilter("article")}
        >
          مقاله ({articles.filter((p) => p.types === "article").length} مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow ${
            filter === "video"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => setFilter("video")}
        >
          ویدیو ({articles.filter((p) => p.types === "video").length} مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow ${
            filter === "podcast"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => setFilter("podcast")}
        >
          پادکست ({articles.filter((p) => p.types === "podcast").length} مورد)
        </button>
      </div>

      {/* لیست مطالب */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px]">
        {filteredPosts.slice(0, 12).map(({ ids, images, titles, dates }) => (
          <Link
            to={`/articles/${ids}`}
            key={ids}
            className="rounded-xl overflow-hidden relative w-full max-w-[366px] h-[332px] cursor-pointer shadow hover:shadow-lg transition"
          >
            <img
              src={images}
              alt={titles}
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-20 text-black p-4 text-center font-bold">
              {titles}
            </div>
            <div className="absolute bottom-0 w-full bg-gray-200 bg-opacity-70 text-center text-sm pt-16 pb-4">
              {dates}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-[45px] gap-2">
        {[1, 2].map((page) => (
          <button
            key={page}
            className="px-3 py-1 border rounded hover:bg-gray-300"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
