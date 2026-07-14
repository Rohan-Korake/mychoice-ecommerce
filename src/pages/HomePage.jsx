import { ArrowRight, Sparkles, ShieldCheck, Gift, Gem } from "lucide-react";
import { NavLink } from "react-router-dom";
import NewProductCard from "../components/NewProductCard";

const HomePage = () => {
  return (
    <>
      {/* landing page section */}
      <section className=" bg-slate-50 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DAC593]/40 bg-[#DAC593]/10 px-4 py-2 text-sm font-medium text-[#DAC593] dark:border-[#DAC593]/30 dark:bg-[#DAC593]/20">
              <Sparkles size={16} />
              Handmade with Love
            </span>

            <h1 className="mt-6 text-5xl font-serif text-slate-500 dark:text-white">
              Beautiful Handmade{" "}
              <span className="text-[#DAC593]">
                Creations for Every Occasion
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400 dark:text-slate-400 font-light">
              Explore handcrafted Aari work, elegant jewelry, embroidery, and
              custom made designs carefully created with passion, creativity,
              and attention to every detail.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <NavLink
                to={"/shop"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C97C5D] px-7 py-3 font-semibold text-white transition hover:bg-[#b06a4d] shadow-lg shadow-black/20"
              >
                Shop Collection
                <ArrowRight size={18} />
              </NavLink>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              {/* Premium Quality */}
              <div className="flex items-center justify-center gap-2 rounded-xl bg-[#121212] p-4 shadow-sm border border-white/5 dark:bg-[#121212] lg:justify-start">
                <ShieldCheck size={18} className="text-[#DAC593]" />
                <span className="text-slate-300">Premium Quality</span>
              </div>

              {/* Custom Orders */}
              <div className="flex items-center justify-center gap-2 rounded-xl bg-[#121212] p-4 shadow-sm border border-white/5 dark:bg-[#121212] lg:justify-start">
                <Gift size={18} className="text-[#DAC593]" />
                <span className="text-slate-300">Custom Orders</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-1 justify-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-zinc-900">
              <img
                src="./src/assets/landing.svg"
                alt="Handmade Aari Work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-slate-50 dark:bg-zinc-950 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            New Arrivals
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
            Discover our latest handcrafted creations, made with love and
            designed to add elegance to every moment.
          </p>

          {/* Decorative Divider */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#DAC593] sm:w-20 lg:w-28"></span>
            <Gem
              size={24}
              className="text-[#B89647] dark:text-[#FFCC00]"
              strokeWidth={1.5}
            />
            <span className="h-px w-12 bg-[#DAC593] sm:w-20 lg:w-28"></span>
          </div>
        </div>
        <div>
          <NewProductCard />
        </div>
        <div className="mx-auto flex max-w-7xl justify-center items-center gap-14 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
          <NavLink
            to={"/shop"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C97C5D] px-7 py-3 font-semibold text-white transition hover:bg-[#b06a4d] shadow-lg shadow-black/20"
          >
            Shop Collection
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
