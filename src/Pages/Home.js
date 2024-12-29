import React from 'react';
import styled from 'styled-components';
import ReviewCarousel from '../components/Review'; // Import the ReviewCarousel component

// Styled components
const PageContainer = styled.div`
  padding: 2rem;
  padding-bottom: 6rem;  // Add space at the bottom to avoid footer overlap
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 70vh;  // Increased height to take up more of the screen
  background-image: url('/path/to/your/image.jpg'); // Replace with your image path
  background-size: cover;
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

const SecondImage = styled.div`
  width: 100%;
  height: 70vh;  // Same height as the first image
  background-image: url('/path/to/your/second-image.jpg');  // Replace with your second image path
  background-size: cover;
  background-position: center;
`;

const Home = () => {
  return (
    <PageContainer>
      {/* Top Image Section with alt text */}
      <HeaderImage aria-label="Store front view of Seema Designer Boutique" />

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
          <img src="/path/to/your/image.jpg" alt="Boutique interior showcasing our designs" />  {/* Replace with an image */}
        </ImageContainer>
      </ContentSection>

      {/* Second Image Section */}
      <SecondImage aria-label="Fashion collection at Seema Designer Boutique" />

      {/* Review Carousel Section */}
      <ReviewCarousel />
    </PageContainer>
  );
};

export default Home;
