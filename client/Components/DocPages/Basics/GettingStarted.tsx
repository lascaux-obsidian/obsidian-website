import { React, CodeBlock, dracula } from '../../../../deps.ts';

const GettingStarted = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Getting Started</h1>
      <p>
        In this section, we'll learn{' '}
        <code className="obsidianInline">obsidian</code> by walking through the
        setup of a simple full stack server-side rendered React app in Deno.
      </p>
      <h2>ObsidianRouter</h2>
      <p>
        We're going to build the backend of our app with{' '}
        <a className="pinkA" href="https://deno.land/x/oak@v6.2.0">
          Oak
        </a>
        , a middleware framework for your Deno server. ObsidianRouter is an{' '}
        <i>Oak router</i>, so we must build our server with Oak in order to use{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
      <h3>Installation</h3>
      <p>
        Thanks to Deno's ECMAScript package importing, installation of Oak and{' '}
        <code className="obsidianInline">obsidian</code> is incredibly simple.
        Just import the pieces of the modules you need at the top of your
        server, like so:
      </p>
      <CodeBlock language="typescript" showLineNumbers={true} style={dracula}>
        {`// server.tsx
import { Application, Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { ObsidianRouter, gql } from 'https://deno.land/x/obsidian/mod.ts';`}
      </CodeBlock>
      <br />
      <p className="docAside">
        <i>NOTE</i> - Throughout these guides, we will be illustrating imports
        directly from a url. It is common practice for Deno apps to utilize a
        dependencies file, usually called{' '}
        <code className="obsidianInline">deps.ts</code>, where packages are
        imported from their urls and then referenced with local imports
        throughout the app. We recommend this approach, with the key caveat that
        your Oak import statements not be accidentally bundled with your
        client-side code, as the browser is unable to interpret any references
        to Deno. You can easily accomplish this by creating two separate
        dependency files for your server and client code.
      </p>
      <h3>Oak</h3>
      <p>
        Now that we've imported our modules, let's begin by setting up our Oak
        server:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const PORT = 8000;

const app = new Application();

app.addEventListener('listen', () => {
  console.log(\`Listening at http://localhost:\${PORT}\`);
});

await app.listen({ port: PORT });`}
      </CodeBlock>
      <br />
      <h3>Schema</h3>
      <p>
        Next we'll add our GraphQL endpoint with ObsidianRouter. Like every
        GraphQL server, ObsidianRouter requires a GraphQL schema to define the
        structure of our data. <code className="obsidianInline">obsidian</code>{' '}
        provides <code className="obsidianInline">gql</code>, a{' '}
        <a href="https://developers.google.com/web/updates/2015/01/ES6-Template-Strings">
          tagged template literal
        </a>{' '}
        that allows ObsidianRouter to read your GraphQL schema. Let's construct
        our schema now:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const types = (gql as any)\`
  type Movie {
    id: ID
    title: String
    releaseYear: Int
  }

  type Query {
    getMovie: Movie
  }
\`;`}
      </CodeBlock>
      <br />
      <h3>Resolvers</h3>
      <p>
        Great, we have a schema! But in order for ObsidianRouter to do something
        with your schema, we need to give it <i>resolvers</i>. Resolvers tell
        ObsidianRouter what to do with incoming queries and mutations. Let's
        create a resolver for our{' '}
        <code className="obsidianInline">getMovie</code> query:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
const resolvers = {
  Query: {
    getMovie: () => {
      return {
        id: "1",
        title: "Up",
        releaseYear: 2009
      };
    },
  },
};`}
      </CodeBlock>
      <br />
      <p className="docAside">
        <i>NOTE</i> - Resolvers typically do not return hardcoded data like we
        have here. Your resolvers can fetch data from anywhere you might
        normally fetch data from, like a database or another API, but for the
        sake of simplicity our example includes a hardcoded response.
      </p>
      <h3>ObsidianRouter Setup</h3>
      <p>
        We now have everything we need to create our GraphQL endpoint using
        ObsidianRouter. For now, we'll set{' '}
        <code className="obsidianInline">useCache</code> to{' '}
        <code className="obsidianInline">false</code>- we'll learn more about
        caching with ObsidianRouter{' '}
        <a href="#" onClick={() => props.setDocsPage('Server')}>
          later
        </a>
        . Note that the router should come <i>before</i> your{' '}
        <code className="obsidianInline">app.listen</code>.
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// server.tsx
interface ObsRouter extends Router {
  obsidianSchema?: any;
}

const GraphQLRouter = await ObsidianRouter<ObsRouter>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
  useCache: false,
});

app.use(GraphQLRouter.routes(), GraphQLRouter.allowedMethods());`}
      </CodeBlock>
      <br />
      <p className="docAside">
        <i>NOTE</i> - If you are building your server in TypeScript, as we are
        here, you will have to extend the Oak Router interface to create the
        ObsidianRouter. By exposing the{' '}
        <code className="obsidianInline">obsidianSchema</code> property on the
        ObsidianRouter, we open the door to a streamlined caching implementation
        for your client-side code, which we'll explore in{' '}
        <a href="#" onClick={() => props.setDocsPage('ServerSideRendering')}>
          server-side rendering
        </a>
        .
      </p>
      <h3>Spin Up the Server</h3>
      <p>
        Let's start the server! As Deno requires us to explicitly give
        permissions, our command to start up the server looks like this:
      </p>
      <p>
        <code className="obsidianInline">
          deno run --allow-net --unstable server.tsx
        </code>
      </p>
      <h3>GraphQL Playground</h3>
      <p>
        To test our new GraphQL endpoint, head to{' '}
        <a href="localhost:8000/graphql">localhost:8000/graphql</a> to test your
        queries with GraphQL Playground. To learn more about this tool, check
        out their{' '}
        <a href="https://github.com/graphql/graphql-playground">GitHub repo</a>.
      </p>
      <h4>Recap & Next Up</h4>
      <p>
        In this chapter we set up a simple server with Oak and a GraphQL
        endpoint with ObsidianRouter. Next, we'll explore ObsidianWrapper,{' '}
        <code className="obsidianInline">obsidian</code>'s client
        implementation, via a React app built with server-side rendering.
      </p>
    </div>
  );
};

export default GettingStarted;
