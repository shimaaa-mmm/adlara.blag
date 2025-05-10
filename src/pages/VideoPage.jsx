import React, { useState } from "react";
import { videos } from "../data/videos";
import { Link } from "react-router-dom";

const VideoPage = ({ posts = [], filter = "video", setFilter = () => {} }) => {
  const [videoCount, setVideoCount] = useState(videos.length);
  const articleCount = 12;

  return (
    <div class="p-4 max-w-3xl mx-auto" dir="rtl">
      <h1 class="text-center text-xl leading-7 font-[inherit] my-8">
        آکادمی حقوق
      </h1>

      <div class="w-full ">
        <div class="flex flex-nowrap justify-center items-center mr-[-33px] gap-4 my-6 text-center min-w-[800px]">
          <Link
            to="/articles"
            onClick={() => setFilter("article")}
            class={`transition-all duration-300 ease-in-out transform w-[250px] h-[58px] text-base font-normal flex items-center justify-center rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow hover:scale-105 ${
              filter === "article"
                ? "bg-blue-900 text-white scale-105"
                : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
              }`}
          >
            مقاله (
            {Math.max(posts.filter((p) => p.types === "article").length, 2)}{" "}
            مورد)
          </Link>

          <Link
            to="#"
            onClick={() => setFilter("video")}
            class={`transition-all duration-300 ease-in-out transform w-[250px] h-[58px] text-base font-normal flex items-center justify-center rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow hover:scale-105 ${
              filter === "video"
                ? "bg-blue-950 text-white scale-105"
                : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
              }`}
          >
            ویدیو (
            {Math.max(posts.filter((p) => p.types === "video").length, 2)} مورد)
          </Link>

          <Link
            to="/"
            onClick={() => setFilter("podcast")}
            class={`transition-all duration-300 ease-in-out transform w-[250px] h-[58px] text-base font-normal flex items-center justify-center rounded-[20px] border border-[rgb(222,240,252)] p-3 shadow hover:scale-105 ${
              filter === "podcast"
                ? "bg-blue-950 text-white scale-105"
                : "bg-[#E1F0F8] text-[rgb(28,62,117)] hover:bg-[#07b2b2]"
              }`}
          >
            پادکست (
            {Math.max(posts.filter((p) => p.types === "podcast").length, 0)}{" "}
            مورد)
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-[60px] justify-right mr-[-215px]">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-element cursor-default w-[306.933px] relative block"
          >
            <img
              src={video.url}
              alt={video.title}
              className="w-full h-[282px] object-cover rounded-[20px]"
            />
            <Link to={`/video/${video.id}`}>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-2 rounded-b-[20px] cursor-pointer">
                <div className="text-base font-semibold">{video.title}</div>
                <div className="text-sm mt-1">{video.date}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
