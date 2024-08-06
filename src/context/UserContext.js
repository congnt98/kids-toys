// UserContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const storedCart = localStorage.getItem("cart");
    setIsAuthenticated(!!user);
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setCart([]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = Array.isArray(prevCart)
        ? [...prevCart, product]
        : [product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateCart = (productId, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        cart,
        addToCart,
        removeCart,
        updateCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
