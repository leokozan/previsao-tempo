import React, { useState, useEffect } from 'react';
import Weather from '../components/Weather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/App.css';
const Principal = () => {
  return (
    <>
    <div className='App'>
      <Header/>
      <Weather/>
      <Footer/>
    </div>
      </>
  );
};

export default Principal;
