import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Inquire from './components/Inquire';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 80px; // Offset for the fixed navbar
  padding: 2rem;
`;

function App() {
  return (
    <Router> {/* Wrap everything in Router to enable routing */}
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
