// components/Index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Práticas desenvolvidas durante o curso de React</h1>

      <h2>Módulo 01: React Introdução</h2>
      <Link to="/eventos">
        <button>Eventos</button>
      </Link>
    </div>
  );
}

export default Home;
