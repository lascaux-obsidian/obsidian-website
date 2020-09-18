import { React, ReactDom, ObsidianWrapper } from '../deps.ts';
// import { ObsidianWrapper } from '../ObsidianWrapper.jsx';
import App from './app.tsx';

declare global {
  var __INITIAL_STATE__: any;
}

// Grab the state that the server sent
const state = window.__INITIAL_STATE__;

// Hydrate the app and reconnect React functionality
(ReactDom as any).hydrate(
  <ObsidianWrapper>
    <App state={state} />
  </ObsidianWrapper>,
  document.getElementById('root')
);
