import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.type === filter);

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <div class="p-4 max-w-[70rem] mx-auto" dir="rtl">
      <h1 class="text-center text-xl leading-7 font-[inherit] my-8">
        آکادمی حقوق
      </h1>

      <div className="flex flex-wrap gap-1 justify-center my-6">
        <button
          className={`w-[249.067px] h-[57.3333px] text-base font-normal flex items-center justify-center mx-2 rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow transition duration-300 ${
            filter === "article"
              ? "bg-green-500 text-white"
              : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
          }`}
          onClick={() => navigate("/articles")}
        >
          مقاله ({posts.filter((p) => p.type === "article").length} مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] text-base font-normal flex items-center justify-center mx-2 rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow transition duration-300 ${
            filter === "video"
              ? "bg-blue-950 text-white"
              : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
          }`}
          onClick={() => navigate("/videos")}
        >
          ویدیو ({Math.max(posts.filter((p) => p.type === "video").length, 2)}{" "}
          مورد)
        </button>

        <button
          className={`w-[249.067px] h-[57.3333px] text-base font-normal flex items-center justify-center mx-2 rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow transition duration-300 ${
            filter === "podcast"
              ? "bg-blue-950 text-white"
              : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
          }`}
          onClick={() => setFilter("podcast")}
        >
          پادکست ({posts.filter((p) => p.type === "podcast").length} مورد)
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px] justify-center">
        {displayedPosts.map(({ id, image, title, date }) => (
          <div
            key={id}
            onClick={() => navigate(`/blog/${id}`)}
            class="rounded-xl overflow-hidden relative w-full max-w-[366px] h-[332px] shadow hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={title}
              class="object-cover w-full h-full rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
            />
            <Link to={`/blog/${id}`}>
              <div class="absolute bottom-0 w-full bg-[#9ca3af61] text-center cursor-pointer text-sm pt-2.5 pb-4">
                <div class="text-black text-[15px] font-bold ">{title}</div>
                <div>{date}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {!showAll && filteredPosts.length > 3 && (
        <div class="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            class="px-6 py-2 bg-blue-950 text-white rounded hover:bg-blue-400 transition"
          >
            مشاهده بیشتر
          </button>
        </div>
      )}

      {showAll && (
        <div class="flex justify-center mt-[45px] gap-2">
          {[1, 2].map((page) => (
            <button
              key={page}
              class="px-3 py-1 border rounded hover:bg-gray-300"
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
