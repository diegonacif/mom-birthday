import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { App } from './App';
import { Body } from './components/Body/Body';
import { Familia } from './components/Gallery/Familia/Familia';
import { Casa } from './components/Gallery/Casa/Casa';
import { Start } from './components/Start/Start';
import { Construcao } from './components/Gallery/Construção/Construcao';
import { Castiel } from './components/Gallery/Castiel/Castiel';
import { Praia } from './components/Gallery/Praia/Praia';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Start />} />
        <Route path="casa" element={<Casa />} />
        <Route path="construcao" element={<Construcao />} />
        <Route path="familia" element={<Familia />} />
        <Route path="castiel" element={<Castiel />} />
        <Route path="praia" element={<Praia />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
