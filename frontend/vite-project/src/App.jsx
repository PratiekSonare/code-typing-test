import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpeedTypingGame from './components/SpeedTypingGame';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ThemeProvider from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<SpeedTypingGame />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
