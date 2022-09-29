import React from "react";
import Title from "./Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { useGlobalContext } from "./context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart,...productObject} = useGlobalContext();
  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name={"Your"} title="cart" />
          <CartColumns />
          <CartList value={...productObject} />
          <CartTotals value={value} history={props.history}/>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
