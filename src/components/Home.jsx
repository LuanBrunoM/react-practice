import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h1
        style={{ textAlign: 'center' }}
      >
        Práticas desenvolvidas durante o curso de React da plataforma Origamid
      </h1>

      <h2>Módulo 01: React Introdução</h2>

      <Link to="/jsx-conceitos" style={{ width: 'fit-content' }}>
        <button>JSX Conceitos</button>
      </Link>

      <Link to="/jsx-conceitos-exercicio" style={{ width: 'fit-content' }}>
        <button>JSX Conceitos Exercício</button>
      </Link>

      <Link to="/jsx-arrays" style={{ width: 'fit-content' }}>
        <button>JSX Arrays</button>
      </Link>

      <Link to="/jsx-arrays-exercicio" style={{ width: 'fit-content' }}>
        <button>JSX Arrays Exercício</button>
      </Link>

      <Link to="/eventos" style={{ width: 'fit-content' }}>
        <button>Eventos</button>
      </Link>

      <Link to="/componentes" style={{ width: 'fit-content' }}>
        <button>Componentes</button>
      </Link>

      <Link to="/propriedades" style={{ width: 'fit-content' }}>
        <button>Propriedades</button>
      </Link>

      <h2>Módulo 02: Hooks</h2>

      <Link to="/usestate" style={{ width: 'fit-content' }}>
        <button>useState</button>
      </Link>

      <Link to="/usestate-exercicio" style={{ width: 'fit-content' }}>
        <button>useState Exercicio</button>
      </Link>

      <Link to="/useeffect" style={{ width: 'fit-content' }}>
        <button>useEffect</button>
      </Link>

      <Link to="/useeffect-exercicio" style={{ width: 'fit-content' }}>
        <button>useEffect Exercicio</button>
      </Link>

      <Link to="/useref" style={{ width: 'fit-content' }}>
        <button>useRef</button>
      </Link>
    </div>
  );
}

export default Home;
