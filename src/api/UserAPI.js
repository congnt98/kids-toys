import { createData, fetchData } from "./axios";

const UserAPI = {
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
