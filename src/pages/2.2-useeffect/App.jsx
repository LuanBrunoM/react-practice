import React from 'react'

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   React.useEffect(() => {
//     console.log('Ocorre ao renderizar e ao atualizar');
//   }, []);

//   React.useEffect(() => {
//     document.title = `Total ${contar}`
//   }, [contar]);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  //----------------------------------------------------------------

  const [contar2, setContar2] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Total ' + contar2;
  }, [contar2]);

  React.useEffect(() => {
    setContar2(0);
  }, [modal]);

  return (
    <div>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>

      <div>
        {modal && <p>Meu Modal</p>}
        <button onClick={() => setModal(!modal)}>Modal</button>
        <hr />
        <button onClick={() => setContar2(contar2 + 1)}>{contar2}</button>
      </div>
    </div>

  );
};



export default App