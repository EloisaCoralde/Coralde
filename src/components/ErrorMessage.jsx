// src/components/ErrorMessage.jsx
import React from "react";
// Reusable error display; the parent supplies the message as children.
export default function ErrorMessage({ children }) { return <div className="p-4 text-red-600">{children}</div> }
