import { Heart, ShoppingCart } from "lucide-react";
import { newProductData } from "../data/newProducts.js";

const NewProductCard = () => {
  return (
    <>
      {/* grid-cols-2 makes it 2 per row on phone, lg:grid-cols-4 makes it 4 on laptop */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-3 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:px-4">
        {newProductData.map((item) => (
          <div
            key={item.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAC593]/60 hover:shadow-xl dark:border-zinc-800 dark:bg-[#111111]"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 border-b-1 border-solid border-amber-500 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-[#DAC593] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-black shadow sm:left-3 sm:top-3 sm:text-xs">
                New
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-sm font-semibold tracking-wide text-slate-900 transition-colors group-hover:text-[#B89C5A] dark:text-white dark:group-hover:text-[#DAC593] sm:text-xl lg:text-2xl">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProductCard;
