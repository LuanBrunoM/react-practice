// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.
import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {

  const [cores, setCores] = React.useState(['laranja']);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }
  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor, index) => (
        <label key={index} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  )
}

export default App