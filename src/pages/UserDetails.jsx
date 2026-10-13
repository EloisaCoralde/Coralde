// src/pages/UserDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import usersData from "../data/users";
export default function UserDetails(){
  // Read the user ID from the /users/:id route.
  const { id } = useParams();
  const user = usersData.find(u => String(u.id) === String(id));
  if (!user) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-12 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User not found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This profile may have been removed or the link may be incorrect.
          </p>
          <Link
            to="/users"
            className="mt-6 inline-flex rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Back to directory
          </Link>
        </div>
      </main>
    );
  }

  const initials = user.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-10 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/users"
          className="inline-flex items-center gap-2 font-medium text-blue-700 hover:text-blue-900 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:text-blue-300 dark:hover:text-blue-200 dark:focus-visible:outline-blue-300"
        >
          <span aria-hidden="true">&lt;-</span> Back to directory
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="bg-blue-700 px-6 py-8 dark:bg-blue-950 sm:px-8">
            <div className="flex items-center gap-5">
              <div
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-800 shadow-sm dark:bg-gray-800 dark:text-blue-200"
              >
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-blue-100">Team member</p>
                <h1 className="mt-1 truncate text-2xl font-bold text-white sm:text-3xl">
                  {user.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact and role
            </h2>
            <dl className="mt-5 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                <dd>
                  <a
                    href={`mailto:${user.email}`}
                    className="break-all font-medium text-blue-700 hover:underline dark:text-blue-300"
                  >
                    {user.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{user.company}</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</dt>
                <dd>
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                    {user.role}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </main>
  )
}
