import React from 'react'
import Form from '../../components/Form';

// const Titulo = (props) => {
//   return <h1 style={{color: props.cor}}>{props.texto}</h1>;
// };

// const Titulo = ({cor, texto, children}) => {
//   return <h1 style={{color: cor}}>{texto}, {children}</h1>;
// };

const App = () => {
  return (
    <div>
    {/* <section>
        <Titulo cor="red" texto="Meu Primeiro Título">
          Children
        </Titulo>
        <Titulo cor="blue" texto="Meu Segundo Título" /> 
      </section>*/}
    
     <Form />
      
    </div>
  );
};

export default App;
