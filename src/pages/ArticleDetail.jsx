import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.ids === parseInt(id));

  if (!article) {
    return (
      <div className="text-center mt-10 text-red-500">مقاله پیدا نشد.</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4" dir="rtl">
      {/* <h1 className="text-2xl font-bold mb-4 text-right">{article.titles}</h1> */}

      {/* <p className="text-sm text-gray-500 mb-4 text-right">
        تاریخ: {article.dates}
      </p> */}

      <p className="mt-6 text-gray-700 leading-relaxed text-right">
        {article.content}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <img
          src={article.images}
          alt="تصویر اول"
          className="w-full h-48 object-cover rounded"
        />
        <img
          src={article.images}
          alt="تصویر دوم"
          className="w-full h-48 object-cover rounded"
        />
        <img
          src={article.images}
          alt="تصویر سوم"
          className="w-full h-48 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
