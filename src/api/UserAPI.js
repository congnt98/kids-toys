import { createData, fetchData, fetchDataById } from "./axios";

const UserAPI = {
  getAllUser: async () => {
    try {
      const data = await fetchData("/users");
      return data;
    } catch (error) {
      console.error("Failed to fetch users", error);
      throw error;
    }
  },
  getUserById: async (userId) => {
    try {
      const data = await fetchDataById("/users", userId );
      return data;
    } catch (error) {
      console.error("Failed to fetch users", error);
      throw error;
    }
  },
  postUser: async (userData) => {
    return createData("/users", userData);
  },
  checkUserByName: async (name) => {
    const users = await fetchData("/users");
    return users.some((user) => user.name === name);
  },
  checkUserByID: async (id) => {
    const users = await fetchData("/users");
    return users.some((user) => user.id === id);
  },
  login: async (email, password) => {
    // Gọi API để lấy danh sách người dùng
    const response = await fetchData("/users", {
      params: {
        email,
        password,
      },
    });

    // Trả về dữ liệu người dùng nếu tìm thấy
    if (response.length > 0) {
      return response[0]; // Trả về người dùng đầu tiên tìm thấy
    } else {
      throw new Error("Invalid credentials");
    }
  },
};

export default UserAPI;
