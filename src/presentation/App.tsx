import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import ProductDetails from "./pages/product-details";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/produto/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
