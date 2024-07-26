import { fetchData } from "./axios";

const MenuAPI = {
  getAllMenu: async () => {
    const data = fetchData("/menu");
    return data;
  },
};

export default MenuAPI;
