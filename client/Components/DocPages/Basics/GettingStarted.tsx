import { React, CodeBlock, monokai } from '../../../../deps.ts';

const GettingStarted = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Getting Started</h1>
      <p>In this section, we'll learn <code className="obsidianInline">obsidian</code> by walking through the setup of a simple full stack server-side rendered React app in Deno.</p>
      <h2>Oak</h2>
      <p>We're going to build the backend of our app with <a href="https://deno.land/x/oak@v6.2.0">Oak</a>, a middleware framework for your Deno server.  ObsidianRouter is an <i>Oak router</i>, so we must build our server with Oak in order to use <code className="obsidianInline">obsidian</code>.</p>
      <h3>Installation</h3>
      <p>Thanks to Deno's ECMAScript package importing, installation of Oak and <code className="obsidianInline">obsidian</code> is incredibly simple.  Just import the pieces of the modules you need at the top of your server, like so:</p>
      <CodeBlock
        text={`import { Application, Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { ObsidianRouter, gql } from 'https://deno.land/x/obsidian@v1.0.0/mod.ts';`}
        language={"typescript"}
        showLineNumbers={true}
        theme={monokai}
      />
      <br/>
      <p className="docAside"><i>NOTE</i> - Throughout these guides, we will be illustrating imports directly from a url.  It is common practice for Deno apps to utilize a dependencies file, usually called <code className="obsidianInline">deps.ts</code>, where packages are imported from their urls and then referenced with local imports throughout the app.  We recommend this approach, with the key caveat that your Oak import statements not be accidentally bundled with your client-side code, as the browser is unable to interpret any references to Deno.  You can easily accomplish this by creating two separate dependency files for your server and client code.</p>
      <h3>ObsidianRouter</h3>
      <p>Now that we've imported our modules, let's begin by setting up our Oak server and GraphQL endpoint.</p>
    </div>
  )
}

export default GettingStarted;
