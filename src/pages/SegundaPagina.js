import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AllCities from '../components/AllCities';
import '../styles/App.css';
const TodasCidades = () => {
  return (
    <>
    <div className='App'>
      <Header/>
      <AllCities/>
      <Footer/>
    </div>
    </>
  );
};

export default TodasCidades;
