import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

//Apenas a mudança de estado
// const App = () => {
//   const ativo = true;

//   return (
//     <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
//   );
// };

//Utilização de hook (useState) para a mudança da interface
// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   // É a mesma coisa que:
//   // const ativoArray = React.useState(true);
//   // const ativo = ativoArray[0];
//   // const setAtivo = ativoArray[1];

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//     </button>
//   );
// };

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [ativo, setAtivo] = React.useState(true);
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setAtivo((anterior) => !anterior);
  }

  function handleClick2() {
    setContar((contar) => {
      setItems((items) => [...items, `Item ${contar + 1}`]);
      return contar + 1
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>

      <div>
        <button onClick={handleClick}>
          {ativo ? 'Está Ativo' : 'Está Inativo'}
        </button>
      </div>

      <div>
        {items.map(item => <li key={item}>{item}</li>)}
        <button onClick={handleClick2}>{contar}</button>
      </div>
    </div>
  )
}

export default App