import { sellers } from "../data/sellers";

export const WHATSAPP_CONFIG = {
  PHONE_NUMBER: "919834208689",
  MESSAGE_TEMPLATE: (item) => {
    const sellerInfo = sellers[item.sellerId];

    return `*New Order Request*
      
Hi ${sellerInfo.name}! I would like to order this item:
      
*Product*: ${item.name} 
*Price*: ${item.price}
*View Product Image*: ${item.img}
      
Please let me know how to proceed with the payment and delivery. Thanks!`;
  },
};
