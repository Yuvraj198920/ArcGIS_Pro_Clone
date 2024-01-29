import React from 'react';

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-900.jpg?w=1060&t=st=1706510692~exp=1706511292~hmac=1fd94be5aaa7fa5f562871a2b13080bc8055a9ee1ee116a0e0179f35e302dc4e" alt="App Logo" width="30" 
              height="30" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-map"></i> Maps
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Basemaps</a></li>
                <li><a className="dropdown-item" href="#">Layers</a></li>
                <li><a className="dropdown-item" href="#">Analysis</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-tools"></i> Tools
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Measurement</a></li>
                <li><a className="dropdown-item" href="#">Editing</a></li>
                <li><a className="dropdown-item" href="#">Export</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search tools..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
