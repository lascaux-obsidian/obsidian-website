import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Queries = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Queries</h1>
      <p>
        In this chapter, we'll cover how to fetch GraphQL data in React using
        <code className="obsidianInline"> obsidian query</code>, and discuss the
        options available to you when querying.
      </p>
      <h2>useObsidian</h2>
      <p>
        After setting up ObsidianWrapper,
        <code className="obsidianInline"> obsidian</code> exposes a custom React
        hook, <code className="obsidianInline">useObsidian</code>, that can be
        used to globally access fetching and caching capabilities. Destructure
        the hook inside your React components to access
        <code className="obsidianInline"> obsidian</code> functionality:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// MainContainer.tsx
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const MainContainer = () => {
  const { query } = useObsidian();

  // jsx below
};`}
      </CodeBlock>
      <br />
      <h2>Executing a query</h2>
      <p>
        To run a simple query within a React component, call
        <code className="obsidianInline"> obsidian query</code> and pass it a
        GraphQL query string as a required first parameter. When your component
        renders, the <code className="obsidianInline">obsidian query </code>
        returns a response object from Obsidian Client that contains data you
        can use to render your UI. Let's look at an example:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// MainContainer.tsx

const allMoviesQuery = \`query{
  movies{
    id
    title
  }
}\`
async function getAllMovies() {
  const data = await query(allMoviesQuery);
  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}`}
      </CodeBlock>
      <br />
      <p>
        Whenever Obsidian Client fetches query results from your server, it
        automatically caches those results locally. This makes subsequent
        executions of the same query extremely fast. To utilize the caching
        capabilities of obsidian and to have more control over how the data is
        fetched, we’re providing some configuration options as a second and
        optional parameter to the
        <code className="obsidianInline"> obsidian query</code> in addition to
        the query string:
      </p>
      <ol>
        <li>
          <strong>query</strong> - Your GraphQL query string.
        </li>
        <li>
          <strong>options</strong> - (optional) An object with further
          parameters.
          <ul>
            <li>
              <strong>endpoint</strong> - (default:
              <code className="obsidianInline">'/graphql'</code>) The endpoint
              where <code className="obsidianInline">obsidian</code> should send
              this request.
            </li>
            <li>
              <strong>cacheRead</strong> - (default:
              <code className="obsidianInline"> true</code>) Determines whether
              the cache should be checked before making a server request.
            </li>
            <li>
              <strong>cacheWrite</strong> - (default:
              <code className="obsidianInline"> true</code>) Determines whether
              the response from a server request should be written into the
              cache. See the{' '}
              <a href="#" onClick={() => props.setDocsPage('Client')}>
                Caching
              </a>{' '}
              section for more details.
            </li>
            <li>
              <strong>pollInterval</strong> - (default:
              <code className="obsidianInline"> null</code>) How often
              <code className="obsidianInline"> obsidian</code> should execute
              this query, in ms. Learn more in the
              <a href="#" onClick={() => props.setDocsPage('Polling')}>
                {' '}
                Advanced{' '}
              </a>
              section.
            </li>
            <li>
              <strong>wholeQuery</strong> - (default:
              <code className="obsidianInline"> false</code>) Set to
              <code className="obsidianInline"> true</code> to conduct
              wholeQuery writes or retrieval from the cache. See the
              <a href="#" onClick={() => props.setDocsPage('Client')}>
                {' '}
                Caching{' '}
              </a>
              section for more details.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        As you can see, invoking{' '}
        <code className="obsidianInline">obsidian query</code> with a query
        string as its only argument will make a request to your '/graphql'
        endpoint only once, utilizing the destructure caching strategy and
        storing the cached data in global memory.
      </p>
      <p>
        We'll explore caching in more detail in the
        <a href="#" onClick={() => props.setDocsPage('Strategies')}>
          {' '}
          Caching
        </a>{' '}
        section. For now, let's use
        <code className="obsidianInline"> obsidian query</code> to showcase a
        simple GraphQL request that responds just like the fetch API, returning
        a promise that can be consumed with a .then():
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// MainContainer.tsx
import React from 'https://dev.jspm.io/react';
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const MainContainer = () => {
  const { query } = useObsidian();
  const [movie, setMovie] = (React as any).useState({});

  return (
    <div>
      <h1>Obsidian Film Showcase</h1>
      <p>Check out our favorite movie by clicking the button below</p>
      <button
        onClick(() => {
          query(\`query { getMovie { id title releaseYear } }\`)
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
      <br />
      <p>
        That's it! Subsequent queries will utilize the cache to reconstruct the
        result without querying the GraphQL endpoint.
      </p>
      <h4>Recap & Next Up</h4>
      <p>
        In this chapter we covered{' '}
        <code className="obsidianInline">useObsidian</code> and the basic use
        cases of the <code className="obsidianInline">query</code> method. Next
        up, we'll cover mutations and the
        <code className="obsidianInline"> mutate</code> method
        <code className="obsidianInline"> obsidian</code> supplies.
      </p>
    </div>
  );
};

export default Queries;
