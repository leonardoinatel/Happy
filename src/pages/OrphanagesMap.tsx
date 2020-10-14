import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanageMap.css'
import LogoImg from '../images/map-marker.svg';


const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={LogoImg} alt="logo menor" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estão esperando sua visita</p>

          <footer>
            <strong>Ilicinea</strong>
            <span>Minas Gerais</span>
          </footer>
        </header>
      </aside>

      <div>

      </div>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
