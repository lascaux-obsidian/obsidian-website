import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Queries = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Queries</h1>
      <p>In this chapter, we'll cover how to query using <code className="obsidianInline">obsidian</code>, and discuss the options available to you when querying.</p>
      <h2>useObsidian</h2>
      <p>After setting up ObsidianWrapper, <code className="obsidianInline">obsidian</code> exposes a custom React hook, <code className="obsidianInline">useObsidian</code>, that can be used to globally access fetching and caching capabilities.  Destructure the hook inside your React components to access <code className="obsidianInline">obsidian</code> functionality:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
      {`// MainContainer.tsx
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const MainContainer = () => {
  const { hunt, gather } = useObsidian();

  // jsx below
};`}
      </CodeBlock>
      <br/>
      <h2>hunt</h2>
      <p>To query without caching, <code className="obsidianInline">obsidian</code> offers the <code className="obsidianInline">hunt</code> method.  <code className="obsidianInline">hunt</code> has two required parameters:</p>
      <ol>
        <li><strong>query</strong> - Your GraphQL query string</li>
        <li><strong>endpoint</strong> - The endpoint where <code className="obsidianInline">obsidian</code> should send this request</li>
      </ol>
      <p><code className="obsidianInline">hunt</code> responds just like the fetch API, returning a promise that can be consumed with a <code className="obsidianInline">.then()</code>.  Let's see it in action:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
        {`// MainContainer.tsx
return (
  <div>
    <button
      onClick(() => {
        hunt(\`query { getMovie { id title releaseYear } }\`, '/graphql')
        .then(resp => console.log(resp))
      })
    >Get Movie</button>
  </div>
);`}
      </CodeBlock>
      <br/>
      <p><code className="obsidianInline">hunt</code> slims your GraphQL requests down to their core: query and endpoint.  While that's a fine improvement, <code className="obsidianInline">obsidian</code> really shines when using <code className="obsidianInline">gather</code>.</p>
      <p className="docAside"><i>NOTE</i> - <code className="obsidianInline">hunt</code> is especially useful for quickly and easily querying foreign GraphQL endpoints.  As <code className="obsidianInline">obsidian</code> relies upon <code className="obsidianInline">obsidianSchema</code> for its normalization caching strategy, foreign endpoints will not be compatible with <code className="obsidianInline">obsidian</code>'s normalization caching strategy.</p>
      <h2>gather</h2>
      <p>To utilize the caching capabilities of <code className="obsidianInline">obsidian</code>, we'll want to query our GraphQL endpoint with <code className="obsidianInline">gather</code>.  <code className="obsidianInline">gather</code> is a deceptively simple method, since it behaves just like <code className="obsidianInline">hunt</code> on the surface.  But unlike <code className="obsidianInline">hunt</code>, <code className="obsidianInline">gather</code> provides access to <code className="obsidianInline">obsidian</code>'s caching strategies.  <code className="obsidianInline">gather</code> accepts two parameters:</p>
      <ol>
        <li><strong>query</strong> - Your GraphQL query string</li>
        <li><strong>options</strong> - (optional) An object with further parameters
          <ul>
            <li><strong>endpoint</strong> - (default: <code className="obsidianInline">'/graphql'</code>) The endpoint where <code className="obsidianInline">obsidian</code> should send this request</li>
            <li><strong>pollInterval</strong> - (default: <code className="obsidianInline">null</code>) How often <code className="obsidianInline">obsidian</code> should execute this query, in ms; learn more in the <a href="#" onClick={() => props.setDocsPage('Polling')}>Advanced</a> section</li>
            <li><strong>destruture</strong> - (default: <code className="obsidianInline">true</code>) Set to <code className="obsidianInline">false</code> to use only whole-query caching; see the <a href="#" onClick={() => props.setDocsPage('Strategies')}>Caching</a> section for more details</li>
            <li><strong>sessionStore</strong> - (default: <code className="obsidianInline">false</code>) Set to <code className="obsidianInline">true</code> to store your cache in session storage instead of global memory; see the <a href="#" onClick={() => props.setDocsPage('Client')}>Caching</a> section for more details</li>
          </ul>
        </li>
      </ol>
      <p>As you can see, invoking <code className="obsidianInline">gather</code> with a query as it's only argument will make a request to your '/graphql' endpoint only once, utilizing the destructure caching strategy and storing the cached data in global memory.</p>
      <p>We'll explore caching in more detail in the <a href="#" onClick={() => props.setDocsPage('Strategies')}>Caching</a> section.  For now, let's use <code className="obsidianInline">gather</code> to showcase a simple GraphQL request:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
        {`// MainContainer.tsx
import React from 'https://dev.jspm.io/react';
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const MainContainer = () => {
  const { hunt, gather } = useObsidian();
  const [movie, setMovie] = (React as any).useState({});

  return (
    <div>
      <h1>Obsidian Film Showcase</h1>
      <p>Check out our favorite movie by clicking the button below</p>
      <button
        onClick(() => {
          gather(\`query { getMovie { id title releaseYear } }\`)
          .then(resp => setMovie(resp.data.getMovie))
        })
      >Get Movie</button>
      <p>Title: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  );
};

export default MainContainer;`}
      </CodeBlock>
      <br/>
      <p>That's it!  Subsequent <code className="obsidianInline">gather</code> queries will utilize the cache to reconstruct the result without querying the GraphQL endpoint.</p>
      <h4>Recap & Next Up</h4>
      <p>In this chapter we covered <code className="obsidianInline">useObsidian</code> and the basic use cases of the <code className="obsidianInline">hunt</code> and <code className="obsidianInline">gather</code> methods.  Next up, we'll cover mutations and the <code className="obsidianInline">mutate</code> method <code className="obsidianInline">obsidian</code> supplies.</p>
    </div>
  )
}

export default Queries;
