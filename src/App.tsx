import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import ProductDetails from "./components/ProductDetails";

const App = () => (
  <BrowserRouter>
    <ProductDetails />
  </BrowserRouter>
);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
