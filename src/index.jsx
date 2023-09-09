import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';

import JsxConceitos from './pages/1.1-jsx-conceitos/JsxConceitos.jsx'
import JsxConceitosExercicios from './pages/1.1-jsx-conceitos/JsxConceitosExercicios.jsx'
import JsxArrays from './pages/1.2-jsx-arrays/JsxArrays.jsx'
import JsxArraysExercicio from './pages/1.2-jsx-arrays/JsxArraysExercicios.jsx'
import Eventos from './pages/1.3-eventos/Eventos.jsx';
import Componentes from './pages/1.4-componentes/Componentes.jsx';
import Propriedades from './pages/1.5-propriedades/Propriedades.jsx';
import UseState from './pages/2.1-usestate/App.jsx';
import UseStateExercicio from './pages/2.1-usestate/Exercicio.jsx'
import UseEffect from './pages/2.2-useeffect/App.jsx'
import UseEffectExercicio from './pages/2.2-useeffect/exercicio/App.jsx'
import UseRef from './pages/2.3-useref/App.jsx'
import UseMemoUseCallback from './pages/2.4-usememo-usecallback/App.jsx'
import UseContext from './pages/2.5-usecontext/App.jsx'
import UseContextExercicio from './pages/2.5-usecontext/exercicio/App.jsx'
import CustomHooks from './pages/2.6-custom-hooks/App.jsx'
import Input from './pages/3.1-input/App.jsx'
import InputExercicio from './pages/3.1-input/exercicio/App.jsx'
import TextArea from './pages/3.2-textarea/App.jsx'
import Select from './pages/3.3-select/App.jsx'
import Radio from './pages/3.4-radio/App.jsx'
import Checkbox from './pages/3.5-checkbox/App.jsx'
import CheckboxExercicio from './pages/3.5-checkbox/exercicio/App.jsx'
import ComponentesInput from './pages/3.6-componentes-input/App.jsx'
import ComponentesSelect from './pages/3.7-componentes-select/App.jsx'
import ComponentesRadio from './pages/3.8-componentes-radio/App.jsx'
import ComponentesCheckbox from './pages/3.9-componentes-checkbox/App.jsx'
import Validacao from './pages/3.10-validacao/App.jsx'
import UseForm from './pages/3.11-useForm/App.jsx'

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/jsx-conceitos" element={<JsxConceitos />} />
      <Route path="/jsx-conceitos-exercicio" element={<JsxConceitosExercicios />} />
      <Route path="/jsx-arrays" element={<JsxArrays />} />
      <Route path="/jsx-arrays-exercicio" element={<JsxArraysExercicio />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/propriedades" element={<Propriedades />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/usestate-exercicio" element={<UseStateExercicio />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/useeffect-exercicio" element={<UseEffectExercicio />} />
      <Route path="/useref" element={<UseRef />} />
      <Route path="/usememo-usecallback" element={<UseMemoUseCallback />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usecontext-exercicio" element={<UseContextExercicio />} />
      <Route path="/custom-hooks" element={<CustomHooks />} />
      <Route path="/input" element={<Input />} />
      <Route path="/input-exercicio" element={<InputExercicio />} />
      <Route path="/textarea" element={<TextArea />} />
      <Route path="/select" element={<Select />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/checkbox" element={<Checkbox />} />
      <Route path="/checkbox-exercicio" element={<CheckboxExercicio />} />
      <Route path="/componentes-input" element={<ComponentesInput />} />
      <Route path="/componentes-select" element={<ComponentesSelect />} />
      <Route path="/componentes-radio" element={<ComponentesRadio />} />
      <Route path="/componentes-checkbox" element={<ComponentesCheckbox />} />
      <Route path="/validacao" element={<Validacao />} />
      <Route path="/useform" element={<UseForm />} />
    </Routes>
  </BrowserRouter>
);
