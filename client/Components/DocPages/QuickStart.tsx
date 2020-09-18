import { React } from '../../../deps.ts';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      h1: any;
      h2: any;
      h3: any;
      p: any;
      code: any;
    }
  }
}

const QuickStart = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Quick Start</h1>
      <p><code>obsidian</code> is Deno's first native GraphQL caching client and server module.  Boasting lightning-fast caching and fetching capabilities alongside headlining normalization and destructuring strategies, <code>obsidian</code> is equipped to support scalable, highly performant applications.</p>
      <p>Optimized for use in server-side rendered React apps built with Deno, fullstack integration of <code>obsidian</code> enables many of its most powerful features, including optimized caching exchanges between client and server as well as server-side user session storage, maintaining the benefits of server-side rendering even after client-side caches have expired.</p>
      <h2>Installation</h2>
      <p>In the server:</p>
      {/*<Editor
        value={"import { ObsidianRouter } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts'"}
        highlight={(code: any) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />*/}
      <p>In the app:</p>
      <code>
        <p>
          import {"{ ObsidianWrapper }"} from 'https://deno.land/x/obsidian@v1.0.0/mod.ts'
        </p>
      </code>
      <h2>Creating the Router</h2>
      <h2>Sending ObsidianSchema</h2>
      <h2>Creating the Wrapper</h2>
      <h2>Making a Query</h2>
    </div>
  )
}

export default QuickStart;
