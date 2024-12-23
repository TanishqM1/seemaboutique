import React from 'react';
import styled from 'styled-components';


const PageContainer = styled.div`
  padding: 2rem;
  min-height: 80vh;  // Ensure content is at least the height of the screen
`;

const Gallery = () => {
  return (
    <PageContainer>
      <h1>Gallery</h1>
      {/* Add content for the gallery */}
      <p>This is the gallery page.</p>

    </PageContainer>
  );
};

export default Gallery;
