import { fetchData } from "./axios";

const BrandsAPI = {
  getAllBrands: async () => {
    const data = fetchData("/brands");
    return data;
  },
};

export default BrandsAPI;
