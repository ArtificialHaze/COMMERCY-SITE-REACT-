import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.5rem;
  background: transparent;
  border: 0.05rem solid var(--light-blue);
  border-color: ${(props) =>
    props.cart ? "var(--yellow)" : "var(--light-blue)"};
  color: ${(prop) => (prop.cart ? "var(--yellow)" : "var(--light-blue)")};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  margin: 0.25rem 0.5rem 0.25rem 0;
  transition: all 300ms ease-in-out;

  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--yellow)" : "var(--light-blue)"};
    color: var(--blue);
  }

  &:focus {
    outline: none;
  }
`;
