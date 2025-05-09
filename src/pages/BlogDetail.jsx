import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find(item => item.id === parseInt(id));

  if (!post) {
    return <div className="text-center mt-10 text-red-500">محتوا پیدا نشد.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4" dir="rtl">
      {/* <h1 className="text-2xl font-bold mb-4 text-right">{post.title}</h1>

      <p className="text-sm text-gray-500 mb-4 text-right">
        تاریخ: {post.date}
      </p> */}

      <p className="mt-6 text-gray-700 leading-relaxed text-right">
        {post.content}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <img
          src={post.image}
          alt="تصویر اول"
          className="w-full h-48 object-cover rounded"
        />
        <img
          src={post.image}
          alt="تصویر دوم"
          className="w-full h-48 object-cover rounded"
        />
        <img
          src={post.image}
          alt="تصویر سوم"
          className="w-full h-48 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default BlogDetail;
