import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import FuncaoOrcamento from '../src/site/prova3/Orcamento/index'
import FuncaoIngresso from '../src/site/prova3/Ingresso/index' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<FuncaoOrcamento/>}/>
        <Route path='/' element= {<FuncaoIngresso/>}/>


      </Routes>
    </BrowserRouter>



  </React.StrictMode>
);


