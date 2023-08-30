import React from 'react'
import Input from './Form/input'

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>


    </form>
  )
}

export default App