import React, { useState, useEffect } from 'react';
const CardTempo = (props) => {

  return (
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Previsão do Tempo</h5>
            <p class="card-text">Localização: {props.localizacao}</p>
            <p class="card-text">Temperatura: {props.temp}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardTempo;