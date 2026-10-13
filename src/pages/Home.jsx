import React from "react";
import { Link } from "react-router-dom";
import users from "../data/users";

export default function Home() {
  // Show an introduction, app features, and a link to the directory.
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-12 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-2xl bg-white px-6 py-12 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            People make the team
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Meet the people behind the work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Find teammates, learn what they do, and keep the people you work
            with close at hand. Search the directory or save a favorite for
            quick reference.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Link directly to the searchable list of team members. */}
            <Link
              to="/users"
              className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-300"
            >
              Browse the team
            </Link>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {users.length} team members in the directory
            </span>
          </div>
        </section>

        {/* Summarize the main directory features for first-time visitors. */}
        <section aria-label="Directory features" className="mt-8 grid gap-5 sm:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Find teammates</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Search names and open a profile to see contact and role details.
            </p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Save favorites</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Mark people as favorites and keep track of your selections in the
              navigation bar.
            </p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Choose your theme</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Switch between light and dark appearance with the theme control
              above.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
