import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import JsxArrays from './pages/jsx-arrays/JsxArrays.jsx'
import JsxArraysExercicio from './pages/jsx-arrays/JsxArraysExercicios.jsx'
import Eventos from './pages/eventos/Eventos.jsx';
import Componentes from './pages/componentes/Componentes.jsx';



const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/jsx-arrays" element={<JsxArrays />}/>
      <Route path="/jsx-arrays-exercicio" element={<JsxArraysExercicio />}/>
      <Route path="/eventos" element={<Eventos />}/>
      <Route path="/componentes" element={<Componentes />}/>          
    </Routes>
  </BrowserRouter>
);
