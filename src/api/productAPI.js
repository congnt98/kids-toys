import { fetchData } from "./axios";

const ProductAPI = {
  getAllProducts: async () => {
    try {
      const data = await fetchData("/products");
      return data;
    } catch (error) {
      console.error("Failed to fetch products", error);
      throw error;
    }
  },

  getProductsByCategory: async (category) => {
    try {
      const data = await fetchData(`/products?category=${category}`);
      return data;
    } catch (error) {
      console.error(
        `Failed to fetch products for category: ${category}`,
        error
      );
      throw error;
    }
  },

  getNewArrivals: async () => {
    try {
      const data = await fetchData("/products");
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error("Failed to fetch new arrivals", error);
      throw error;
    }
  },
  getProductBigSale: async () => {
    try {
      const data = await fetchData("/products");
      return data.filter((product) => product.sale > 50);
    } catch (error) {
      console.error("Failed to fetch new arrivals", error);
      throw error;
    }
  },
};

export default ProductAPI;
