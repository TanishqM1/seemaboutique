import React from 'react';
import styled from 'styled-components';
import GalleryImages from '../../src/components/GalleryImages';

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

const Gallery = () => {
  return (
    <PageContainer>
      {/* Store Logo */}
      <LogoContainer>
        <img src='' alt="Seema Designer Boutique Logo" />
      </LogoContainer>

      {/* Title */}
      <Title>Highlights</Title>

      {/* Gallery Carousel */}
      <GalleryImages />
    </PageContainer>
  );
};

export default Gallery;
