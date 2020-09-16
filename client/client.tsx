import { React } from '../deps.ts';
import { ReactDom } from '../deps.ts';
import App from './app.tsx';

// import { ObsidianWrapper } from '../ObsidianWrapper/ObsidianWrapper.jsx';

declare global {
  var __INITIAL_STATE__: any;
}

// Grab the state that the server sent
const state = window.__INITIAL_STATE__;

// Hydrate the app and reconnect React functionality
(ReactDom as any).hydrate(
  // <ObsidianWrapper>
  <App state={state} />,
  // </ObsidianWrapper>
  document.getElementById('root')
);
