import { useState } from 'react'
import NavBar from './components/NavBar'
import {Home} from './components/pages/Home'
import {Culture} from './components/pages/Culture'
import {Geo} from './components/pages/Geo'
import {History} from './components/pages/History'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router basename='/iranianWomenProject'>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cultura" element={<Culture />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  )
}
export default App