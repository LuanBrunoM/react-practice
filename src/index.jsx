import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';

import JsxConceitos from './pages/1-jsx-conceitos/JsxConceitos.jsx'
import JsxConceitosExercicios from './pages/1-jsx-conceitos/JsxConceitosExercicios.jsx'
import JsxArrays from './pages/2-jsx-arrays/JsxArrays.jsx'
import JsxArraysExercicio from './pages/2-jsx-arrays/JsxArraysExercicios.jsx'
import Eventos from './pages/3-eventos/Eventos.jsx';
import Componentes from './pages/4-componentes/Componentes.jsx';
import Propriedades from './pages/5-propriedades/Propriedades.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/jsx-conceitos" element={<JsxConceitos />}/>
      <Route path="/jsx-conceitos-exercicio" element={<JsxConceitosExercicios />}/>
      <Route path="/jsx-arrays" element={<JsxArrays />}/>
      <Route path="/jsx-arrays-exercicio" element={<JsxArraysExercicio />}/>
      <Route path="/eventos" element={<Eventos />}/>
      <Route path="/componentes" element={<Componentes />}/>  
      <Route path="/propriedades" element={<Propriedades />}/>
             
    </Routes>
  </BrowserRouter>
);
