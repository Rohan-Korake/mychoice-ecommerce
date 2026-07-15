import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const WishListPage = () => {
  const initialWishlist = useLoaderData();
  const [wishlist, setWishlist] = useState(initialWishlist ?? []);

  return (
    <>
      <section className="bg-slate-50 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-2 divide-y divide-zinc-200 dark:divide-zinc-800">
          {/* Liked products */}
          <section className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Your Wishlist
            </h2>
            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/50">
                {/* Heart icon to signify the Wishlist context */}
                <div className="mb-4 p-4 bg-zinc-800 rounded-full">
                  <Heart size={48} className="text-zinc-500" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-zinc-400 max-w-sm mb-6">
                  You haven't saved any items to your wishlist yet. Explore our
                  handcrafted collection and start saving your favorites!
                </p>

                <a
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-[#C97C5D] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b56c4d] transition-all"
                >
                  <Sparkles size={18} />
                  Explore Collection
                </a>
              </div>
            ) : (
              <ProductCard
                productList={wishlist}
                onWishlistChange={setWishlist}
              />
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default WishListPage;
