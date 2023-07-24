import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import Form from '../../components/Footer';

const Input = () => {
  return (
    <input type="text" />
  )
}

const Button = () => {
  return (
    <button>
      Enviar
    </button>
  )
}

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  )
}

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
