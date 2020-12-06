import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Mutations = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Mutations</h1>
      <p>In this chapter, we'll learn how to send GraphQL mutations using <code className="obsidianInline">mutate</code> to ensure our cache behaves as expected.</p>
      <h2>mutate</h2>
      <p>To maintain and ascertain the truth of our cache, GraphQL mutations must be handled differently than queries.  Mutations can alter the data inside our cache, so by default <code className="obsidianInline">obsidian</code> clears the cache each time it mutates.  To learn more about mutations, caching, and <code className="obsidianInline">obsidian</code>'s caching philosophy, see the <a href="#" onClick={() => props.setDocsPage('Philosophy')}>Caching</a> section.</p>
      <p>Just as with <code className="obsidianInline">hunt</code> and <code className="obsidianInline">gather</code>, <code className="obsidianInline">mutate</code> is made available via <code className="obsidianInline">useObsidian</code>.  To send a mutation, first destructure the hook:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
        {`// DeleteButton.tsx
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const DeleteButton = () => {
  const { mutate } = useObsidian();

  // jsx below
};`}
      </CodeBlock>
      <br/>
      <p><code className="obsidianInline">mutate</code> has two parameters:</p>
      <ol>
        <li><strong>mutation</strong> - Your GraphQL mutation string</li>
        <li><strong>options</strong> - (optional) An object with further parameters
          <ul>
            <li><strong>endpoint</strong> - (default: <code className="obsidianInline">'/graphql'</code>) The endpoint where <code className="obsidianInline">obsidian</code> should send this request</li>
            <li><strong>clearCache</strong> - (default: <code className="obsidianInline">true</code>) Set to <code className="obsidianInline">false</code> to leave the cache as is.  Useful if you know your mutation will not affect the data stored in your cache.</li>
          </ul>
        </li>
      </ol>
      <p>Send mutations just as you would a query:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
        {`// DeleteButton.tsx
return (
  <div>
    <button
      onClick(() => {
        mutate(\`mutation { deleteMovie(id: 1) { id title releaseYear } }\`)
        .then(resp => console.log(resp))
      })
    >Delete Movie</button>
  </div>
);`}
      </CodeBlock>
      <br/>
      <h4>Recap & Next Up</h4>
      <p>In this chapter we covered how to send mutations using <code className="obsidianInline">mutate</code>.  To round out the Basics section, we'll examine some common errors you might find when using <code className="obsidianInline">obsidian</code>.</p>
    </div>
  )
}

export default Mutations;
