import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../data/videos";

const SingleVideoPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id.toString() === id);

  if (!video) return <div class="text-center mt-10">ویدیو یافت نشد</div>;

  return (
    <div class="p-4 max-w-3xl mx-auto" dir="rtl">
      <div class="flex justify-center items-center">
        <iframe
          class="w-full h-[400px] rounded-xl shadow"
          src={`https://www.aparat.com/video/video/embed/videohash/${video.aparatId}/v.t?autoplay=false`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div class="mt-6 px-4 text-right mr-[-127px]">
        <h2 class="text-[rgb(26,59,112)] font-bold text-[1rem] leading-[1.5rem] mb-2">
          {video.title}
        </h2>
        <p class="text-md text-[#000] mb-2">{video.summary}</p>
        <div class="text-sm text-gray-500 mb-4">
          نویسنده: {video.author} - تاریخ: {video.date}
        </div>

        <hr class="my-4 border-gray-300" />

        <h3 class="inline-block m-2.5 p-2.5 bg-[#d9dce1] rounded-lg text-sm font-normal mb-4">
          {video.category}
        </h3>
        <div class="flex gap-4 justify-center mt-[25px] mr-[169px]">
          {video.images.map((img, i) => (
            <div key={i} class="relative flex-shrink-0">
              <a href={`/articles/${video.id}`} class="block">
                <img
                  src={img}
                  alt={`تصویر ${i + 1}`}
                  class="w-[333.933px] h-[236px] object-cover rounded-lg shadow"
                />

                <div class="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-2 rounded-b-[20px]">
                  <div>{video.title}</div>
                  <div>{video.date}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div class="mt-6 flex justify-center">
        <button
          onClick={() => window.history.back()}
          class="px-6 py-2 bg-[#1B3c71] text-white rounded hover:bg-[#16396d] transition duration-300 ease-in-out"
          >
          بستن ویدیو
        </button>
      </div>
    </div>
  );
};

export default SingleVideoPage;
