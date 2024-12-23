import React from 'react';
import styled from 'styled-components';

// Styled component for the Navbar
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #282828;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0ddeb8;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavButton>Home</NavButton>
      <NavButton>Gallery</NavButton>
      <NavButton>About Us</NavButton>
      <NavButton>Inquire</NavButton>
    </NavbarContainer>
  );
}

export default Navbar;
