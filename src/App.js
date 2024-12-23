import React from 'react';
import styled from 'styled-components'; // Ensure styled-components is installed

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const WelcomeText = styled.h1`
  color: #333;
  font-size: 2rem;
`;

function App() {
  return (
    <HomePage>
      <WelcomeText>Welcome to Seema Designer Boutique</WelcomeText>
    </HomePage>
  );
}

export default App;
