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

## Upload this project to GitHub

### 1. Create a GitHub repository

1. Sign in to [GitHub](https://github.com/).
2. Select **New repository**.
3. Enter a repository name, such as `Coralde_Practical`.
4. Choose whether it should be public or private.
5. Leave **Add a README file**, **Add .gitignore**, and **Choose a license** unchecked. This project already has local files and commits.
6. Select **Create repository**.
7. Copy the repository URL. It will look like `https://github.com/YOUR-USERNAME/Coralde_Practical.git`.

### 2. Create at least three meaningful commits

Instead of putting every change into one commit, stage and commit the project in these three groups. Run the commands from the project folder in the VS Code terminal, one group at a time:

**Commit 1: Add project documentation and code comments**

```bash
git add README.md src/App.jsx src/components/Button.jsx src/components/Navbar.jsx src/data/users.js
git commit -m "Document project and explain components"
```

**Commit 2: Add content to the Home and About pages**

```bash
git add src/pages/Home.jsx src/pages/About.jsx
git commit -m "Add content to Home and About pages"
```

**Commit 3: Add directory styling, profile pages, and theme support**

```bash
git add package.json package-lock.json vite.config.js src/index.css src/main.jsx src/components/UserCard.jsx src/pages/Users.jsx src/pages/UserDetails.jsx
git commit -m "Style directory and add theme support"
```

After the three commits, check that they exist:

```bash
git --no-pager log -3 --oneline
git status
```

The three commits should appear in the log, and `git status` should report a clean working tree. If it lists additional project changes, review them and create another commit rather than leaving changes out.

If Git asks you to identify yourself, configure your Git name and email, then retry the commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Connect the project to GitHub and push

Replace the example URL below with the URL you copied from your new repository:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Coralde_Practical.git
git push -u origin main
```

When prompted, sign in to GitHub or complete its authentication prompt. Once the push finishes, refresh the GitHub repository page and open **Commits** to see your three commits.

If `git remote add origin` says that `origin` already exists, update it and push:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/Coralde_Practical.git
git push -u origin main
```

### 4. Push future changes

After editing the project, use:

```bash
git add .
git commit -m "Describe your changes"
git push
```

`node_modules` and build output are excluded by `.gitignore`; GitHub will receive the source files and lockfile rather than installed dependencies.

## Project structure

- `src/main.jsx` sets up shared app state and the routes. `src/App.jsx` is the unused original Vite starter screen.
- `src/pages/` contains the Home, Users, User Details, About, and Not Found pages.
- `src/components/` contains reusable UI components such as the Navbar and UserCard.
- `src/data/users.js` contains the local sample user records.
