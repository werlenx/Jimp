import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Rank from './pages/Rank.jsx'
import Agenda from './pages/Agenda.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
