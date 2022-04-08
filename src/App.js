// import React, {useState} from 'react';
import React from 'react';
import './App.css';

import Recesso from './components/Recesso'
import Propriedades from './components/Propriedades'
import Sorteio from './components/Sorteio'
import Numero from './components/Numero';
import Desafio from './components/Desafio'

function App() {

  return (
    <div className='App'>
      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>

      <div className='linha'>
        <Desafio></Desafio>
      </div>
      
      <div className='linha'>
        <Numero></Numero>
      </div>

      <div className='linha'>
        <Propriedades titulo='QUAL A SUA NOTA?' aluno='Luís Gustavo'></Propriedades>
      </div>

      <div className='linha'>
        <Sorteio></Sorteio> 
      </div>

      <div className='linha'>
        <Recesso></Recesso>
      </div>

    </div>
  )
}

export default App;
