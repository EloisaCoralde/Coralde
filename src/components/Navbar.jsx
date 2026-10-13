// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ dark, onToggleDark, favoritesCount }) {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-between">
      <div className="space-x-4">
        {/* NavLink exposes its active state so the current page can be highlighted. */}
        <NavLink to="/" className={({isActive}) => isActive ? 'font-bold' : ''}>Home</NavLink>
        <NavLink to="/users" className={({isActive}) => isActive ? 'font-bold' : ''}>Users</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'font-bold' : ''}>About</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <div>Favorites: <strong>{favoritesCount}</strong></div>
        <button onClick={onToggleDark} className="px-3 py-1 bg-blue-500 text-white rounded">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
