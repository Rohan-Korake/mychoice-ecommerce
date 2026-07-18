import { useEffect, useState } from "react";
import {
  Jewellery,
  Bangles,
  Purse,
  Necklace,
  Mangalsutra,
  JewellerySet,
} from "../data/shopProducts";
import ProductCard from "../components/ProductCard";
import SectionButton from "../components/SectionButton";
import { ArrowUp } from "lucide-react";

const ShopPage = () => {
  const sectionButtons = [
    {
      id: 101,
      targetId: "#jewellery",
      label: "Jewellery",
    },
    {
      id: 102,
      targetId: "#bangles",
      label: "Bangles",
    },
    {
      id: 103,
      targetId: "#necklace",
      label: "Necklace",
    },
    {
      id: 104,
      targetId: "#mangalsutra",
      label: "Mangalsutra",
    },
    {
      id: 105,
      targetId: "#jewellerySet",
      label: "Jewellery Set",
    },
    {
      id: 106,
      targetId: "#purse",
      label: "Purse",
    },
  ];

  //   handle back to top button visibility
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* back to top button  */}
      <a
        href="#sectionButtons"
        className={`fixed bottom-8 right-8 z-[999] p-3 bg-[#C97C5D] text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-[#df9476] hover:scale-110 ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </a>

      {/* product sections  */}
      <section className="bg-slate-50 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-2 divide-y divide-zinc-200 dark:divide-zinc-800">
          <section
            id="sectionButtons"
            className="flex flex-wrap gap-3 justify-start scroll-mt-32 lg:scroll-mt-20"
          >
            <SectionButton sectionList={sectionButtons} />
          </section>

          {/* Jewellery */}
          <section id="jewellery" className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Jewellery Collection
            </h2>
            <ProductCard productList={Jewellery} />
          </section>

          {/* Jewellery Set */}
          <section
            id="jewellerySet"
            className="py-6 scroll-mt-32 lg:scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Jewellery Set
            </h2>
            <ProductCard productList={JewellerySet} />
          </section>

          {/* Jewellery */}
          <section id="necklace" className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Necklaces
            </h2>
            <ProductCard productList={Necklace} />
          </section>

          {/* Jewellery */}
          <section
            id="mangalsutra"
            className="py-6 scroll-mt-32 lg:scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Mangalsutra
            </h2>
            <ProductCard productList={Mangalsutra} />
          </section>

          {/* Bangles */}
          <section id="bangles" className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Bangles
            </h2>
            <ProductCard productList={Bangles} />
          </section>

          {/* Purse */}
          <section id="purse" className="py-6 scroll-mt-32 lg:scroll-mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Purse
            </h2>
            <ProductCard productList={Purse} />
          </section>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
