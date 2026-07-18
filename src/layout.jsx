import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import logo from "../src/assets/logo.svg";
import ReloadPrompt from "./components/ReloadPrompt";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center px-6 text-center">
          {/* Logo */}
          <img
            src={logo}
            alt="MyChoice"
            className="h-16 w-16 sm:h-20 sm:w-20"
          />

          {/* Brand */}
          <h1 className="mt-6 text-3xl font-semibold tracking-wide text-white sm:text-4xl">
            MyChoice
          </h1>

          {/* Tagline */}
          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
            Crafted with Passion.
          </p>

          {/* Loading Indicator */}
          <div className="mt-6 flex items-center gap-2">
            {[0, 0.1, 0.2, 0.3, 0.4].map((delay, index) => (
              <span
                key={index}
                className="h-2 w-2 animate-pulse rounded-full bg-[#DAC593]"
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: "1.2s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReloadPrompt />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950">
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
