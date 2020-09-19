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
      <ul className="list-group">
        <li className="list-group-item">Quick Start</li>
        <li className="list-group-item">Overview</li>
        <li className="list-group-item">Basics
          <ul className="list-group">
            <li className="list-group-item">Getting Started</li>
            <li className="list-group-item">Server-Side Rendering</li>
            <li className="list-group-item">Queries</li>
            <li className="list-group-item">Mutations</li>
            <li className="list-group-item">Errors</li>
          </ul>
        </li>
        <li className="list-group-item">Philosophy</li>
        <li className="list-group-item">Caching
          <ul className="list-group">
            <li className="list-group-item">Strategies</li>
            <li className="list-group-item">Client</li>
            <li className="list-group-item">Server</li>
            <li className="list-group-item">Errors</li>
          </ul>
        </li>
        <li className="list-group-item">Advanced
          <ul className="list-group">
            <li className="list-group-item">Persistence</li>
            <li className="list-group-item">Polling</li>
            <li className="list-group-item">Subscriptions</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default DocsContext;
