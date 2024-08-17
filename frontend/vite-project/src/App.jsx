// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import statements
import SpeedTypingGame from './components/SpeedTypingGame';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<SpeedTypingGame />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
