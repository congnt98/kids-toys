import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/sass/main.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
