import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import RouterCustom from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/sass/main.scss";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <RouterCustom />
      </HashRouter>
    </QueryClientProvider>
);
// BrowserRouter,