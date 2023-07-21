import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventos from './pages/eventos/App.jsx';
import Home from './components/Home.jsx';


const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/eventos" element={<Eventos />}/>         
    </Routes>
  </BrowserRouter>
);
