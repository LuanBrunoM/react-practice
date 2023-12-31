import React from 'react';
import ButtonHome from './ButtonHome';
import ContainerHome from './ContainerHome';


function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Práticas desenvolvidas durante o curso de React da plataforma Origamid
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

        <h2>Módulo 01: React Introdução</h2>
        <ContainerHome>
          <ButtonHome to={"/jsx-conceitos"} nameButton={"JSX Conceitos"} />
          <ButtonHome to={"/jsx-conceitos-exercicio"} nameButton={"JSX Conceitos Exercício"} />
          <ButtonHome to={"/jsx-arrays"} nameButton={"JSX Arrays"} />
          <ButtonHome to={"/jsx-arrays-exercicio"} nameButton={"JSX Arrays Exercício"} />
          <ButtonHome to={"/eventos"} nameButton={"Eventos"} />
          <ButtonHome to={"/componentes"} nameButton={"Componentes"} />
          <ButtonHome to={"/propriedades"} nameButton={"Propriedades"} />
        </ContainerHome>

        <h2>Módulo 02: Hooks</h2>
        <ContainerHome>
          <ButtonHome to={"/usestate"} nameButton={"useState"} />
          <ButtonHome to={"/usestate-exercicio"} nameButton={"useState Exercicio"} />
          <ButtonHome to={"/useeffect"} nameButton={"useEffect"} />
          <ButtonHome to={"/useeffect-exercicio"} nameButton={"useEffect Exercicio"} />
          <ButtonHome to={"/useref"} nameButton={"useRef"} />
          <ButtonHome to={"/usememo-usecallback"} nameButton={"useMemo e useCallback"} />
          <ButtonHome to={"/usecontext"} nameButton={"useContext"} />
          <ButtonHome to={"/usecontext-exercicio"} nameButton={"useContext Exercicio"} />
          <ButtonHome to={"/custom-hooks"} nameButton={"Custom Hooks"} />
        </ContainerHome>

        <h2>Módulo 03: Formulários</h2>
        <ContainerHome>
          <ButtonHome to={"/input"} nameButton={"Input"} />
          <ButtonHome to={"/input-exercicio"} nameButton={"Input Exercicio"} />
          <ButtonHome to={"/textarea"} nameButton={"TextArea"} />
          <ButtonHome to={"/select"} nameButton={"Select"} />
          <ButtonHome to={"/radio"} nameButton={"Radio"} />
          <ButtonHome to={"/checkbox"} nameButton={"Checkbox"} />
          <ButtonHome to={"/checkbox-exercicio"} nameButton={"Checkbox Exercício"} />
          <ButtonHome to={"/componentes-input"} nameButton={"Componentes Input"} />
          <ButtonHome to={"/componentes-select"} nameButton={"Componentes Select"} />
          <ButtonHome to={"/componentes-radio"} nameButton={"Componentes Radio"} />
          <ButtonHome to={"/componentes-checkbox"} nameButton={"Componentes Checkbox"} />
          <ButtonHome to={"/validacao"} nameButton={"Validação"} />
          <ButtonHome to={"/useform"} nameButton={"useForm"} />
        </ContainerHome>

        <h2>Módulo 04: CSS</h2>
        <ContainerHome>
          <ButtonHome to={"/css-import"} nameButton={"CSS Import"} />
        </ContainerHome>


      </div>
    </>
  );
}

export default Home;
