import { React, CodeBlock, monokai } from '../../../../deps.ts';

const BasicsErrors = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Errors</h1>
      <p>This chapter will cover the most common errors related to <code className="obsidianInline">obsidian</code> implementation.</p>
      <h2>ObsidianRouter</h2>
      <h3>Bad port</h3>
      <p>This error is likely to arise if you have not disabled the server-side cache and do not have an active redis instance at port 6379.  To learn more about redis and server-side caching, check out the Caching section.</p>
      <h2>ObsidianWrapper</h2>
      <h3>Cannot read property obsidianSchema of undefined</h3>
      <p>This error is thrown when using <code className="obsidianInline">gather</code> without a properly sent <code className="obsidianInline">obsidianSchema</code>.  Make sure you're sending <code className="obsidianInline">obsidianSchema</code> via the window object, like so:</p>
      <CodeBlock
        text={`// server.tsx

// inside HTML head
<script>
  window.__INITIAL_STATE__ = \${JSON.stringify(initialState)};
</script>`}
        language={"tsx"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <h4>Recap & Next Up</h4>
      <p>This section has walked through a simple implementation of <code className="obsidianInline">obsidian</code> with ObsidianRouter and ObsidianWrapper, and covered the most common use cases and errors.  Next, we're going to dive into caching and <code className="obsidianInline">obsidian</code>'s design philosophy and guiding development principles.  Once we have a firm grasp on how <code className="obsidianInline">obsidian</code> approaches GraphQL caching, we'll examine the specifics of server-side and client-side caching in <code className="obsidianInline">obsidian</code>.</p>
    </div>
  )
}

export default BasicsErrors;
