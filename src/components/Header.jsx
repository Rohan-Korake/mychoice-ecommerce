import { Search, Menu, Sun, Moon, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UtilityButton from "./UtilityButton";
import { ThemeProvider } from "../contexts/theme";

function Header() {
  // handle hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // store nav option with routes
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
    { name: "Orders", path: "/orders" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  // handle theme with localStorage
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  //   update theme
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  //   handle theme toggle
  const toggleTheme = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };

  //   load theme
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const themeIcon = themeMode === "dark" ? Sun : Moon;

  return (
    <ThemeProvider value={{ themeMode, themeIcon, darkTheme, lightTheme }}>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="MyChoice Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              />
              <h1 className="font-['Cormorant_Garamond'] text-2xl font-bold tracking-wide text-[#f3aa51]">
                MyChoice
              </h1>
            </a>

            {/* Search */}
            <div className="hidden flex-1 px-6 md:flex">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-[#DAC593] 
                 dark:border-[#DAC593]/20 dark:bg-[#121212] dark:text-white dark:focus:border-[#DAC593]"
                />
                <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-[#C97C5D] text-white transition hover:bg-[#b06a4d]">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((nav) => (
                <li key={nav.name}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive }) =>
                      `inline-flex items-center border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "border-[#DAC593] text-[#DAC593]"
                          : "border-transparent text-slate-600 hover:border-slate-300 hover:text-[#DAC593] dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-[#DAC593]"
                      }`
                    }
                  >
                    {nav.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <UtilityButton
                icon={themeIcon}
                width="w-10"
                onClick={toggleTheme}
              />
            </div>

            <div className="flex  gap-1">
              {/* Mobile Theme Button */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:hover:bg-slate-800">
                <UtilityButton
                  icon={themeIcon}
                  width="flex-1"
                  onClick={toggleTheme}
                />
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:hover:bg-slate-800"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="pb-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-slate-300 bg-slate-100 pl-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-white"
              />

              <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
              isMenuOpen
                ? "max-h-[500px] border-t border-slate-200 py-4 dark:border-slate-800"
                : "max-h-0 py-0"
            }`}
          >
            <nav className="flex flex-col gap-1">
              <ul className="flex flex-col items-center gap-2 py-2">
                {navLinks.map((nav) => (
                  <li key={nav.name} className="w-full">
                    <NavLink
                      to={nav.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border-1 ${
                          isActive
                            ? "bg-[#DAC593]/10 text-[#DAC593] shadow-md hover:bg-[#DAC593]/20 dark:bg-[#DAC593]/10 dark:hover:bg-[#DAC593]/20"
                            : "text-slate-700 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
                        }`
                      }
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Header;
