import React from 'react'
import Select from './Select';

const App = () => {
  const [produto, setProduto] = React.useState('');

  return (
    <form>
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};


export default App