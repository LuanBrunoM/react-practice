import React from 'react'

// const App = () => {
//   const [termos, setTermos] = React.useState(false);

//   return (
//     <form>
//       {termos && <p>Aceitou os termos</p>}
//       <label>
//         <input
//           type="checkbox"
//           value="termos"
//           checked={termos}
//           onChange={({ target }) => setTermos(target.checked)}
//         />
//         Aceito os termos
//       </label>
//     </form>
//   )
// }

const App = () => {
  const [cores, setCores] = React.useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  console.log(cores)

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      {cores}
    </form>
  )
}

export default App