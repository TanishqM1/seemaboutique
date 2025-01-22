import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  &:nth-child(2) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1.8;

  h2 {
    font-family: 'Great Vibes', cursive;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  padding: 2rem;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Paragraph = styled.p`
  padding: 0 10vw;
  font-size: 1.2rem;
  line-height: 2;
  text-align: justify;
`;

const CenterImage = styled.div`

margin: auto;
padding-top: 4rem;
  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background-color: #f8f8f8;

  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const ContactButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

function About() {
  return (
    <AboutContainer>
      {/* Section with text and image */}
      <Section>
        <TextContent>
          <h2>Our Story</h2>
          <p>
            Welcome to [Your Brand Name]! Our journey began with a vision to
            create exceptional and personalized designs that leave a lasting
            impression. We take pride in our craftsmanship and attention to
            detail, ensuring each piece is tailored to perfection.
          </p>
        </TextContent>
        <ImageContent>
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image URL
            alt="Our Story"
          />
        </ImageContent>
      </Section>

      {/* Section with a full-width paragraph */}
      <Section>
        <Paragraph>
          At [Your Brand Name], we strive to create designs that resonate with
          individuality and elegance. Every project is a collaboration, where
          your ideas meet our expertise to bring your vision to life. From
          intricate details to bold statements, we are dedicated to delivering
          a seamless and unforgettable experience.
        </Paragraph>
      </Section>

      {/* Section for 2nd image */}

      <Section>

      <CenterImage>
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image URL
            alt="Our Story"
          />
      </CenterImage>

      </Section>

      {/* Contact Us Section */}
      <ContactSection>
        <h1>Contact Us</h1>
        <ContactButton onClick={() => (window.location.href = '/inquire')}>
          Inquire Now
        </ContactButton>
      </ContactSection>
    </AboutContainer>
  );
}

export default About;
