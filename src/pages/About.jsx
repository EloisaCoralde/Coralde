import React from "react";
import { Link } from "react-router-dom";
import users from "../data/users";

const features = [
  {
    title: "Directory and profiles",
    description:
      "Browse a local directory of teammates and open an individual profile for their email, company, and role.",
  },
  {
    title: "Search and favorites",
    description:
      "Filter the directory by name and use the favorite buttons to keep track of people you want to find again.",
  },
  {
    title: "Simple page navigation",
    description:
      "Move between Home, Users, About, and individual user pages without a full page reload.",
  },
];

export default function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-12 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            About the project
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A clearer way to connect with your team.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Team Directory is a small React app for finding team members
            and viewing their work contact details. It uses sample data stored
            in the project, so no external service or account is needed.
          </p>
        </header>

        <section aria-labelledby="features-heading" className="mt-10">
          <h2 id="features-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
            What you can do
          </h2>
          <div className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
            {features.map((feature) => (
              <article key={feature.title} className="p-5 sm:p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4 rounded-xl bg-blue-50 p-6 dark:bg-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-white">
              Ready to explore?
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              There are currently {users.length} sample team members to browse.
            </p>
          </div>
          <Link
            to="/users"
            className="inline-flex w-fit rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-300"
          >
            View the directory
          </Link>
        </section>
      </div>
    </main>
  );
}
