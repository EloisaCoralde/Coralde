// src/components/UserCard.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  // The parent provides user data and favorite actions; this component renders one user.
  const initials = user.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700 sm:p-6">
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-200"
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <span className="mt-1 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
            {user.role}
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(user.id)}
          aria-pressed={isFavorite}
          className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-300 ${
            isFavorite
              ? 'bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">{user.company}</p>
        <a
          href={`mailto:${user.email}`}
          className="mt-1 block truncate text-sm text-blue-700 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-blue-700 dark:text-blue-300 dark:focus-visible:outline-blue-300"
        >
          {user.email}
        </a>
      </div>

      <Link
        to={`/users/${user.id}`}
        className="mt-5 inline-flex w-fit items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:text-blue-300 dark:hover:text-blue-200 dark:focus-visible:outline-blue-300"
      >
        View details <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
}
