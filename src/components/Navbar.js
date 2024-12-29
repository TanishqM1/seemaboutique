import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Styled component for the Navbar
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;  /* Center align all the buttons */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: black;
`;

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 6rem;  /* Spacing between the buttons */
`;

const NavButton = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Dancing Script', cursive; /* Elegant cursive font */
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: pink;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavButtonsContainer>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/gallery">Gallery</NavButton>
        <NavButton to="/about">About Us</NavButton>
        <NavButton to="/inquire">Custom Orders</NavButton>
      </NavButtonsContainer>
    </NavbarContainer>
  );
}

export default Navbar;
