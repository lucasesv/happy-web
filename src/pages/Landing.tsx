import React from 'react';

import logoImg from '../images/logo.svg';
import '../styles/global.css';
import '../styles/pages/landing.css';


function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;