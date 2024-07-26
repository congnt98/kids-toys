const { fetchData } = require("./axios");

const AgeAPI = {
  getAllAge: async () => {
    const data = await fetchData("/menu");
    return data[3].category;
  },
};

export default AgeAPI;
