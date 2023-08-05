import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global.data);

  if (global.data === null) return null;
  return (
    <div>
      Produto:
      {global.data.map(produto =>
        <li key={produto.id}>{produto.nome}</li>
      )}
    </div>
  )




  return (
    <div>

    </div>
  )
}

export default Produto