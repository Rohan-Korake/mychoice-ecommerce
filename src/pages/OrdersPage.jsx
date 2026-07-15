import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Repeat, Trash2 } from "lucide-react";

const OrdersPage = () => {
  const orderRecords = useLoaderData();
  const handleDelete = (id) => {
    console.log("Delete order:", id);
    // Add your delete logic here (filter state or update localStorage)
  };

  const handleReorder = (order) => {
    console.log("Reorder:", order.name);
    // Add your reorder logic here (e.g., add back to cart)
  };

  return (
    <section className="bg-slate-50 dark:bg-zinc-950 min-h-screen">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Your Orders
        </h2>

        {orderRecords.length === 0 ? (
          <p className="text-zinc-500">No orders found.</p>
        ) : (
          orderRecords.map((order) => (
            <div
              key={order.id}
              className="group flex flex-col sm:flex-row gap-5 p-5 bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Professional Image Container: Forced 1:1 Aspect Ratio */}
              <div className="w-full sm:w-32 flex-shrink-0">
                <div className="aspect-square w-full overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <img
                    src={order.img}
                    alt={order.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Order Details Area */}
              <div className="flex flex-col justify-between flex-1 w-full">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {order.name}
                    </h3>
                    <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider hidden sm:block">
                      {order.timestamp.split(",")[0]}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                    {order.desc}
                  </p>
                </div>

                {/* Price & Unified Action Buttons Row */}
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xl font-bold text-zinc-900 dark:text-white">
                    {order.price}
                  </span>

                  <div className="flex gap-2">
                    {/* Unified Button Style: Reorder */}
                    <button
                      onClick={() => handleReorder(order)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#C97C5D] text-white rounded-lg text-sm font-semibold hover:bg-[#b56e52] transition-colors"
                    >
                      <Repeat size={16} />
                      Reorder
                    </button>

                    {/* Unified Button Style: Delete */}
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const fetchData = async () => {
  const orderRecords = await JSON.parse(
    localStorage.getItem("userOrders") || "[]",
  );

  return orderRecords;
};

export { OrdersPage, fetchData };
