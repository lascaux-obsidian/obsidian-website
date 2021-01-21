import { React, CodeBlock, dracula } from '../../../deps.ts';

const Overview = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Overview</h1>
      <p>
        <code className="obsidianInline">obsidian</code> is a{' '}
        <a href="https://deno.land/">Deno</a>{' '}
        <a href="https://graphql.org/">GraphQL</a> server module and a GraphQL
        client, built to optimize application performance via caching
        strategies. <code className="obsidianInline">obsidian</code>'s server
        module may be used independently to quickly build out a GraphQL API
        while enabling the full suite of caching strategies that{' '}
        <code className="obsidianInline">obsidian</code> offers.
      </p>
      <p>
        <code className="obsidianInline">obsidian</code> simplifies GraphQL
        implementations in Deno by offering a solution integrated across the
        stack, ensuring your API stays lean and performant even as it's scope
        grows. By utilizing <code className="obsidianInline">obsidian</code> and
        the power of server-side rendering, we can maintain rapid page-load
        times.
      </p>
      <h2>The Module</h2>
      <p>
        <code className="obsidianInline">obsidian</code> is a Deno module,
        published at <a href="https://deno.land/x/obsidian@2.0.1">deno.land</a>.
        There are two distinct parts to{' '}
        <code className="obsidianInline">obsidian</code>: ObsidianRouter, a
        caching GraphQL router built upon Deno's{' '}
        <a href="https://deno.land/x/oak@v6.2.0">Oak</a> server framework, and
        ObsidianWrapper, a <a href="https://reactjs.org/">React</a> component
        that functions as a GraphQL client for your application, providing
        global access to fetching and caching capabilities.
      </p>
      <p>
        It is important to note that ObsidianRouter can be implemented as a
        standalone GraphQL router for your server, and third-party client
        implementations may be used in your client-side code. ObsidianWrapper
        can also be used independently of ObsidianRouter if normalized caching
        capabilities are not needed or desired. However, ObsidianWrapper's
        normalized caching strategy is only available when used in conjunction
        with ObsidianRouter- this choice was made to preserve the destructuring
        and normalizing algorithm that is at the heart of{' '}
        <code className="obsidianInline">obsidian</code>'s caching strategy.
      </p>
      <p>
        This two-pronged approach enables{' '}
        <code className="obsidianInline">obsidian</code> to guide your GraphQL
        implementation every step of the way, and brings clarity and speed to
        every part of your app.
      </p>
      <p className="docAside">
        <i>NOTE</i> - To keep our server-side cache efficient and ACID
        compliant, <code className="obsidianInline">obsidian</code> uses redis
        to store cached data. If you are not utilizing the caching features of
        ObsidianRouter, you do not need to have a running redis server.
      </p>
      <h2>The Documentation</h2>
      <p>We've split our documentation into four distinct sections.</p>
      <ul>
        <li>
          <strong>Basics</strong> guides us through a simple implementation of
          full stack <code className="obsidianInline">obsidian</code>, detailing
          the setup of ObsidianRouter, ObsidianWrapper, usage patterns in React,
          and how to harness server-side rendering to improve your client
          caching strategy.
        </li>
        <li>
          <strong>Philosophy</strong> provides a high-level overview of caching
          in <code className="obsidianInline">obsidian</code>, revealing our
          vision of <code className="obsidianInline">obsidian</code> integration
          and guiding principles for development.
        </li>
        <li>
          <strong>Caching</strong> covers the different caching strategies{' '}
          <code className="obsidianInline">obsidian</code> offers and draws upon
          our Philosophy to illustrate their implementations in ObsidianRouter
          and ObsidianWrapper.
        </li>
        <li>
          <strong>Advanced</strong> contains guides for more specialized options
          and use-cases that we won't need while first exploring{' '}
          <code className="obsidianInline">obsidian</code>.
        </li>
      </ul>
      <p>
        We hope you enjoy working with{' '}
        <code className="obsidianInline">obsidian</code>!
      </p>
    </div>
  );
};

export default Overview;
