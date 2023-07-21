import React from 'react';

const App = () => {
  // function handleClick(event) {
  //   alert('Comprou: ' + event.target.innerText);
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>Camisa</button>
  //     <button onClick={handleClick}>Bermuda</button>
  //     <button onClick={({ target }) => target.classList.toggle('ativa')}>
  //       Ativar
  //   </button>
  //   </div>
  // );
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};

export default App;
