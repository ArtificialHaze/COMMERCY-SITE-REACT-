import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, ProductList, Cart, Details, Error, Modal } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Modal />
    </>
  );
};

export default App;
