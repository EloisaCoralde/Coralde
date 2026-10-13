// src/pages/UserDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import usersData from "../data/users";
export default function UserDetails(){
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const found = usersData.find(u => String(u.id) === String(id));
    setUser(found || null);
  },[id]);
  if (!user) return <div className="p-4">User not found. <Link to="/users" className="text-blue-600">Back</Link></div>;
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <div>Email: {user.email}</div>
      <div>Company: {user.company}</div>
      <div>Role: {user.role}</div>
      <Link to="/users" className="text-blue-600 underline mt-4 inline-block">Back</Link>
    </div>
  )
}
