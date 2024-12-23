import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Inquire from './Pages/Inquire';
import styled from 'styled-components';
import Footer from './components/Footer';

const Container = styled.div`
  margin-top: 80px; // Offset for the fixed navbar
  min-height: 100vh;  // Ensure the content takes at least the full viewport height
  display: flex;
  flex-direction: column; // Stack items vertically
  justify-content: flex-start; // Ensure the content takes the full height
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
        <Footer /> {/* Footer placed here will be part of the page */}
      </Container>
    </Router>
  );
}

export default App;
