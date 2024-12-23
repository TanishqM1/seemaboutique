import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Importing the Great Vibes font from Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
`;

const FooterContainer = styled.footer`
  background-color: white;
  padding: 2rem;
  border-top: 3px solid pink;
  display: flex;
  justify-content: center;  // Center all items horizontally
  align-items: center;
  width: 100%;
  box-sizing: border-box;  // Ensures padding doesn't affect the width of the container
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;  // Increased width to allow more space between sections
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  img {
    max-width: 150px;  // Set a maximum size for the logo
    height: auto;
  }
`;

const QuickLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;  // Center the quick links section
  h3 {
    font-family: 'Great Vibes', cursive;  // Apply Great Vibes cursive font here
    font-size: 2rem;  // Larger font for the titles
    margin-bottom: 1rem;
  }
  a {
    color: gray;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;  // Larger font for the links
    &:hover {
      color: black;
    }
  }
`;

const Information = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;  // Center the information section
  h3 {
    font-family: 'Great Vibes', cursive;  // Apply Great Vibes cursive font here
    font-size: 2rem;  // Larger font for the titles
    margin-bottom: .2rem;
  }
  p {
    color: gray;
    margin-bottom: -.2rem;  // Reduce gap between each line of text
    font-size: 1.1rem;  // Slightly larger text
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterContainer>
        <FooterContent>
          {/* Left container for the logo */}
          <LogoContainer>
            <img src="/path/to/your/logo.png" alt="Seema Designer Boutique Logo" />
          </LogoContainer>

          {/* Middle container for Quick Links */}
          <QuickLinks>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/orders">Orders</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </QuickLinks>

          {/* Right container for Information */}
          <Information>
            <h3>Information</h3>
            <p>Seema Designer Boutique</p>
            <p>8078 128 St, Little India Plaza</p>
            <p>+1 604-290-1135</p>
            <p>seemamehtaboutique@gmail.com</p>
          </Information>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
