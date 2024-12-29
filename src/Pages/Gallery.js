import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  min-height: 80vh;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    max-width: 200px;
    height: auto;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
  font-family: 'Great Vibes', cursive;
  margin-top: 8rem;
`;

const WorkSection = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 4rem; // Increased spacing between rows
  margin-left: 3rem; // Space on the left
  margin-right: 3rem; // Space on the right
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const DescriptionContainer = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  text-align: justify;
  font-size: 1.1rem;
  color: #333;
`;

const Gallery = () => {
  return (
    <PageContainer>
      {/* Store Logo */}
      <LogoContainer>
        <img src="/path/to/your/logo.png" alt="Seema Designer Boutique Logo" />
      </LogoContainer>

      {/* Title */}
      <Title>Highlights</Title>

      {/* Rows of Work */}
      <WorkSection>
        <ImageContainer>
          <img src="" alt="Work 1" />
        </ImageContainer>
        <DescriptionContainer>
          <p>
            This is a description of the first project or work showcased in the gallery.
          </p>
        </DescriptionContainer>
      </WorkSection>

      <WorkSection reverse>
        <ImageContainer>
          <img src="" alt="Work 2" />
        </ImageContainer>
        <DescriptionContainer>
          <p>
            This is a description of the second project or work showcased in the gallery.
          </p>
        </DescriptionContainer>
      </WorkSection>

      {/* Add more rows as needed */}
    </PageContainer>
  );
};

export default Gallery;
