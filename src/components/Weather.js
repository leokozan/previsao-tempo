import React, { useState, useEffect } from 'react';
import CardTempo from './CardTempo';
const Weather = ({ apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const API_KEY = '1ce0cb222640deb5b84fc8915b1034bc';

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Erro ao achar a cidade');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Erro buscando os dados: ', error);
      }
    };

    fetchData();
  }, [apiKey,inputValue]);

  return (
    <div className='container-tempo'>
      <h2>Informações do clima</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      {weatherData ? (
        <div>
          <CardTempo localizacao = {weatherData.name} temp = {weatherData.main.temp}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
