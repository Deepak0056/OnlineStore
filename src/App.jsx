import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndividualProduct from "./pages/IndividualProduct";
import AddToCart from "./components/AddToCart";
import Nav from "./components/Nav";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/individualProduct"
            element={<IndividualProduct />}
          />
          <Route
            exact
            path="/products"
            element={<Products />}
          />
          <Route exact path="/addToCart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
