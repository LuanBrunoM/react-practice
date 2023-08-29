import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return <form>
    <h2>Cores</h2>
    {cor}
    <label>
      <input
        type="radio"
        onChange={({ target }) => setCor(target.value)}
        checked={cor === 'amarelo'}
        value="amarelo"
      />
      Amarelo
    </label>
    <label>
      <input
        type="radio"
        onChange={({ target }) => setCor(target.value)}
        checked={cor === 'azul'}
        value="azul"
      />
      Azul
    </label>

    <h2>Produtos</h2>
    {produto}
    <label>
      <input
        type="radio"
        onChange={handleChange}
        checked={produto === 'smartphone'}
        value="smartphone"
      />
      Smartphone
    </label>
    <label>
      <input
        type="radio"
        onChange={handleChange}
        checked={produto === 'notebook'}
        value="notebook"
      />
      Notebook
    </label>
  </form>
}

export default App