import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main class="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
