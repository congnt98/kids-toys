import { fetchData } from "./axios";

const CategoryAPI = {
  getAllCategory: async () => {
    const data = await fetchData("/category");
    return data;
  },
};

export default CategoryAPI;
