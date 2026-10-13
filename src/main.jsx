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
  // Store shared UI state here so the navbar and directory page stay in sync.
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState([]);
  return (
    <BrowserRouter>
      <div className={`${dark ? 'dark' : ''} min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {/* Pass the shared theme and favorite count to the navigation controls. */}
        <Navbar dark={dark} onToggleDark={()=>setDark(d=>!d)} favoritesCount={favorites.length} />
        {/* Map browser paths to pages; the wildcard handles unknown URLs. */}
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

// Mount the React application into the root element declared in index.html.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
