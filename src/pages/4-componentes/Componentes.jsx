import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

const Test = () => {
  const active = true;
  if(active){
    return <p>Teste</p>
  }else{
    return null
  }
};

const App = () => {
  return (
    <section>
      <Test />
      <Header />
      <Form />
      <Form />
      <Footer />
    </section>
  );
};

export default App;
