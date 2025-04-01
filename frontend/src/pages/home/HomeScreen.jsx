import React from 'react'
import Navbar from '../../components/Navbar.jsx'

const HomeScreen = () => {
  return (
    <>
    <div className='relative h-screen text-white bg-black'>
      <Navbar/>
      <img src="/extraction.jpg" alt="Hero img" className='absolute top-0 left-0 w-full h-full object-cover -z-50' />
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true'></div>

    </div>
    </>
  );
};

export default HomeScreen;
 