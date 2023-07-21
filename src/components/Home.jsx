import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
      <h1 
        style={{textAlign: 'center'}}
      >
        Práticas desenvolvidas durante o curso de React da plataforma Origamid
      </h1>

      <h2>Módulo 01: React Introdução</h2>

      <Link to="/jsx-arrays" style={{width: 'fit-content'}}>
        <button style={{width: 'fit-content'}}>JSX Arrays</button>
      </Link>

      <Link to="/jsx-arrays-exercicio" style={{width: 'fit-content'}}>
        <button style={{backgroundColor: '#ffd045'}}>JSX Arrays Exercicio</button>
      </Link>

      <Link to="/eventos" style={{width: 'fit-content'}}>
        <button>Eventos</button>
      </Link>

      <Link to="/componentes" style={{width: 'fit-content'}}>
        <button>Componentes</button>
      </Link>
    </div>
  );
}

export default Home;
