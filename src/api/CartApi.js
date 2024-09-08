import { clearApi, createData, fetchData, remove, update } from "./axios";

const CartApi = {
  getCart: async () => {
    const response = await fetchData("/cart");
    return response.data;
  },

  addToCart: async (product) => {
    const response = await createData("/cart", product);
    return response.data;
  },

  removeFromCart: async (productId) => {
    const response = await remove("/cart", productId);
    return response.data;
  },

  updateCartItemQuantity: async (productId, quantity) => {
    const response = await update(`/cart/${productId}`, { quantity });
    return response.data;
  },

  clearCart: async () => {
    const response = await clearApi("/cart");
    return response.data;
  },
};

export default CartApi;
