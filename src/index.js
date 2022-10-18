
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import FuncaoCinema from '../src/funcaoCinema/index'
import FuncaoOrcamento from '../src/funcaoOrcamento/index'
import FuncaoFebre from '../src/funcaoFebre/index'
import FuncaoParadas from '../src/funcaoParadas/index';
import FuncaoSalario from '../src/funcaoSalario/index'
import FuncaoAcai from '../src/funcaoAcai/index'
import FuncaoSigno from '../src/funcaoSigno/index'
import FuncaoSorvete from '../src/funcaoSorvete/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route  path='/' element={<FuncaoAcai/>}/>
    <Route  path='/FuncaoSigno' element={<FuncaoSigno/>}/>
    <Route  path='/funcaoSorvete' element={<FuncaoSorvete/>}/>
    <Route path='/funcaoSalario' element={<FuncaoSalario/>}/>
    <Route path='/funcaoParadas' element={<FuncaoParadas/>}/>
    <Route path='/funcaoFebre' element={<FuncaoFebre/>}/>
    <Route path='/funcaoOrcamento' element={<FuncaoOrcamento/>}/>
    <Route path='/funcaoCinema' element={<FuncaoCinema/>}/>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
