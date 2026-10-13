// src/components/Button.jsx
import React from "react";
export default function Button({ onClick, children, variant = 'primary' }) {
  // Choose a color style from the variant while keeping shared button styles.
  const base = 'px-3 py-1 rounded';
  const cls = variant === 'danger' ? `${base} bg-red-500 text-white` : `${base} bg-blue-500 text-white`;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
