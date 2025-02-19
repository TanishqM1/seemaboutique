import React from 'react';
import styled from 'styled-components';
import ReviewCarousel from '../components/Review'; // Import the ReviewCarousel component
import infocard from '../imgs/infocard.png';
import logo from '../imgs/seemalogo.png'

// Styled components
const PageContainer = styled.div`
  padding: 2rem;
  padding-bottom: 6rem;  // Add space at the bottom to avoid footer overlap
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 70vh;  // Adjust height as needed
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-image: url(${logo});  // Use the imported logo
  background-size: contain;  // Ensure the full logo is visible
  background-repeat: no-repeat;
  background-position: center;
`;


const WelcomeText = styled.h1`
  font-family: 'Great Vibes', cursive;  // Cursive font for "Welcome"
  text-align: center;
  font-size: 3rem;
  margin-top: 2rem;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const Description = styled.div`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  color: #333;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

// const SecondImage = styled.div`
//   width: 100%;
//   height: 70vh;  // Same height as the first image
//   background-image: url('/path/to/your/second-image.jpg');  // Replace with your second image path
//   background-size: cover;
//   background-position: center;
// `;

const Home = () => {
  return (
    <PageContainer>
      <HeaderImage />
      {/* Welcome Text */}
      <WelcomeText>Welcome!</WelcomeText>

      {/* Content Section with Description and Image */}
      <ContentSection>
        <Description>
          <h2>Seema Designer Boutique</h2>
          <p>Seema Designer Boutique is a premier fashion destination offering high-quality, handcrafted apparel.</p>
          <p>We provide a wide variety of outfits for every occasion, carefully curated with the latest trends in mind.</p>
          <p>Visit us to experience personalized fashion that suits your unique style!</p>
        </Description>
        
        {/* Right Image (You can replace with actual image) */}
        <ImageContainer>
          <img src={infocard} alt="SeemaBoutique Info Card" />  {/* Replace with an image */}
        </ImageContainer>
      </ContentSection>
      {/* Review Carousel Section */}
      <ReviewCarousel />
    </PageContainer>
  );
};

export default Home;
