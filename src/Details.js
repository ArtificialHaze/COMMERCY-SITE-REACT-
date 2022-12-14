import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Details = () => {
  const { addToCart, openModal, id, company, img, info, price, title, inCart } =
    useGlobalContext();

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img src={img} className="img-fluid" alt={title} />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>Model: {title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase"> {company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              Price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Info about product:
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to={"/"}>
              <ButtonContainer>Back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={!!inCart}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
