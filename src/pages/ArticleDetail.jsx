import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.ids === parseInt(id));

  if (!article) {
    return (
      <div class="text-center mt-10 text-red-500">مقاله پیدا نشد.</div>
    );
  }

  return (
    <div class="max-w-[60rem] mx-auto p-4 mt-[44px]" dir="rtl">
      <h1 class="text-[rgb(26,59,112)] font-bold text-[18px] leading-[1.5rem] mb-2 text-right">
        {article.titles}
      </h1>

      <p class="mt-6 text-gray-700 leading-[2.1] text-right">
        {article.contents}
      </p>

      <div class="flex justify-start gap-3 text-sm text-gray-500 mb-1 border-b border-gray-300 pb-2 ">
        <span>نویسنده: {article.authors}</span>
        <span>تاریخ: {article.dates}</span>
      </div>

      <p class="text-base leading-[2.1] text-black mb-4 text-right border-b border-gray-300 pb-2">
        {article.descriptions}
      </p>
      <h2 class="inline-block m-2.5 p-2.5 bg-[#d9dce1] rounded-lg text-sm font-normal text-right ">
        {article.legalTitles}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div class="relative ">
          <img
            src={article.images}
            alt="تصویر اول"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute border border-borderClr shadow-sm shadow-borderClr rounded-2xl bottom-0 left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 flex flex-col items-center justify-center">
          <div class="text-black text-[12px] font-bold">
              {article.titles}
            </div>
            <div class="text-black text-[12px]">{article.dates}</div>
          </div>
        </div>

        <div class="relative ">
          <img
            src={article.images}
            alt="تصویر دوم"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute border border-borderClr shadow-sm shadow-borderClr rounded-2xl bottom-0 left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 rounded flex flex-col items-center justify-center">
          <div class="text-black text-[12px] font-bold">
              {article.titles}
            </div>
            <div class="text-black text-[12px]">{article.dates}</div>
          </div>
        </div>

        <div class="relative ">
          <img
            src={article.images}
            alt="تصویر سوم"
            class="w-[366.933px] h-[322px] object-cover rounded-[20px]"
          />
          <div class="absolute border border-borderClr shadow-sm shadow-borderClr rounded-2xl bottom-0 left-0 right-0 h-[61px] bg-[#fafafa73] text-white text-center px-2 rounded flex flex-col items-center justify-center">
          <div class="text-black text-[12px] font-bold">
              {article.titles}
            </div>
            <div class="text-black text-[12px]">{article.dates}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
