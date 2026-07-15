// get the data from localStorage
export const getWishList = async () => {
  const wishList = await JSON.parse(localStorage.getItem("wishlist") || "[]");
  return wishList;
};
