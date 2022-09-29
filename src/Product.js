import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import PropTypes from "prop-types";

const Product = ({ item }) => {
  const { id, title, img, price, inCart } = item;
  const { handleDetail, addToCart, openModal } = useGlobalContext();
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => {
            handleDetail(id);
          }}
        >
          <Link to={"/details"}>
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
            disabled={!!inCart}
            className="cart-btn"
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                In cart.
              </p>
            ) : (
              <i className="fas fa-cart-plus"></i>
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 550ms ease-in-out;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 550ms ease-in;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.25);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    }

    .card-footer {
      background: rgb(247, 247, 247);
    }
  }

  .card-img-top {
    transform: scale(1);
    transition: all 500ms ease-in;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.25rem 0.5rem;
    background: var(--light-blue);
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 500ms ease-in;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--blue);
    cursor: pointer;
  }
`;

export default Product;
