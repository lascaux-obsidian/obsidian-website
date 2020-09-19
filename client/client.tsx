import { React, ReactDom } from '../deps.ts';
// import { ObsidianWrapper } from '../ObsidianWrapper.jsx';
import App from './app.tsx';

// Hydrate the app and reconnect React functionality
(ReactDom as any).hydrate(
  <App />,
  document.getElementById('root')
);
