import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { ProductDetails } from "./components/product-details";

const App = () => <ProductDetails />;
ReactDOM.render(<App />, document.getElementById("app"));
