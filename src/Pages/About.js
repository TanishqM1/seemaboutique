import React from 'react';
import styled from 'styled-components';
import logo from '../imgs/seemalogo.png';
import logo2 from '../imgs/altlogo.jpg';

// Styled Components
const AboutContainer = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 2rem;
  margin-top: -6rem; /* Move text box up slightly */
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;

  h2 {
    font-family: 'Great Vibes', cursive;
    font-size: 4rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const SecondSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const SecondImage = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  display: flex;
  justify-content: center;

  img {
    max-width: 90%;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ContactBox = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;

const ContactButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 4rem;
  font-size: 1.4rem;
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
      {/* First section with Our Story text and image */}
      <Section>
        <TextContent>
          <h2>Our Story</h2>
          <p>
            Welcome to Seema Boutique! Our journey began with a vision to create exceptional, personalized designs that make a lasting impression. We take great pride in our craftsmanship and meticulous attention to detail, ensuring that each piece is crafted to fit you perfectly. At Seema Boutique, every creation is uniquely yours, tailored with precision for a flawless fit. Made to Measure.
          </p>
        </TextContent>
        <ImageContent>
          <img
            src={logo}
            alt="Our Story"
          />
        </ImageContent>
      </Section>

      {/* Second section with image on left and contact on right */}
      <SecondSection>
        <SecondImage>
          <img
            src={logo2}
            alt="Our second story"
          />
        </SecondImage>
        <ContactBox>
          <h1>Contact Us</h1>
          <ContactButton onClick={() => (window.location.href = '/inquire')}>
            Inquire Now
          </ContactButton>
        </ContactBox>
      </SecondSection>
    </AboutContainer>
  );
}

export default About;
