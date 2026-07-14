import { Heart } from "lucide-react";

const ProductCard = ({ productList }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {productList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 transition-transform hover:scale-[1.02]"
        >
          {/* Image Container: Using aspect-[3/4] for portrait jewelry photos */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-white truncate">
              {item.name}
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
              {item.desc}
            </p>

            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-sm md:text-base font-bold text-indigo-600 dark:text-indigo-400">
                {item.price}
              </span>
              <button className="text-zinc-400 hover:text-red-500 transition-colors">
                {/* Lucide React Icon */}
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
