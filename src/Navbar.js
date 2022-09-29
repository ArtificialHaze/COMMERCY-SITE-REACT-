import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";
import { ButtonContainer } from "./Button";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to={"/"} className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link className="ml-auto" to={"/cart"}>
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--blue);
  .nav-link {
    color: var(--white) !important;
    font-size: 1.25rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
