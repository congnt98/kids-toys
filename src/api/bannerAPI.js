import { fetchData } from "./axios";

const bannerAPI = {
  getAllBanner: async () => {
    const data = fetchData("/banners");
    return data;
  },
};

export default bannerAPI;
