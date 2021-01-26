import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Server = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Server</h1>
      <p>
        In this chapter, we'll dig into caching in ObsidianRouter, as well as
        redis implementation.
      </p>
      <h2>Server-Side Caching with Obsidian</h2>
      <p>
        Obsidian utilizes a local redis server to store our server-side cache,
        keeping our cache fast and responsive while maintaining ACID compliance.
        To learn how to setup redis on your machine, check out the{' '}
        <a href="https://redis.io/topics/quickstart">quick start</a>{' '}
        documentation.
      </p>
      <p>
        By default, your redis server should be running at port 6379. If you
        need to change your port, you may do so inside the ObsidianRouter
        options.
      </p>
      <h3>ObsidianRouter</h3>
      <p>
        ObsidianRouter setup requires an options object, which we demonstrated
        in the Getting Started chapter. The options object accepts eight
        properties, only three of which are required:
      </p>
      <ul>
        <li>
          <strong>Router</strong> - (required) You must provide the Oak Router
          class
        </li>
        <li>
          <strong>path</strong> - (optional, default:{' '}
          <code className="obsidianInline">'/graphql'</code>) Your GraphQL
          service will be available at this endpoint
        </li>
        <li>
          <strong>typeDefs</strong> - (required) Your GraphQL schema goes here
        </li>
        <li>
          <strong>resolvers</strong> - (required) Your resolvers go here
        </li>
        <li>
          <strong>context</strong> - (optional) A function to alter your Oak
          server's context object upon entering the router
        </li>
        <li>
          <strong>usePlayground</strong> - (optional, default:{' '}
          <code className="obsidianInline">true</code>) Set to{' '}
          <code className="obsidianInline">false</code> to disable the GraphQL
          Playground. Recommended when deploying your application in production
        </li>
        <li>
          <strong>useCache</strong> - (optional, default:{' '}
          <code className="obsidianInline">true</code>) Set to{' '}
          <code className="obsidianInline">false</code> to disable server-side
          caching. This negates the caching layer, and institutes a cacheless
          caching strategy in ObsidianRouter
        </li>
        <li>
          <strong>redisPort</strong> - (optional, default:{' '}
          <code className="obsidianInline">6379</code>) If your redis server is
          running at a different port, specify it here
        </li>
      </ul>
      <p>An example of ObsidianRouter with optional parameters:</p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`const GraphQLRouter = await ObsidianRouter<ObsRouter>({
  Router,
  path = '/graphql',
  typeDefs,
  resolvers,
  context,
  usePlayground = false,
  useCache = true,
  redisPort = 6379,
});`}
      </CodeBlock>
      <br />
      <h4>Recap</h4>
      <p>
        This section has walked through caching in{' '}
        <code className="obsidianInline">obsidian</code>, including our approach
        to GraphQL caching and the various caching strategies{' '}
        <code className="obsidianInline">obsidian</code> offers.
      </p>
    </div>
  );
};

export default Server;
