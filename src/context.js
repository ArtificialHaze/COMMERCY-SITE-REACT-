import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { storeProducts, detailedProduct } from "./data";

export const AppContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productObject, setProductObject] = useState({
    products: [],
    detailedProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailedProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
      setProductObject((prev) => ({ ...prev, products }));
    });
  };

  const getItem = (id) => {
    const unit = productObject.products.find((item) => item.id === id);
    return unit;
  };

  const handleDetail = (id) => {
    const unit = getItem(id);
    setProductObject((prev) => ({
      ...prev,
      detailedProduct: unit,
    }));
  };

  const addToCart = (id) => {
    let tempProducts = [...productObject.products];
    const index = tempProducts.indexOf(getItem(id));
    const unit = tempProducts[index];
    unit.inCart = true;
    unit.count = 1;
    const price = unit.price;
    unit.total = price;

    setProductObject(
      (prev) => {
        return {
          ...prev,
          products: tempProducts,
          cart: [...productObject.cart, productObject],
        };
      },
      () => {
        addTotals();
      }
    );
  };

  const openModal = (id) => {
    const unit = getItem(id);
    setProductObject((prev) => ({
      ...prev,
      modalProduct: unit,
      modalOpen: true,
    }));
  };

  const closeModal = () => {
    setProductObject((prev) => ({ ...prev, modalOpen: false }));
  };

  const increment = (id) => {
    let tempCart = [...productObject.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const productObject = tempCart[index];
    productObject.count += 1;
    productObject.total = productObject.count * productObject.price;

    setProductObject(
      (prev) => {
        return { ...prev, cart: [...tempCart] };
      },
      () => {
        addTotals();
      }
    );
  };

  const decrement = (id) => {
    let tempCart = [...productObject.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const productObject = tempCart[index];
    productObject.count -= 1;

    if (productObject.count === 0) {
      removeItem(id);
    } else {
      productObject.total = productObject.count * productObject.price;
      setProductObject(
        (prev) => {
          return { ...prev, cart: [...tempCart] };
        },
        () => {
          addTotals();
        }
      );
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...productObject.products];
    let tempCart = [...productObject.card];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setProductObject(
      (prev) => {
        return {
          ...prev,
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        addTotals();
      }
    );
  };

  const clearCart = () => {
    setProductObject(
      (prev) => {
        return { ...prev, cart: [] };
      },
      () => {
        setProducts();
        addTotals();
      }
    );
  };

  const addTotals = () => {
    let subTotal = 0;
    productObject.cart.map((item) => (subTotal += item));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setProductObject((prev) => ({
      ...prev,
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        ...productObject,
        addToCart,
        handleDetail,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
