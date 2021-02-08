import React from 'https://dev.jspm.io/react';
import ReactDomServer from 'https://dev.jspm.io/react-dom/server';
import ReactDom from 'https://dev.jspm.io/react-dom';

import rsh from 'https://dev.jspm.io/react-syntax-highlighter';
import codeStyles from 'https://dev.jspm.io/npm:react-syntax-highlighter@15.3.1/dist/cjs/styles/prism';


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
  dracula
};
