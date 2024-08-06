import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://9nh9jc-3001.csb.app/",
});

// Hàm gọi API chung
export const fetchData = async (endpoint) => {
  try {
    const response = await customAxios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Hàm tạo API
export const createData = async (endpoint, data) => {
  try {
    const response = await customAxios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDataById = async (endpoint, id) => {
  try {
    const response = await customAxios.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const fetchDataByCat = async (endpoint, category) => {
  try {
    const response = await customAxios.get(`${endpoint}?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
