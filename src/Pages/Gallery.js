import React from 'react';
import styled from 'styled-components';
import GalleryImages from '../../src/components/GalleryImages';

const PageContainer = styled.div`
  padding: 2rem;
  min-height: 80vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
  font-family: 'Great Vibes', cursive;
  margin-top: 2rem;
`;

const Gallery = () => {
  return (
    <PageContainer>
      {/* Store Logo */}

      {/* Title */}
      <Title>Highlights</Title>

      {/* Gallery Carousel */}
      <GalleryImages />
    </PageContainer>
  );
};

export default Gallery;
