import { React, CodeBlock, monokai } from '../../../../deps.ts';

const Client = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Client</h1>
      <p>In this chapter, we'll cover how to specify your caching strategy in ObsidianWrapper, as well as how to override global choices in individual <code className="obsidianInline">useObsidian</code> methods.</p>
      <h2>ObsidianWrapper</h2>
      <p>While working with ObsidianWrapper, you have multiple opportunities to hone your caching strategy.  At a global level, when first wrapping your app with ObsidianWrapper, you may optionally assign a client property to ObsidianWrapper.  This client property should be a new ObsidianClient object, a class you can import from Obsidian:</p>
      <CodeBlock
        text={`import { ObsidianClient } from 'https://deno.land/x/obsidian@v1.0.1/clientMod.ts';`}
        language={"tsx"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <p>The ObsidianClient constructor accepts one parameter, an object with three optional properties:</p>
      <ul>
        <li><strong>url</strong> - (default: <code className="obsidianInline">'/graphql'</code>) The endpoint where <code className="obsidianInline">obsidian</code> should send all requests by default</li>
        <li><strong>globalSessionStore</strong> - (default: <code className="obsidianInline">false</code>) By default, <code className="obsidianInline">obsidian</code> stores your cache in global memory.  This keeps your cache from persisting between page reloads and refreshes.  By setting this property to <code className="obsidianInline">true</code>, <code className="obsidianInline">obsidian</code> will store your cache in session storage, persisting your cache across a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage">page session</a></li>
        <li><strong>globalDestructure</strong> - (default: <code className="obsidianInline">true</code>) If you would like to utilize a whole-query caching strategy in your application, set this property to false.  This property will default all <code className="obsidianInline">gather</code> calls to whole-query caching</li>
      </ul>
      <p>An example of setting global options in ObsidianWrapper:</p>
      <CodeBlock
        text={`import React from 'https://dev.jspm.io/react@16.13.1';
import { ObsidianWrapper, ObsidianClient } from 'https://deno.land/x/obsidian@v1.0.1/clientMod.ts';

const client = new ObsidianClient({
  globalSessionStore: true,
  globalDestructure: false
});

const App = () => {
  return (
    <ObsidianWrapper client={client}>
      <MainContainer />
    </ObsidianWrapper>
  );
};`}
        language={"tsx"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <h3>hunt</h3>
      <p>While you may specify options at a global level, further specifity may be required for individual GraphQL queries.  If you would like to utilize a cacheless caching strategy, simply execute your GraphQL queries with the <code className="obsidianInline">hunt</code> method.  <code className="obsidianInline">hunt</code> bypasses the caching layer and makes a POST request to your specified endpoint:</p>
      <CodeBlock
        text={`hunt(\`query { getMovie { id title releaseYear } }\`, '/graphql')
.then(resp => console.log(resp))`}
        language={"tsx"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <h3>gather</h3>
      <p>Your global client options will apply to any <code className="obsidianInline">gather</code> requests in your app, but the need may arise for caching to be tuned at an individual request level.  The <code className="obsidianInline">gather</code> method accepts a second optional parameter, an object with four optional properties:</p>
      <ul>
        <li><strong>endpoint</strong> - (default: <code className="obsidianInline">'/graphql'</code>) The endpoint where <code className="obsidianInline">obsidian</code> should send this request</li>
        <li><strong>pollInterval</strong> - (default: <code className="obsidianInline">null</code>) How often <code className="obsidianInline">obsidian</code> should execute this query, in ms; learn more in the <a href="#" onClick={() => props.setDocsPage('Polling')}>Advanced</a> section</li>
        <li><strong>destruture</strong> - (default: <code className="obsidianInline">true</code>) Setting this property to <code className="obsidianInline">false</code> will enable whole-query caching for this query, meaning the response will not be normalized and subsequent requests made with this <code className="obsidianInline">gather</code> call will check the cache for the complete query string, rather than a minified hash.  Note that subsequent calls of the same query made elsewhere in the application must have destruture set to <code className="obsidianInline">false</code> in order to access the response that will be stored in the cache after this request</li>
        <li><strong>sessionStore</strong> - (default: <code className="obsidianInline">false</code>) Your global session storage option will override this property, which by default will remain <code className="obsidianInline">false</code>.  Setting this property to <code className="obsidianInline">true</code> will store any cached data in session storage, which can be useful for API calls made when your app first mounts, as that data persisting through page reloads will improve your page-load time.  However, note that any <code className="obsidianInline">gather</code> queries which do not use session storage will not have access to the cached data stored in session storage, which may result in duplicate data and poor performance as your application makes multiple requests to the server</li>
      </ul>
      <p>An example of <code className="obsidianInline">gather</code> with optional parameters:</p>
      <CodeBlock
        text={`gather(\`query { getMovie { id title releaseYear } }\`, {
  destruture: false,
  sessionStore: true
})
.then(resp => console.log(resp))`}
        language={"tsx"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <h3>mutate</h3>
      <p><code className="obsidianInline">mutate</code> comes with one optional parameter, an object with two optional properties:</p>
      <ul>
        <li><strong>endpoint</strong> - (default: <code className="obsidianInline">'/graphql'</code>) The endpoint where <code className="obsidianInline">obsidian</code> should send this request</li>
        <li><strong>clearCache</strong> - (default: <code className="obsidianInline">true</code>) Set to <code className="obsidianInline">false</code> to leave the cache as is when mutating.  Only set this property to <code className="obsidianInline">false</code> if you are certain this mutation will not affect the data already stored in the cache.</li>
      </ul>
      <p>An example of <code className="obsidianInline">mutate</code> with optional parameters:</p>
      <CodeBlock
        text={`gather(\`query { deleteMovie { id title releaseYear } }\`, {
  clearCache: false
})
.then(resp => console.log(resp))`}
        language={"tsx"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <h4>Recap & Next Up</h4>
      <p>In this chapter we learned how to control our caching strategy in the <code className="obsidianInline">obsidian</code> client, ObsidianWrapper.  Next, we'll dive into caching options in ObsidianRouter.</p>
    </div>
  )
}

export default Client;
