// src/components/UserCard.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="border p-4 rounded shadow-sm flex justify-between items-start">
      <div>
        <h3 className="font-bold">{user.name}</h3>
        <div className="text-sm">{user.email}</div>
        <div className="text-sm">{user.company} — {user.role}</div>
        <Link to={`/users/${user.id}`} className="text-blue-600 underline mt-2 inline-block">View Details</Link>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => onToggleFavorite(user.id)} className={`px-2 py-1 rounded ${isFavorite? 'bg-yellow-400' : 'bg-gray-200'}`}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
}
