import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Players from './pages/Players'
import Leagues from './pages/Leagues'
import LeagueDetail from './pages/LeagueDetail'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import CopasInter from './pages/CopasInter'
import CopaInterDetalle from './pages/CopaInterDetalle'
import Memotest from './pages/Memotest'
import Reglas from './pages/Reglas'
import Var from './pages/Var'
import Contacto from './pages/Contacto'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/league/:id" element={<LeagueDetail />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="/copas-internacionales" element={<CopasInter />} />
          <Route path="/copas-internacionales/:id" element={<CopaInterDetalle />} />
          <Route path="/memotest" element={<Memotest />} />
          <Route path="/reglas" element={<Reglas />} />
          <Route path="/var" element={<Var />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
