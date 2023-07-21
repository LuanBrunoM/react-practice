import React from "react";

const App = () => {
  const produtos = ['Notebook', 'Tablet', 'Smartphone'];
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  
  return (
    // <div>
    //   {produtos} {empresas}
    // </div>
    //   <ul>

    //   {filmes.map((filme) => (
    //     <li key={filme}>{filme}</li>
    //   ))}
    // </ul>   

    <ul>
      {livros
        .filter(({ano}) => ano >= 1998)
        .map(({nome, ano}) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
      ))}
    </ul>
  )
}

export default App
