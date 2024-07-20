import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:3001",
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

// Hàm gọi API theo ID
export const fetchDataById = async (endpoint, id) => {
  try {
    const response = await customAxios.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
