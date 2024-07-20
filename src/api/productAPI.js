import { fetchData } from "./axios";

const productAPI = {
  getAllProducts: async () => {
    const data = fetchData("/products");
    return data;
  },
};

export default productAPI;
