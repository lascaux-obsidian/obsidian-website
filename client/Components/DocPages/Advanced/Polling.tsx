import { React, CodeBlock, monokai } from '../../../../deps.ts';

const Polling = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Polling</h1>
      <p>Sometimes applications require regular streams of GraphQL queries sent via HTTP requests.  If you find yourself in this position, <code className="obsidianInline">obsidian</code> can help.  The <code className="obsidianInline">gather</code> method accepts an optional 'pollInterval' property in it's options parameter, which can be used to specify (in ms) how often <code className="obsidianInline">obsidian</code> should send off a new query.  An example:</p>
      <CodeBlock
        text={`gather(\`query { getMovie { id title releaseYear } }\`, {
  pollInterval: 2000
})
.then(resp => console.log(resp))`}
        language={"tsx"}
        showLineNumbers={false}
        theme={monokai}
      />
      <br/>
      <p>This query will be sent every 2 seconds, updating the cache via the default normalized caching strategy if any changes are found.</p>
    </div>
  )
}

export default Polling;
