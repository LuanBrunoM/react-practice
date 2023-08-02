import React from 'react'

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const valor = React.useMemo(() => {
//     const localStorageItem = window.localStorage.getItem('produto');
//     // só será executado uma vez
//     console.log('teste');
//     return localStorageItem;
//   }, []);
//   console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
// };

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  //useMemo
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  //useCallback
  const [contar2, setContar2] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar2((contar) => contar + 1);
  }, []);

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button onClick={() => setContar(contar + 1)}>{valor}</button>
      <button onClick={handleClick}>{contar2}</button>
    </div>

  );
};



export default App