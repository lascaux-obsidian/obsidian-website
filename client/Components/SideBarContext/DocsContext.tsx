import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}


const DocsContext = (props: any) => {

  return (
    <div>
      <ul id="docsTOC">
        <li>Quick Start</li>
        <li>Overview</li>
        <li>Basics
          <ul>
            <li>Getting Started</li>
            <li>Server-Side Rendering</li>
            <li>Queries</li>
            <li>Mutations</li>
            <li>Errors</li>
          </ul>
        </li>
        <li>Philosophy</li>
        <li>Caching
          <ul>
            <li>Strategies</li>
            <li>Client</li>
            <li>Server</li>
            <li>Errors</li>
          </ul>
        </li>
        <li>Advanced
          <ul>
            <li>Persistence</li>
            <li>Polling</li>
            <li>Subscriptions</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default DocsContext;
