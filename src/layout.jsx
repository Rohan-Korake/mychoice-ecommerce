import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#09090B] text-white">
        <Header />

        <main className="min-h-screen">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
