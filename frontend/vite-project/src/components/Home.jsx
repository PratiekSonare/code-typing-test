import React from 'react';
import SpeedTypingGame from './SpeedTypingGame';
import Navbar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <SpeedTypingGame />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
