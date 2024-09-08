import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://zqj3l5-3001.csb.app/",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Hàm để cập nhật dữ liệu của đối tượng
 * @param {string} endpoint - Endpoint của API để cập nhật
 * @param {string} id - ID của đối tượng cần cập nhật
 * @param {Object} data - Dữ liệu mới để cập nhật
 * @returns {Promise} - Kết quả trả về từ API
 */

// Hàm gọi API chung
export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await customAxios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const remove = async (endpoint, id) => {
  try {
    // Nối id vào URL
    const response = await customAxios.delete(`${endpoint}/${id}`);
    console.log("Xóa sản phẩm thành công:", response.data);
    return response.data; // Trả về dữ liệu từ response nếu cần sử dụng
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
    throw error; // Ném lỗi để xử lý tại nơi gọi hàm nếu cần
  }
};

export const update = async (endpoint, data) => {
  try {
    const response = await customAxios.put(endpoint, data);
    console.log("Cập nhật thành công:", response.data);
    return response; // Trả về dữ liệu từ response
  } catch (error) {
    console.error("Lỗi khi cập nhật dữ liệu:", error);
    throw error; // Ném lỗi để xử lý tại nơi gọi hàm nếu cần
  }
};

export const clearApi = async (endpoint) => {
  try {
    const response = await customAxios.delete(endpoint);
    console.log("Cập nhật thành công:", response.data);
    return response; // Trả về dữ liệu từ response
  } catch (error) {
    console.error("Lỗi khi cập nhật dữ liệu:", error);
    throw error; // Ném lỗi để xử lý tại nơi gọi hàm nếu cần
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

// Hàm lấy dữ liệu theo ID
export const fetchDataById = async (endpoint, id) => {
  try {
    const response = await customAxios.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Hàm lấy dữ liệu theo chuỗi truy vấn
export const fetchDataByQueryString = async (endpoint, queryString) => {
  try {
    const response = await customAxios.get(`${endpoint}?${queryString}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Hàm lấy dữ liệu theo danh mục
export const fetchDataByCat = async (endpoint, category) => {
  try {
    const response = await customAxios.get(`${endpoint}?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDataBySubCat = async (endpoint, category) => {
  try {
    const response = await customAxios.get(
      `${endpoint}?subcategory=${category}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Hàm lấy sản phẩm theo danh sách ID danh mục
export const getProductsByCategoryIds = async (categoryIds) => {
  const queryString = categoryIds.map((id) => `categoryId=${id}`).join("&");
  const response = await fetchDataByQueryString("products", queryString);
  return response;
};
