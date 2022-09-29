import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  const { modalOpen, closeModal, img, title, price } = useGlobalContext();
  return (
    <>
      {modalOpen && (
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-4-lg text-center text-capitalize p-5"
              >
                <h5>Item added to the cart</h5>
                <img src={img} alt={title} className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">Price: $ {price}</h5>
                <Link to={"/"}>
                  <ButtonContainer onClick={() => closeModal()}>
                    Continue
                  </ButtonContainer>
                </Link>
                <Link to={"/cart"}>
                  <ButtonContainer onClick={() => closeModal()}>
                    To cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--white);
  }
`;

export default Modal;
