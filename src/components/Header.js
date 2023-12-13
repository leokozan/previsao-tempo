import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container">
        <a className="navbar-brand" href="#">Meu Site</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Pesquisar cidade</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/principais-cidades">Principais cidades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
