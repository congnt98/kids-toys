// src/context/UserContext.js
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import UserAPI from "api/UserAPI";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await UserAPI.login(email, password);
      if (response) {
        setIsAuthenticated(true);
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        return true;
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      return false;
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const contextValue = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
