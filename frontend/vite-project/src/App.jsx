import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpeedTypingGame from './components/SpeedTypingGame';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ThemeProvider from './ThemeContext';
import AltSpeedTypingGame from './components/AltSpeedTypingGame';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<AltSpeedTypingGame />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
