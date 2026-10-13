// src/pages/Users.jsx
import React, { useEffect, useState } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Users({ favorites, setFavorites }){
  // Track the directory data, current search, and loading/error feedback.
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate an asynchronous load, and clear the timer if the page unmounts early.
  useEffect(()=>{
    setLoading(true);
    // Simulate an async request before showing the local sample records.
    const t = setTimeout(()=>{
      try{
        setUsers(usersData);
        setError(null);
      } catch(e){
        // Keep an unexpected loading failure visible instead of hiding it.
        setError('Failed to load users')
      }
      setLoading(false);
    }, 1000);
    return ()=> clearTimeout(t);
  },[]);

  // Match names without case sensitivity as the search text changes.
  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
  // Return status UI before rendering the directory while data is pending or failed.
  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  // Update favorites immutably so React can detect the state change.
  const toggle = (id) => {
    // Add or remove IDs immutably so React can update the favorite state.
    if (favorites.includes(id)) setFavorites(prev => prev.filter(x=>x!==id));
    else setFavorites(prev => [...prev, id]);
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-10 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              Meet your colleagues
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Team directory
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Search the team and open a profile to learn more.
            </p>
          </div>
          <label className="block w-full sm:max-w-sm">
            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Search by name
            </span>
            {/* This controlled input updates the name filter as the user types. */}
            <input
              type="search"
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="e.g. Alice Johnson"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
            />
          </label>
        </header>

        <div className="mb-4 mt-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Team members
          </h2>
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {filtered.length} {filtered.length === 1 ? "person" : "people"}
          </span>
        </div>

        {/* Render cards for matches, or offer a one-click way to clear the search. */}
        {filtered.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(u => (
              <UserCard
                key={u.id}
                user={u}
                isFavorite={favorites.includes(u.id)}
                onToggleFavorite={toggle}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">No users found</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Try a different name or clear your search.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-4 font-semibold text-blue-700 hover:underline dark:text-blue-300"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
