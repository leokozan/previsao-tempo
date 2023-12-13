import React, { useState, useEffect } from 'react';
import CardTempo from './CardTempo';
const AllCities = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    const cities = ['Paris', 'London', 'Brasilia', 'Tokyo', 'New York', 'Beijing'];
    const apiKey = '1ce0cb222640deb5b84fc8915b1034bc';

    const fetchData = async () => {
      try {
        const promises = cities.map(async (city) => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
          if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
          }
          return response.json();
        });

        const results = await Promise.all(promises);
        setCitiesWeather(results);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Temperaturas das Principais Cidades do Mundo</h2>
      <div className='container-tempo'>
        {citiesWeather.map((cityWeather, index) => (
          <div key={index}>
            <CardTempo localizacao = {cityWeather.name} temp = {cityWeather.main.temp}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCities;
