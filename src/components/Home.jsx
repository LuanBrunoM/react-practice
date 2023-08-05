import React from 'react';
import ButtonHome from './ButtonHome';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h1 style={{ textAlign: 'center' }}>
        Práticas desenvolvidas durante o curso de React da plataforma Origamid
      </h1>

      <h2>Módulo 01: React Introdução</h2>
      <ButtonHome to={"/jsx-conceitos"} nameButton={"JSX Conceitos"} />
      <ButtonHome to={"/jsx-conceitos-exercicio"} nameButton={"JSX Conceitos Exercício"} />
      <ButtonHome to={"/jsx-arrays"} nameButton={"JSX Arrays"} />
      <ButtonHome to={"/jsx-arrays-exercicio"} nameButton={"JSX Arrays Exercício"} />
      <ButtonHome to={"/eventos"} nameButton={"Eventos"} />
      <ButtonHome to={"/componentes"} nameButton={"Componentes"} />
      <ButtonHome to={"/propriedades"} nameButton={"Propriedades"} />

      <h2>Módulo 02: Hooks</h2>
      <ButtonHome to={"/usestate"} nameButton={"useState"} />
      <ButtonHome to={"/usestate-exercicio"} nameButton={"useState Exercicio"} />
      <ButtonHome to={"/useeffect"} nameButton={"useEffect"} />
      <ButtonHome to={"/useeffect-exercicio"} nameButton={"useEffect Exercicio"} />
      <ButtonHome to={"/useref"} nameButton={"useRef"} />
      <ButtonHome to={"/usememo-usecallback"} nameButton={"useMemo e useCallback"} />
      <ButtonHome to={"/usecontext"} nameButton={"useContext"} />
      <ButtonHome to={"/usecontext-exercicio"} nameButton={"useContext Exercicio"} />
    </div>
  );
}

export default Home;
