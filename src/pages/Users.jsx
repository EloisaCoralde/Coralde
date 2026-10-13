// src/pages/Users.jsx
import React, { useEffect, useState } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Users({ favorites, setFavorites }){
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    const t = setTimeout(()=>{
      try{
        setUsers(usersData);
        setError(null);
      } catch(e){ setError('Failed to load users') }
      setLoading(false);
    }, 1000);
    return ()=> clearTimeout(t);
  },[]);

  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!filtered.length) return <div className="p-4">No users found.</div>;

  const toggle = (id) => {
    if (favorites.includes(id)) setFavorites(prev => prev.filter(x=>x!==id));
    else setFavorites(prev => [...prev, id]);
  }

  return (
    <div className="p-4 space-y-4">
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name" className="border p-2 w-full" />
      <div className="grid grid-cols-1 gap-4">
        {filtered.map(u => <UserCard key={u.id} user={u} isFavorite={favorites.includes(u.id)} onToggleFavorite={toggle} />)}
      </div>
    </div>
  )
}
