import { React, CodeBlock, dracula } from '../../../../deps.ts';

const ServerSideRendering = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Server-Side Rendering</h1>
      <p>
        In this chapter, we'll learn how to implement ObsidianWrapper,{' '}
        <code className="obsidianInline">obsidian</code>'s GraphQL client, in a
        React app built with server-side rendering.
      </p>
      <h2>ObsidianWrapper</h2>
      <p>
        Before we can discuss server-side rendering in Deno, we must first build
        out our client application. Setting up ObsidianWrapper is super simple:
        wrap your app with ObsidianWrapper and you are ready to start using{' '}
        <code className="obsidianInline">obsidian</code>'s caching capabilities!{' '}
      </p>
      <h3>Installation</h3>
      <p>
        Import React and ObsidianWrapper at your top-level component along with
        any child components:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// App.tsx
import React from 'https://dev.jspm.io/react';
import { ObsidianWrapper } from 'https://deno.land/x/obsidian/clientMod.ts';
import MainContainer from './MainContainer.tsx';`}
      </CodeBlock>
      <br />
      <h3>App Setup</h3>
      <p>
        Wrap your main container in ObsidianWrapper. This exposes the{' '}
        <code className="obsidianInline">useObsidian</code> hook, which will
        enable us to make GraphQL requests and access our cache from anywhere in
        our app.
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// App.tsx
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const App = () => {
  return (
    <ObsidianWrapper>
      <MainContainer />
    </ObsidianWrapper>
  );
};

export default App;`}
      </CodeBlock>
      <br />
      <p>And let's set up our MainContainer with some static html:</p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// MainContainer.tsx
import React from 'https://dev.jspm.io/react';

const MainContainer = () => {
  return (
    <div>
      <h1>Obsidian Film Showcase</h1>
      <p>Check out our favorite movie by clicking the button below</p>
      <button>Get Movie</button>
    </div>
  );
};

export default MainContainer;`}
      </CodeBlock>
      <br />
      <h2>Serving Our App</h2>
      <p>
        Now that we've built a simple React app, let's utilize server-side
        rendering to send a pre-rendered version to the client.
      </p>
      <h3>Router Setup</h3>
      <p>We can create a router for our base path like so:</p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const router = new Router();
router.get('/', handlePage);

app.use(router.routes(), router.allowedMethods());`}
      </CodeBlock>
      <br />
      <h3>renderToString</h3>
      <p>
        At last, let's build our HTML file inside of our{' '}
        <code className="obsidianInline">handlePage</code> function, using
        ReactDomServer's <code className="obsidianInline">renderToString</code>{' '}
        method to insert our pre-rendered app inside the body. We'll also send
        our initialState object in the head, providing ObsidianWrapper all of
        the tools it needs to execute caching on the client-side:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
import React from 'https://dev.jspm.io/react';
import ReactDomServer from 'https://dev.jspm.io/react-dom/server';
import App from './App.tsx';

function handlePage(ctx: any) {
  try {
    const body = (ReactDomServer as any).renderToString(<App />);
    ctx.response.body = \`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Obsidian Film Showcase</title>
      </head>
      <body>
        <div id="root">\${body}</div>
        <script src="/static/client.tsx" defer></script>
      </body>
      </html>\`;
  } catch (error) {
    console.error(error);
  }
}`}
      </CodeBlock>
      <br />
      <h3>Hydration</h3>
      <p>
        We're almost there! In order to reattach all of our React functionality
        to our pre-rendered app, we have to <i>hydrate</i> our root div. First,
        let's create the client.tsx file that will contain the hydrate
        functionality:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// client.tsx
import React from 'https://dev.jspm.io/react';
import ReactDom from 'https://dev.jspm.io/react-dom';
import App from './App.tsx';

(ReactDom as any).hydrate(
  <App />,
  document.getElementById('root')
);`}
      </CodeBlock>
      <br />
      <p>
        In the server, we'll use Deno's native emit method to wrap up all of
        the React logic contained in our app, ready to be reattached to the DOM
        via hydration:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const { files, diagnostics } = await Deno.emit('./client/client.tsx', {
  bundle: 'esm',
});`}
      </CodeBlock>
      <br />
      <p>
        Once our client code is bundled, we can send it to the client via
        another router in our server:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const hydrateRouter = new Router();

hydrateRouter.get('/static/client.js', (context) => {
  context.response.headers.set('Content-Type', 'text/html');
  context.response.body = files['deno:///bundle.js'];
});

app.use(hydrateRouter.routes(), hydrateRouter.allowedMethods());`}
      </CodeBlock>
      <br />
      <h3>Compiling</h3>
      <p>
        Just one more step before we're up and running: specify our compiler
        options with a tsconfig.json file. To learn more about TypeScript
        project configuration, check out the official documentation{' '}
        <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">
          here
        </a>
        .
      </p>
      <CodeBlock language="json" showLineNumbers={true} style={dracula}>
        {`// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react",
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "DOM",
      "ES2017",
      "deno.ns"
    ],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
      </CodeBlock>
      <br />
      <h3>Spin Up the Server</h3>
      <p>
        Our command to start our server has expanded now that we're bundling our
        client.tsx file. The new command to start up our server looks like this:
      </p>
      <p>
        <code className="obsidianInline">
          deno run --allow-net --allow-read --unstable server.tsx -c
          tsconfig.json
        </code>
      </p>
      <h4>Recap & Next Up</h4>
      <p>
        In this chapter we set up a simple React app and implemented
        ObsidianWrapper, enabling fetching and caching at a global level. We
        utilized server-side rendering to send a pre-rendered version of our app
        to the client. Next, we'll take a look at querying with{' '}
        <code className="obsidianInline">obsidian</code> and the different
        methods and options available.
      </p>
    </div>
  );
};

export default ServerSideRendering;
