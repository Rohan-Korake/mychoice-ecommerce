import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Package, Repeat, ShoppingCart, Trash2 } from "lucide-react";
import { placeOrder } from "../utils/orderUtils";

const OrdersPage = () => {
  const initialOrders = useLoaderData();
  const [orderRecords, setOrderRecords] = useState(initialOrders);

  //   handle delete record
  const handleDelete = (id) => {
    const savedRecords = JSON.parse(localStorage.getItem("userOrders") || "[]");
    const updatedRecords = savedRecords.filter((record) => record.id !== id);
    localStorage.setItem("userOrders", JSON.stringify(updatedRecords));
    setOrderRecords(updatedRecords);
  };

  // handle reorder product
  const handleReorder = (item) => {
    placeOrder(item);
    const updatedRecords = JSON.parse(
      localStorage.getItem("userOrders") || "[]",
    );
    setOrderRecords(updatedRecords);
  };

  return (
    <section className="bg-slate-50 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-2 divide-y divide-zinc-200 dark:divide-zinc-800">
        {/* Liked products */}
        <section className="py-6 scroll-mt-32 lg:scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Your Orders
          </h2>

          {orderRecords.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/50">
              <div className="mb-4 p-4 bg-zinc-800 rounded-full">
                <Package size={48} className="text-zinc-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Your order list is empty
              </h3>
              <p className="text-zinc-400 max-w-sm mb-6">
                Looks like you haven't placed any orders yet. Explore our
                handcrafted collection and find something you love!
              </p>
              <a
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#C97C5D] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b56c4d] transition-all"
              >
                <ShoppingCart size={18} />
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 p-4 lg:p-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-8">
              {orderRecords.map((order) => (
                <div
                  key={order.id}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={order.img}
                      alt={order.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="space-y-4 p-4">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="line-clamp-1 text-lg font-semibold text-zinc-900 dark:text-white">
                          {order.name}
                        </h3>
                        <div className="text-lg font-bold text-[#C97C5D]">
                          ₹{String(order.price).replace(/[₹/-]/g, "")}
                        </div>
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {order.desc}
                      </p>

                      <div className="mt-3 flex items-center text-xs text-zinc-500 dark:text-zinc-500">
                        <span className="font-medium">Ordered on:</span>
                        <span className="ml-1">{order.timestamp}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-2">
                      {" "}
                      <button
                        onClick={() => handleReorder(order)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C97C5D] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b66d52]"
                      >
                        <Repeat size={18} />
                        Reorder
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="flex items-center justify-center rounded-xl border border-zinc-300 px-4 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      >
                        <Trash2
                          size={18}
                          className="text-zinc-700 dark:text-zinc-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default OrdersPage;
