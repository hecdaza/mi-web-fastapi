import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Clima from './pages/Clima'
import Farmacias from './pages/Farmacias'
import BNC from './pages/BNC'
import Indicadores from './pages/Indicadores'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Home /> : <Navigate to="/login" />
        } />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/farmacias" element={<Farmacias />} />
        <Route path="/bnc" element={<BNC />} />
        <Route path="/indicadores" element={<Indicadores />} />
      </Routes>
    </Router>
  )
}

export default App
