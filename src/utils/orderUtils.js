import { WHATSAPP_CONFIG } from "../constants/orderTemplates";
import { sellers } from "../data/sellers.js";

export const placeOrder = (item) => {
  const seller = sellers[item.sellerId];
  const message = WHATSAPP_CONFIG.MESSAGE_TEMPLATE(item);

  // record the order product
  const orderRecord = {
    ...item,
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
  };

  // get the old order records
  const existingOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
  // add current order record and save
  existingOrders.push(orderRecord);
  localStorage.setItem("userOrders", JSON.stringify(existingOrders));

  const whatsappUrl = `https://wa.me/${seller.phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};

// get data from localStorage
export const getData = async () => {
  const orderRecords = await JSON.parse(
    localStorage.getItem("userOrders") || "[]",
  );

  return orderRecords;
};
