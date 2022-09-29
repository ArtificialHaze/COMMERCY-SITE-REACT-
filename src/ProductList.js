import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useGlobalContext } from "./context";

const ProductList = () => {
  const { productObject } = useGlobalContext();
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name={"Our"} title="products" />
          <div className="row">
            {productObject.products.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default ProductList;
