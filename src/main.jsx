import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App(){
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState([]);
  return (
    <BrowserRouter>
      <div className={dark? 'dark' : ''}>
        <Navbar dark={dark} onToggleDark={()=>setDark(d=>!d)} favoritesCount={favorites.length} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/users/:id" element={<UserDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
