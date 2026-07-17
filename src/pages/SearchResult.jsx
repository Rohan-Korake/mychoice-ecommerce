import { useSearch } from "../utils/useSearch";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Jewellery, Bangles, Purse } from "../data/shopProducts";

const SearchResult = () => {
  // handle search operation
  const { filteredProducts } = useSearch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const productDataMap = {
    Jewellery: Jewellery,
    Bangles: Bangles,
    Purse: Purse,
  };

  const selectedProductList = productDataMap[query] || [];

  return (
    <>
      <section className="bg-slate-50 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-2 divide-y divide-zinc-200 dark:divide-zinc-800">
          <section id="jewellery" className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-light text-white mb-6">
              {filteredProducts.length >= 0
                ? `Results for "${query}"`
                : "No matches found"}
            </h2>
            <ProductCard productList={selectedProductList} />
          </section>
        </div>
      </section>
    </>
  );
};

export default SearchResult;
