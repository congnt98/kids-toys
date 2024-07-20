import { fetchData } from "./axios";

const categoryAPI = {
  getAllCategory: async () => {
    const data = await fetchData("/category");
    return data;
  },
};

export default categoryAPI;
