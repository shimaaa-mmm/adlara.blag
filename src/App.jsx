import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";
import Layout from "./components/Layout";
import VideoPage from "./pages/VideoPage";
import SingleVideoPage from "./pages/SingleVideoPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/videos" element={<VideoPage />} /> 
          <Route path="/video/:id" element={<SingleVideoPage />} /> 

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
