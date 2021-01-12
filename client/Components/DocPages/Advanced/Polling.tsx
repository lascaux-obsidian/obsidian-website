import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Polling = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Polling</h1>
      <p>
        Some applications require regular streams of GraphQL queries sent via
        HTTP requests. If you find yourself in this position,
        <code className="obsidianInline">obsidian</code> can help. The
        <code className="obsidianInline"> query</code> method accepts an
        optional 'pollInterval' property in its options parameter, which
        provides near-real-time synchronization with your server by causing a
        query to execute periodically and will automatically update the cache
        consistently. To enable polling for a query, pass a 'pollInterval'
        configuration option to the{' '}
        <code className="obsidianInline">query</code> method with a specified
        interval in milliseconds:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`function actorsPhoto() {
  const interval = query(GET_ACTOR_PHOTO, {
    pollInterval: 2000,
  });
  setInterval(interval); // react hook to add the interval in the state
  return (
    <div>
      <h1>Actor Showcase</h1>
      <p>Check out our favorite actor photo by clicking the button below</p>
      <button
        onClick={() => {
          query(GET_ACTOR).then((resp) => setActor(resp.data.actor));
        }}
      >
        Get Actor Photo
      </button>
      <p>Name: {actor.name}</p>
      <img src={actor.displayImage} />
    </div>
  );
}`}
      </CodeBlock>
      <br />
      <p>
        This query will be sent every 2 seconds, updating the cache via the
        default normalized caching strategy if any changes are found. You can
        also stop polling dynamically with the{' '}
        <code className="obsidianInline">stopPollInterval</code> method on the
        cache class using the interval returned by the invocation of the{' '}
        <code className="obsidianInline">obsidian query</code>, here an example:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`const { cache } = useObsidian();
const { stopPollInterval } = cache;
stopPollInterval(interval);`}
      </CodeBlock>
    </div>
  );
};

export default Polling;
