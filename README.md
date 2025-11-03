# Netflix Clone (React)

Live demo: https://netflix-clone-mu-two-78.vercel.app/

A small Netflix-like UI built as a proof-of-concept using React, Redux Toolkit and redux-saga for async data fetching. This repo was modernized to React 18 and Redux Toolkit while preserving the existing saga-based fetching logic.

---

## What this project shows

- A responsive movie/TV browsing UI using TheMovieDB API (client-side only).
- Category rows and a banner like Netflix's UI.
- Clicking a poster attempts to open the trailer using `movie-trailer` and `react-youtube`.
- Global state managed with Redux Toolkit slice + sagas (existing saga logic preserved).

---

## Tech stack

- React 18
- Redux Toolkit (slice + configureStore)
- react-redux (hooks: `useDispatch`, `useSelector`)
- redux-saga for side effects
- Axios for API requests
- react-scripts (Create React App)

---

## Prerequisites

- Node.js 16+ (recommended)
- npm (comes with Node.js)

---

## Quick start (Windows / cmd)

1. Clone the repo and open a terminal in the project folder.

2. Install dependencies:

```cmd
cmd /c npm install
```

3. Create a `.env` file in the project root with your TheMovieDB API key (recommended):

```
REACT_APP_API_KEY=your_tmdb_api_key_here
```

> Note: The project currently contains a hard-coded API key in `src/Utils/requests.js` for the original PoC. For security and portability, replace it by reading from `process.env.REACT_APP_API_KEY` as shown above.

4. Start the dev server:

```cmd
cmd /c npm start
```

5. Open http://localhost:3000 in your browser.

---

## Available scripts

- `npm start` — start dev server
- `npm run build` — build for production
- `npm test` — run tests (CRA setup)
- `npm run eject` — eject CRA config (one-way)

---

## Project structure (high level)

- `src/`
  - `Components/` — React components (Banner, NavBar, RowCategories, RowItem)
  - `Utils/` — helper files (`axios.js`, `requests.js`)
  - `store/` — Redux Toolkit slice and store configuration
  - `Sagas/` — saga watchers and workers
  - `Reducers/`, `Actions/` — legacy action constants and reducer (partially migrated)

---

## Notes about modernization

- The repo was modernized from older React/Redux patterns to use React 18 and Redux Toolkit.
- `src/store/moviesSlice.js` is a Toolkit slice that consumes the existing `FETCH_SUCCESS` actions dispatched by sagas (keeps compatibility).
- Components were moved from `connect()` to React-Redux hooks (`useDispatch`, `useSelector`).

---

## Security & dependencies

- There are a few audit warnings reported by `npm audit` during dependency upgrades. Run `npm audit` and `npm audit fix` to triage and patch non-breaking issues.

---

## Contributing

If you'd like to contribute or continue modernizing this project, suggested next steps:

1. Replace saga + axios fetching with RTK Query for simpler data fetching and caching (optional).
2. Update testing libraries to current versions and add unit/integration tests.
3. Remove any hard-coded API keys and ensure `.env` is used. Add `.env.local.example` with required variables.
4. Consider migrating off Create React App to Vite for a faster dev experience.

---

If you want, I can create a branch with the README update committed and push a PR — tell me how you'd like it committed.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
