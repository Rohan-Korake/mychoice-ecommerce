import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { placeOrder } from "../utils/orderUtils.js";

const ProductCard = ({ productList }) => {
  // place order using whatsapp (wa.me)
  const handleOrderClick = (item) => {
    placeOrder(item);
  };

  // monitor wishlist record
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
  });

  // handle like button
  const toggleLike = (product) => {
    // Check if product already exists in wishlist by checking id
    const isAlreadyLiked = wishlist.some((item) => item.id === product.id);

    let newWishlist;
    if (isAlreadyLiked) {
      newWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      newWishlist = [...wishlist, product];
    }
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {productList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 transition-transform hover:scale-[1.02]"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Positioned Heart Icon */}
            <button
              onClick={() => toggleLike(item)}
              className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-600 dark:text-zinc-300 hover:text-red-500 transition-colors"
            >
              <Heart
                size={20}
                strokeWidth={1.5}
                className={
                  wishlist.some((w) => w.id === item.id)
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />
            </button>
          </div>

          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-white truncate">
              {item.name}
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
              {item.desc}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* Updated Price Color */}
              <span className="text-sm md:text-base font-bold text-[#C97C5D]">
                {item.price}
              </span>
              {/* Updated Order Button Colors */}
              <button
                onClick={() => handleOrderClick(item)}
                className="flex items-center gap-1 text-xs md:text-sm bg-[#C97C5D] text-white px-3 py-1.5 rounded-lg hover:bg-[#b56c4d] transition-colors"
              >
                <ShoppingCart size={16} />
                Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
