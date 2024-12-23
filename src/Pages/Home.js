import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  padding-bottom: 6rem;  // Add space at the bottom to avoid footer overlap
`;

const Home = () => {
  return (
    <PageContainer>
      <h1>Welcome to Seema Designer Boutique</h1>
      <p>This is some test content to fill the home page.</p>
      
      {/* Add some dummy content to test the footer visibility */}
      <div style={{ height: '150vh', backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <h2>About Our Boutique</h2>
        <p>Seema Designer Boutique is a premier fashion destination offering high-quality, handcrafted apparel.</p>
        <p>We provide a wide variety of outfits for every occasion, carefully curated with the latest trends in mind.</p>
        <p>Visit us to experience personalized fashion that suits your unique style!</p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Expertly designed garments</li>
          <li>Custom-made options available</li>
          <li>Exclusive collections</li>
          <li>Excellent customer service</li>
        </ul>

        <p>We look forward to welcoming you to our boutique!</p>
      </div>
    
    </PageContainer>
  );
};

export default Home;
