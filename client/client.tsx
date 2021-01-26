import { React, ReactDom } from '../deps.ts';
import App from './app.tsx';

// Hydrate the app and reconnect React functionality
(ReactDom as any).hydrate(
  <App />,
  document.getElementById('root')
);
