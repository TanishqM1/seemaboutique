import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path based on your file structure
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 80px; // Offset for the fixed navbar
  padding: 2rem;
`;

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Welcome to Seema Designer Boutique</h1>
        <p>This is the homepage content.</p>
      </Container>
    </>
  );
}

export default App;
