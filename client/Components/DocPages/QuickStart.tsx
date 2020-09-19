import { React, CodeBlock, monokai, dracula } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      h1: any;
      h2: any;
      h3: any;
      p: any;
      code: any;
      br: any;
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
      <CodeBlock
        text={"import { ObsidianRouter } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts'"}
        language={"typescript"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <p>In the app:</p>
      <CodeBlock
        text={"import { ObsidianWrapper } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts'"}
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
      <h2>Creating the Wrapper</h2>
      <h2>Making a Query</h2>
    </div>
  )
}

export default QuickStart;
