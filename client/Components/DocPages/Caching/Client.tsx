import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Client = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Client</h1>
      <p>
        In this chapter, we'll cover how to specify your caching strategy in
        ObsidianWrapper.
      </p>
      <h2>ObsidianWrapper</h2>
      <p>
        While working with ObsidianWrapper, you have the opportunity to
        configure caching strategies for specific queries and mutations.
      </p>
      <h3>query</h3>
      <p>
        Obsidian queries can be configured in five ways through an options
        parameter that takes in a configuration object:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`const {
      endpoint = '/graphql',
      cacheRead = true,
      cacheWrite = true,
      pollInterval = null,
      wholeQuery = false,
    } = options;
query(\`query { getMovie { id title releaseYear } }\`, options)
  .then(resp => console.log(resp))`}
      </CodeBlock>
      <ul>
        <li>
          <strong>endpoint</strong> - (default:{' '}
          <code className="obsidianInline">'/graphql'</code>) The endpoint where{' '}
          <code className="obsidianInline">obsidian</code> should send all
          requests by default
        </li>
        <li>
          <strong>cacheRead</strong> - (default:{' '}
          <code className="obsidianInline">true</code>) When this option is
          enabled, Obsidian will check the cache to see if the relevant data is
          available before querying the server
        </li>
        <li>
          <strong>cacheWrite</strong> - (default:{' '}
          <code className="obsidianInline">true</code>) When this option is
          enabled, Obsidian will write responses to the cache
        </li>
        <li>
          <strong>pollInterval</strong> - (default:{' '}
          <code className="obsidianInline">null</code>) Turns query polling on
          and specifies how often Obsidian should send a GraphQL query to the
          server
        </li>
        <li>
          <strong>wholeQuery</strong> - (default:{' '}
          <code className="obsidianInline">false</code>) Enables whole query
          caching
        </li>
      </ul>
      <br />
      <h3>mutate</h3>
      <p>
        Obsidian mutations can be configured in four ways through an options
        parameter that takes in a configuration object:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`const {
      endpoint = '/graphql',
      cache = true,
      toDelete = true,
      update = null,
    } = options;
mutate(\`mutation addFavoriteMovie{favoriteMovie(id:4){ __typename id isFavorite}}\`, options)
  .then(resp => console.log(resp))`}
      </CodeBlock>
      <ul>
        <li>
          <strong>endpoint</strong> - (default:{' '}
          <code className="obsidianInline">'/graphql'</code>) The endpoint where{' '}
          <code className="obsidianInline">obsidian</code> should send this
          request
        </li>
        <li>
          <strong>cache</strong> - (default:{' '}
          <code className="obsidianInline">true</code>) When this option is
          enabled, <code className="obsidianInline">obsidian</code> will
          automatically update the cache after a mutation.
        </li>
        <li>
          <strong>toDelete</strong> - (default:{' '}
          <code className="obsidianInline">false</code>) When this option is set
          to true, it will indicate to
          <code className="obsidianInline">obsidian</code> that a delete
          mutation is being sent and to update the value of that hash in the
          cache with 'DELETED'.
        </li>
        <li>
          <strong>update</strong> - (default:{' '}
          <code className="obsidianInline">null</code>) Optional update function
          to customize cache updating behavior.
        </li>
      </ul>
      <br />
      <h4>Recap & Next Up</h4>
      <p>
        In this chapter we learned how to control our caching strategy in the{' '}
        <code className="obsidianInline">obsidian</code> client,
        ObsidianWrapper. Next, we'll dive into caching options in
        ObsidianRouter.
      </p>
    </div>
  );
};

export default Client;
