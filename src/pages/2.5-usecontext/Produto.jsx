import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      Produto: {global.contar}
      <button onClick={() => global.adicionarUm()}>Adicionar 1</button>
      <button onClick={() => global.adicionarDois()}>Adicionar 2</button>
    </div>
  )
}

export default Produto