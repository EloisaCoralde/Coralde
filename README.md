# Coralde Practical - Team Directory

A React team directory built with Vite and React Router. It includes local sample users, name search, user detail pages, favorites, and a light/dark theme toggle.

## Run the project locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open a terminal in the project folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To check the production build and run the linter, use:

```bash
npm run build
npm run lint
```

## Commit and push changes to GitHub

This project is already connected to [EloisaCoralde/Coralde](https://github.com/EloisaCoralde/Coralde). To upload the code comments and README update:

1. Confirm Git will record your name and GitHub-verified email on this repository:

```bash
git config --local user.name "EloisaCoralde"
git config --local user.email "eloisa.coralde@cvsu.edu.ph"
```

2. Open the VS Code terminal in the project folder and review the modified files:

```bash
git status
```

3. If the files listed are the changes you want, stage and commit them:

```bash
git add .
git commit -m "Add comments explaining project code"
```

4. Push the new commit to the `main` branch on GitHub:

```bash
git push origin main
```

5. Confirm the commit exists locally and no changes are left uncommitted:

```bash
git --no-pager log -1 --oneline
git status
```

Refresh the GitHub repository and open **Commits** to see the new commit. The earlier three commits remain in the history; this comment update will be an additional commit.

`node_modules` and build output are excluded by `.gitignore`; Git uploads the source files and lockfile, not installed dependencies.

## Project structure

- `src/main.jsx` sets up shared app state and the routes. `src/App.jsx` is the unused original Vite starter screen.
- `src/pages/` contains the Home, Users, User Details, About, and Not Found pages.
- `src/components/` contains reusable UI components such as the Navbar and UserCard.
- `src/data/users.js` contains the local sample user records.
