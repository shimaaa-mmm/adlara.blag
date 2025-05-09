import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.type === filter);

  return (
    <div className="p-4 max-w-[70rem] mx-auto" dir="rtl">
      <h1 className="text-center text-xl font-bold my-8">آکادمی حقوق</h1>

      <div className="flex flex-wrap gap-4 justify-center my-6">
        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow flex items-center justify-center ${
            filter === "article"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => navigate("/articles")}
        >
          مقاله ({posts.filter((p) => p.type === "article").length} مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow flex items-center justify-center ${
            filter === "video"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => setFilter("video")}
        >
          ویدیو ({posts.filter((p) => p.type === "video").length} مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] rounded-xl shadow flex items-center justify-center ${
            filter === "podcast"
              ? "bg-green-500 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
          onClick={() => setFilter("podcast")}
        >
          پادکست ({posts.filter((p) => p.type === "podcast").length} مورد)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px] justify-center">
        {filteredPosts.slice(0, 12).map(({ id, image, title, date }) => (
          <div
            key={id}
            onClick={() => navigate(`/blog/${id}`)}
            className="rounded-xl overflow-hidden relative w-full max-w-[366px] h-[332px] cursor-pointer shadow hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-20 text-black p-4 text-center font-bold">
              {title}
            </div>
            <div className="absolute bottom-0 w-full bg-gray-200 bg-opacity-70 text-center text-sm pt-16 pb-4">
              {date}
            </div>
          </div>
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

export default Blog;
