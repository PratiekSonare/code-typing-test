import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpeedTypingGame from './components/SpeedTypingGame';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ThemeProvider from './ThemeContext';
import Banner from './components/Banner';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Banner />
            <div>
              <Routes>
                <Route path="/" element={<SpeedTypingGame />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
