import React from 'https://dev.jspm.io/react';
import ReactDomServer from 'https://dev.jspm.io/react-dom/server';
import ReactDom from 'https://dev.jspm.io/react-dom';

import rsh from 'https://dev.jspm.io/react-syntax-highlighter';
import codeStyles from 'https://dev.jspm.io/npm:react-syntax-highlighter@15.3.1/dist/cjs/styles/prism';

// import {
//   ObsidianWrapper,
//   useObsidian,
// } from 'https://deno.land/x/obsidian@v1.1.1/clientMod.ts';

import {BrowserCache, ObsidianWrapper, useObsidian} from 'https://deno.land/x/obsidian@2.0.1/clientMod.ts';


const realRSH: any = rsh;
const realCodeStyles: any = codeStyles;

const CodeBlock = realRSH.Prism;
const { dracula } = realCodeStyles;

dracula['pre[class*="language-"]'].background = 'rgba(5, 5, 5, 0.93)';

export {
  React,
  ReactDomServer,
  ReactDom,
  CodeBlock,
  dracula,
  ObsidianWrapper,
  useObsidian,
  BrowserCache
};
