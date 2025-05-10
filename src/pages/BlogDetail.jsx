import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div class="text-center mt-10 text-red-500">محتوا پیدا نشد.</div>
    );
  }

  return (
    <div class="max-w-[60rem] mx-auto p-4 mt-11" dir="rtl">
      <h1 class="text-[rgb(26,59,112)] font-bold text-lg leading-5 mb-2 text-right">
        {post.title}
      </h1>

      <p class="mt-6 text-gray-700  text-right">
        {post.content}
      </p>

      <div class="flex justify-start gap-3 text-sm text-gray-500 mb-1 border-b border-gray-300 pb-2 ">
        <span>نویسنده: {post.author}</span>
        <span>تاریخ: {post.date}</span>
      </div>

      <p class="text-base font-iran text-black mb-4 text-right border-b border-gray-300 pb-2">
        {post.description}
      </p>
      <h2 class="inline-block m-2.5 p-2.5 bg-[#d9dce1] rounded-lg text-sm font-normal text-right ">
        {post.legalTitle}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div class="relative ">
          <img
            src={post.image}
            alt="تصویر اول"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute border border-borderClr shadow-sm shadow-borderClr rounded-2xl bottom-0 left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 flex flex-col items-center justify-center">
            <div class="text-black text-xs font-bold">{post.title}</div>
            <div class="text-black text-xs">{post.date}</div>
          </div>
        </div>

        <div class="relative ">
          <img
            src={post.image}
            alt="تصویر دوم"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute bottom-0 border border-borderClr shadow-sm shadow-borderClr rounded-2xl left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 flex flex-col items-center justify-center">
            <div class="text-black text-xs font-bold">{post.title}</div>
            <div class="text-black text-xs">{post.date}</div>
          </div>
        </div>

        <div class="relative ">
          <img
            src={post.image}
            alt="تصویر سوم"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute border border-borderClr shadow-sm shadow-borderClr rounded-2xl bottom-0 left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 flex flex-col items-center justify-center">
            <div class="text-black text-xs font-bold">{post.title}</div>
            <div class="text-black text-xs">{post.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
