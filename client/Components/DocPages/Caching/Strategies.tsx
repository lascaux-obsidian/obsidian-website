import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Strategies = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Strategies</h1>
      <p>
        In this section, we cover the details of caching in{' '}
        <code className="obsidianInline">obsidian</code>. In this chapter, we'll
        learn more about the different caching strategies{' '}
        <code className="obsidianInline">obsidian</code> makes available to us,
        and their pros and cons.
      </p>
      <h2>Caching in Obsidian</h2>
      <p>
        What do we mean when we talk about caching <i>strategies</i>? Throughout
        this documentation, we use the term to refer to the methods by which you
        cache and store your GraphQL data. These methods each come with their
        own strengths and weaknesses- just like in a game of chess, where a
        development strategy may yield long-term benefits but come at the cost
        of short-term disadvantages.{' '}
        <code className="obsidianInline">obsidian</code>'s caching strategies
        offer control over how ObsidianRouter and ObsidianWrapper store and
        reconstruct your data, so that you can pick the strategy that best suits
        your GraphQL needs.
      </p>
      <p>
        Let's examine each caching strategy in{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
      <h3>Cacheless</h3>
      <p>
        At first blush the cacheless caching strategy sounds like an oxymoron-
        and it is. However, we feel it is important to denote cacheless as it's
        own caching strategy, as{' '}
        <code className="obsidianInline">obsidian</code> does not demand a
        caching layer. If you would prefer to forgo another caching strategy,{' '}
        <code className="obsidianInline">obsidian</code> can be configured to
        bypass the caching layer and serve as a basic GraphQL router or client.
      </p>
      <p>
        The cacheless strategy is recommended when your GraphQL needs are light.
        If you make a very small number of content calls to a GraphQL service,
        caching can be an unnecessary complexity.
      </p>
      <h3>Whole-Query Caching</h3>
      <p>
        Whole-query caching is a simple and powerful caching strategy.
        Whole-query caching stores each query and response in the caching layer.
        If an identical query enters{' '}
        <code className="obsidianInline">obsidian</code>, the stored response is
        returned in its entirety. This approach to caching is extremely fast, as
        long as queries are absolutely identical. However, even minor
        differences in queries will store new key-value pairs in the cache,
        often resulting in large amounts of redundant information.
      </p>
      <p>
        Whole-query caching is recommended if your app makes many identical
        GraphQL queries throughout a typical user-session, such as flipping
        through pages of content.
      </p>
      <h3>Destructuring & Normalization</h3>
      <p>
        Normalized caching is <code className="obsidianInline">obsidian</code>'s
        headlining caching strategy. As responses from your GraphQL queries exit{' '}
        <code className="obsidianInline">obsidian</code>, they are{' '}
        <i>normalized</i> and stored in the cache at an object level. Then, by
        parsing incoming queries and <i>destructuring</i> their contents,{' '}
        <code className="obsidianInline">obsidian</code> is able to reconstruct
        a response object from the cache. This removes replication of data in
        the cache, improves memory management, and opens the door to mutation
        consistency in the cache layer.
      </p>
      <p>
        To facilitate the normalized caching strategy,{' '}
        <code className="obsidianInline">obsidian</code> requires your responses
        to always return IDs coupled with each GraphQL object type. What exactly
        does that mean? We can learn more by looking at an example:
      </p>
      <CodeBlock language="graphql" showLineNumbers={true} style={dracula}>
        {`type Movie {
  id: ID!
  title: String!
  releaseYear: Int
  genre: String
}`}
      </CodeBlock>
      <br />
      <p>
        This is a GraphQL object type- it's comprised of many fields, each of
        which can be assigned a Scalar value (Int, Float, String, Boolean, or
        ID) or another object type. For example, our Movie type could also have
        a field comprised of an array of actors that appear in the film:
      </p>
      <CodeBlock language="graphql" showLineNumbers={true} style={dracula}>
        {`type Movie {
  id: ID!
  title: String!
  releaseYear: Int
  genre: String
  actors: [Actor]
}

type Actor {
  id: ID!
  firstName: String
  lastName: String
  nickname: String
  movies: [Movie!]
}`}
      </CodeBlock>
      <br />
      <p>
        Note that for both object types, we have an id field. To utilize the
        normalized caching strategy in{' '}
        <code className="obsidianInline">obsidian</code>, you must request the
        id field of each object type you receive in every query. For example, if
        you'd like to query for just the actors in a particular movie, your
        query should look like this:
      </p>
      <CodeBlock language="graphql" showLineNumbers={true} style={dracula}>
        {`query {
  getMovie(id: "1") {
    id
    actors {
      id
      firstName
      lastName
    }
  }
}`}
      </CodeBlock>
      <br />
      <p>
        We requested the id of both the Movie object type and the Actor object
        type. Conversely, if you don't need any information about the actors in
        a movie, there's no need to ask for their id as you won't be accessing
        any info found on the Actor object type:
      </p>
      <CodeBlock language="graphql" showLineNumbers={true} style={dracula}>
        {`query {
  getMovie(id: "1") {
    id
    title
  }
}`}
      </CodeBlock>
      <br />
      <p>
        Normalized caching is incredibly robust, enabling{' '}
        <code className="obsidianInline">obsidian</code> to maintain consistency
        with greater precision, and thus ships as the default option when
        utilizing ObsidianRouter and ObsidianWrapper.
      </p>
      <p>
        Normalized caching is recommended for more complex and robust GraphQL
        applications. If you app is often making queries for subsets of
        information on object types or making many similar but unique API calls,
        normalized caching can drastically improve load times and help maintain
        global consistency.
      </p>
      <h4>Recap & Next Up</h4>
      <p>
        We've learned about the different caching strategies{' '}
        <code className="obsidianInline">obsidian</code> offers, and highlighted
        the best use-case for each. Next, we will walk through the
        implementations of each of these caching strategies in both
        ObsidianWrapper and ObsidianRouter.
      </p>
    </div>
  );
};

export default Strategies;
