import { fetchData, update } from "./axios";

const CartApi = {
  getCart: async (userId) => {
    try {
      const response = await fetchData(`/users/${userId}`);
      return response.cart || [];
    } catch (error) {
      console.error("Error getting cart:", error);
      throw error;
    }
  },

  updateCart: async (userId, cart) => {
    try {
      const currentCart = await CartApi.getCart(userId);
      const mergedCart = [...currentCart];

      cart.forEach((newItem) => {
        const existingItem = mergedCart.find((item) => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity = newItem.quantity; // Cập nhật số lượng nếu sản phẩm đã tồn tại
        } else {
          mergedCart.push(newItem); // Thêm sản phẩm mới nếu không có trong cart hiện tại
        }
      });
      const response = await update(`/users/${userId}`, { cart: mergedCart });
      return response.data;
    } catch (error) {
      console.error("Error updating cart:", error);
      throw error;
    }
  },

  addToCart: async (userId, product) => {
    try {
      const user = await fetchData(`/users/${userId}`);
      const updatedCart = [...(user.cart || [])];
      const existingProduct = updatedCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      const response = await update(`/users/${userId}`, { cart: updatedCart });
      return response.cart;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      const user = await fetchData(`/users/${userId}`);
      const updatedCart = user.cart.filter((item) => item.id !== productId);
      const response = await update(`/users/${userId}`, { cart: updatedCart });
      return response.cart;
    } catch (error) {
      console.error("Error removing from cart:", error);
      throw error;
    }
  },

  updateCartItemQuantity: async (userId, productId, quantity) => {
    try {
      const user = await fetchData(`/users/${userId}`);
      const updatedCart = user.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      const response = await update(`/users/${userId}`, { cart: updatedCart });
      return response.cart;
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      throw error;
    }
  },

  clearCart: async (userId) => {
    try {
      const response = await update(`/users/${userId}`, { cart: [] });
      return response.cart;
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  },
};

export default CartApi;
