import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Rohan-Korake",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/rohan-korake/",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter size={20} />,
      href: "https://x.com/RohanKorake",
      label: "Twitter",
    },
    {
      icon: <FaGlobe size={20} />,
      href: "https://rohankorake.vercel.app/",
      label: "Portfolio",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:rohannkorake@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
    { name: "Orders", path: "/orders" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {" "}
          {/* Brand */}
          <div className="space-y-5 text-left">
            {" "}
            <h2 className="text-3xl font-bold tracking-wide text-[#DAC593]">
              MyChoice
            </h2>
            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400 md:max-w-md">
              Discover handcrafted Aari work, elegant jewellery, and beautifully
              crafted accessories made with passion, precision, and timeless
              artistry.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Designed & Developed by{" "}
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Rohan Korake
              </span>
            </p>
          </div>
          {/* Navigation */}
          <div className="text-left lg:justify-self-center lg:pl-10">
            {" "}
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Navigation
            </h3>
            <ul className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex h-11 w-36 items-center justify-center rounded-full border text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "border-[#DAC593] bg-[#DAC593] text-black"
                          : "border-slate-300 text-slate-600 hover:border-[#DAC593] hover:bg-[#DAC593]/10 hover:text-[#DAC593] dark:border-white/10 dark:text-slate-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div className="lg:justify-self-end">
            <h3 className="mb-5 text-center text-lg font-semibold text-slate-900 dark:text-white lg:text-left">
              Meet the Developer
            </h3>

            <div className="flex flex-wrap justify-center gap-3 md:justify-start lg:justify-end">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#DAC593] hover:bg-[#DAC593]/10 hover:text-[#DAC593] dark:border-white/10 dark:bg-[#111111] dark:text-slate-400"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200 dark:border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MyChoice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
