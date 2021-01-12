import { React, CodeBlock, dracula } from '../../../deps.ts';

const Philosophy = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Philosophy</h1>
      <p>
        In this chapter we seek to lay bare our approach to GraphQL caching,
        providing context for our caching implementations in each part of{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
      <h2>Core Values</h2>
      <h3>Fast</h3>
      <p className="mission">
        Caching with obsidian should be nearly imperceptible - a client or
        server module should feel no slower with a caching layer
      </p>
      <p>
        While building <code className="obsidianInline">obsidian</code>'s
        caching strategies, speed reigned supreme. We believe that a caching
        layer for your GraphQL service has to be fast and efficient. Your API
        should not take a large performance hit after incorporating a cache.
      </p>
      <h3>Flexible</h3>
      <p className="mission">
        Caching with obsidian should be developer friendly without sacrificing
        performance{' '}
      </p>
      <p>
        <code className="obsidianInline">obsidian</code>'s flexible API is
        designed to be performant, no matter how big or small your project is.
        Our caching solutions do not require strict conventions or a schema on
        the client side to be able to offer efficiency and expandability for the
        developer.
      </p>
      <h3>Consistent</h3>
      <p className="mission">
        Caching with obsidian should prize consistency - discerning truth should
        be automatic and transparent
      </p>
      <p>
        Many GraphQL caching solutions give up on consistency and mutations,
        choosing to give the tools to the developer and letting go of the
        reigns. With <code className="obsidianInline">obsidian</code>,
        consistent truth is a priority and a responsibility, rather than an
        afterthought.
      </p>
      <h2>Integration</h2>
      <p>
        <code className="obsidianInline">obsidian</code> was built for Deno, and
        as such it has been designed to integrate into React apps the way they
        are built in Deno, on both the frontend and backend. While{' '}
        <code className="obsidianInline">obsidian</code> is still in it's early
        stages, we are actively seeking to define what that means. For now, Oak
        has proven to be Deno's prevailing framework, and React apps are
        typically constructed with server-side rendering.
      </p>
      <p>
        We choose to view these restrictions as inspiration for innovation, and
        we have applied that philosophy to our caching implementations. By
        adhering to pre-defined scaffolding, opportunities to improve upon
        existing methodologies readily present themselves. Whenever possible, we
        chose to build in favor of the above core values, and we hope they can
        guide your implementation of{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
      <h4>Recap & Next Up</h4>
      <p>
        Now that we have a grasp on the guiding principles behind the
        development of <code className="obsidianInline">obsidian</code> and it's
        integration into your application, we'll move onto a deeper dive into
        the caching capabilities of{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
    </div>
  );
};

export default Philosophy;
