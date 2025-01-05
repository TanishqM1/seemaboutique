import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from '../imgs/logo.png';

// Importing the Great Vibes font from Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
`;

const FooterContainer = styled.footer`
  background-color: white;
  padding: 2rem;
  border-top: 3px solid pink;
  display: flex;
  justify-content: center; // Center all items horizontally
  align-items: center;
  width: 100%;
  box-sizing: border-box; // Ensures padding doesn't affect the width of the container
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%; // Increased width to allow more space between sections
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the logo and icons
  img {
    max-width: 200px; // Set a maximum size for the logo
    height: auto;
    margin-bottom: 1rem; // Space between the logo and icons
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 3rem; // Space between the icons
  a {
    font-size: 2rem; // Adjust icon size
    &:hover {
      opacity: 0.8; // Add hover effect for subtle feedback
    }
  }
`;

const QuickLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the quick links section
  h3 {
    font-family: 'Great Vibes', cursive; // Apply Great Vibes cursive font here
    font-size: 2rem; // Larger font for the titles
    margin-bottom: 1rem;
  }
  a {
    color: gray;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.1rem; // Larger font for the links
    &:hover {
      color: black;
    }
  }
`;

const Information = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the information section
  h3 {
    font-family: 'Great Vibes', cursive; // Apply Great Vibes cursive font here
    font-size: 2rem; // Larger font for the titles
    margin-bottom: .2rem;
  }
  p {
    color: gray;
    margin-bottom: -.2rem; // Reduce gap between each line of text
    font-size: 1.1rem; // Slightly larger text
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
            <img src={logo} alt="Seema Designer Boutique Logo" />
            <SocialIconsContainer>
              <a href="https://www.facebook.com/seema.mehta.982/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2' }} />
              </a>
              <a href="https://www.instagram.com/seemamehtaofficial/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} />
              </a>
            </SocialIconsContainer>
          </LogoContainer>

          {/* Middle container for Quick Links */}
          <QuickLinks>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/orders">Orders</a>
            <a href="/terms">Terms of Service</a>
            <a href="/Inquire">Contact</a>
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
