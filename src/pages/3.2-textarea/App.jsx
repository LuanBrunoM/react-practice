import React from 'react'

const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <div>
      <h1>Textarea</h1>
      <form>
        <textarea
          id="mensagem"
          value={mensagem}
          rows="5"
          onChange={({ target }) => setMensagem(target.value)}
        />
        <p>{mensagem}</p>
      </form>
    </div>
  );
};


export default App