import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import RouterCustom from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/sass/main.scss";
import { NotificationProvider } from "context/NotificationContext";
import { UserProvider } from "context/UserContext";
import ScrollToTop from "component/ScrollToTop/ScrollToTop";
import { CartProvider } from "context/CartContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <HashRouter>
            <ScrollToTop />
            <RouterCustom />
          </HashRouter>
        </NotificationProvider>
      </QueryClientProvider>
    </CartProvider>
  </UserProvider>
);
