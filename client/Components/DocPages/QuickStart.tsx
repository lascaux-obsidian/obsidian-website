import { React, CodeBlock, monokai } from '../../../deps.ts';

const QuickStart = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Quick Start</h1>
      <p><code className="obsidianInline">obsidian</code> is Deno's first native GraphQL caching client and server module.  Boasting lightning-fast caching and fetching capabilities alongside headlining normalization and destructuring strategies, <code className="obsidianInline">obsidian</code> is equipped to support scalable, highly performant applications.</p>
      <p>Optimized for use in server-side rendered React apps built with Deno, fullstack integration of <code className="obsidianInline">obsidian</code> enables many of its most powerful features, including optimized caching exchanges between client and server as well as server-side user session storage, maintaining the benefits of server-side rendering even after client-side caches have expired.</p>
      <h2>Installation</h2>
      <p>In the server:</p>
      <CodeBlock
        text={"import { ObsidianRouter } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts';"}
        language={"typescript"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <p>In the app:</p>
      <CodeBlock
        text={"import { ObsidianWrapper } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts';"}
        language={"typescript"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <h2>Creating the Router</h2>
      <CodeBlock
        text={`import { Application, Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { ObsidianRouter, gql } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts';

const PORT = 8000;

const app = new Application();

const types = (gql as any)\`
  // Type definitions
\`;

const resolvers = {
  Query: {
    // Resolvers
  }
}

interface ObsRouter extends Router {
  obsidianSchema?: any;
}

const GraphQLRouter = await ObsidianRouter<ObsRouter>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
});

app.use(GraphQLRouter.routes(), GraphQLRouter.allowedMethods());

await app.listen({ port: PORT });`}
        language={"typescript"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <h2>Sending ObsidianSchema</h2>
      <CodeBlock
        text={`import React from 'https://dev.jspm.io/react@16.13.1';
import ReactDomServer from 'https://dev.jspm.io/react-dom@16.13.1/server';
import App from './app.tsx';

interface initialState {
  obsidianSchema?: any;
}

const initialState: initialState = {};

initialState.obsidianSchema = GraphQLRouter.obsidianSchema;

const router = new Router();
router.get('/', handlePage);

app.use(router.routes(), router.allowedMethods());

function handlePage(ctx: any) {
  try {
    const body = (ReactDomServer as any).renderToString(<App />);
    ctx.response.body = \`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>SSR React App</title>
        <script>
          window.__INITIAL_STATE__ = \${JSON.stringify(initialState)};
        </script>
      </head>
      <body >
        <div id="root">\${body}</div>
        <script src="/static/client.js" defer></script>
      </body>
      </html>\`;
  } catch (error) {
    console.error(error);
  }
}`}
        language={"tsx"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <h2>Creating the Wrapper</h2>
      <CodeBlock
        text={`import { ObsidianWrapper } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts';

const App = () => {
  return (
    <ObsidianWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </ObsidianWrapper>
  );
};`}
        language={"tsx"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <h2>Making a Query</h2>
      <CodeBlock
        text={``}
        language={"tsx"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
    </div>
  )
}

export default QuickStart;
