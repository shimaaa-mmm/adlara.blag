import { useState } from "react";
import { articles } from "../data/articles";
import { Link, useNavigate } from "react-router-dom";

const ArticlesPage = () => {
  const [filter, setFilter] = useState("article");
  const navigate = useNavigate();

  const filteredPosts = articles.filter((post) => post.types === filter);

  return (
    <div class="p-4 max-w-6xl mx-auto" dir="rtl">
      <h1 class="text-center text-2xl font-bold my-8">مقالات</h1>
      <div class="w-full ">
        <div class="flex flex-nowrap justify-center items-center gap-4 my-6 text-center min-w-[800px]">
          <button
            class={`w-[249.067px] h-[57.3333px] text-base font-normal cursor-pointer flex items-center justify-center mx-2 rounded-3xl border border-borclr p-3 shadow transition-all duration-300 ease-in-out transform hover:scale-105 ${
              filter === "article"
                ? "bg-blue-900 text-white scale-105"
                : "bg-[#E1F0F8] text-textClr hover:bg-hoverClr"
            }`}
            onClick={() => setFilter("article")}
          >
            مقاله (
            {Math.max(articles.filter((p) => p.types === "article").length, 2)}{" "}
            مورد)
          </button>

          <a href="/videos">
            <button
              class={`w-[249.067px] h-[57.3333px] text-base font-normal cursor-pointer flex items-center justify-center mx-2 rounded-3xl border border-borclr p-3 shadow transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "video"
                  ? "bg-blue-950 text-white scale-105"
                  : "bg-[#E1F0F8] text-textClr hover:bg-hoverClr"
              }`}
              onClick={() => setFilter("video")}
            >
              ویدیو (
              {Math.max(articles.filter((p) => p.types === "video").length, 2)}{" "}
              مورد)
            </button>
          </a>

          <a href="/">
            {" "}
            <button
              class={`w-[249.067px] h-[57.3333px] text-base font-normal cursor-pointer flex items-center justify-center mx-2 rounded-3xl border border-borclr p-3 shadow transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "podcast"
                  ? "bg-blue-950 text-white scale-105"
                  : "bg-[#E1F0F8] text-textClr hover:bg-hoverClr"
              }`}
              onClick={() => setFilter("podcast")}
            >
              پادکست (
              {Math.max(
                articles.filter((p) => p.types === "podcast").length,
                0
              )}{" "}
              مورد)
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px]">
        {filteredPosts.slice(0, 12).map(({ ids, images, titles, dates }) => (
          <div
            key={ids}
            className="rounded-xl overflow-hidden relative w-full max-w-[366px] h-[332px] shadow hover:shadow-lg transition"
          >
            <img
              src={images}
              alt={titles}
              className="object-cover w-full h-full rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
            />
            <Link to={`/articles/${ids}`}>
              <div className="absolute bottom-0 w-full bg-[#9ca3af61] text-center text-sm pt-2.5 pb-4 cursor-pointer">
                <div className="text-black text-[15px] font-bold">{titles}</div>
                <div>{dates}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div class="flex justify-center mt-[45px] gap-2">
        {[1, 2].map((page) => (
          <button key={page} class="px-3 py-1 border rounded hover:bg-gray-300">
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
