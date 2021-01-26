import { React, CodeBlock, dracula } from '../../../../deps.ts';

const Mutations = (props: any) => {
  return (
    <div className="docContainer">
      <h1>Mutations</h1>
      <p>
        In this chapter, we'll learn how to send GraphQL mutations using{' '}
        <code className="obsidianInline">mutate</code> to ensure our cache
        behaves as expected.
      </p>
      <h2>mutate</h2>
      <p>
        To maintain and ascertain the truth of our cache, GraphQL mutations must
        be handled differently than queries. By allowing the user to send a
        configurations options object with
        <code className="obsidianInline">mutate</code>, the cache can be altered
        to their liking. To learn more about mutations, caching, and{' '}
        <code className="obsidianInline">obsidian</code>'s caching philosophy,
        see the{' '}
        <a href="#" onClick={() => props.setDocsPage('Philosophy')}>
          Caching
        </a>{' '}
        section.
      </p>
      <p>
        Just as with <code className="obsidianInline">query</code>,{' '}
        <code className="obsidianInline">mutate</code> is made available via{' '}
        <code className="obsidianInline">useObsidian</code>. To send a mutation,
        first destructure the hook:
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// DeleteButton.tsx
import { useObsidian } from 'https://deno.land/x/obsidian/clientMod.ts';

const DeleteButton = () => {
  const { mutate } = useObsidian();

  // jsx below
};`}
      </CodeBlock>
      <br />
      <p>
        <code className="obsidianInline">mutate</code> has two parameters:
      </p>
      <ol>
        <li>
          <strong>mutation</strong> - Your GraphQL mutation string
        </li>
        <li>
          <strong>options</strong> - (optional) An object with further
          parameters
          <ul>
            <li>
              <strong>endpoint</strong> - (default:{' '}
              <code className="obsidianInline">'/graphql'</code>) The endpoint
              where <code className="obsidianInline">obsidian</code> should send
              this request
            </li>
            <li>
              <strong>cache</strong> - (default:{' '}
              <code className="obsidianInline">true</code>) Set to{' '}
              <code className="obsidianInline">true</code> to enable the cache
              to automatically update after a mutation request.
            </li>
            <li>
              <strong>delete</strong> - (default:{' '}
              <code className="obsidianInline">false</code>) Set to{' '}
              <code className="obsidianInline">true</code> to indicate a delete
              mutation.
            </li>
            <li>
              <strong>update</strong> - (default:{' '}
              <code className="obsidianInline">null</code>) Optional update
              function to customize cache updating behavior.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Send mutations with or without the configurations options parameter
        depending on your mutation request.
      </p>
      <p>A simple mutation request to update a field:</p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// UpdateFavoriteCharacter.tsx

const ADD_FAVORITE_MOVIE =\`
  mutation AddFavoriteMovie {
    favoriteMovie(id: 4) {
      __typename
      id
      isFavorite
    }
  }
\`;

return (
  <div>
    <button
      onClick(() => {
        mutate(ADD_FAVORITE_MOVIE)
        .then(resp => console.log(resp))
      })
    >Update Favorite Movie</button>
  </div>
);`}
      </CodeBlock>
      <p>
        We don’t need an options object since we are using the default settings.
      </p>
      <br />
      <p>
        To send a delete mutation request, provide an options object with delete
        set to true. This will let
        <code className="obsidianInline">obsidian</code> know to update value in
        the cache to ‘DELETED’
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// DeleteButton.tsx

const DELETE_MOVIE = \`
  mutation DeleteMovie {
    deleteMovie(id: 4) {
      __typename
      id
    }
  }
\`;

return (
  <div>
    <button
      onClick(() => {
        mutate(DELETE_MOVIE, {delete: true})
        .then(resp => console.log(resp))
      })
    >Delete Movie</button>
  </div>
);`}
      </CodeBlock>
      <br />

      <p>
        When sending a mutation request to create a new element, provide an
        update function to let <code className="obsidianInline">obsidian</code>
        know how to store the newly created element into the existing cache.
      </p>
      <CodeBlock language="tsx" showLineNumbers={true} style={dracula}>
        {`// DeleteButton.tsx

const ADD_MOVIE = \`
  mutation AddMovie {
    addMovie(input: {title: 'The Fugitive', releaseYear: 1993, genre: ACTION }) {
      __typename
      id
      title
      releaseYear
      genre
      isFavorite
    }
  }
\`;

function movieUpdate(cache, respObj) {
  const result = cache.read(ALL_MOVIES_BY_RELEASE_DATE);
  const { movies } = result.data;
  const newMovie = respObj.data.addMovie;
  const updatedMovieArr = movies.push(newMovie).sort((movie1, movie2) => {
    return movie1.releaseYear - movie2.releaseYear;
  });
  const updatedRespObj = { data: { movies: updatedMovieArr } };
  cache.write(ALL_MOVIES_BY_RELEASE_DATE, updatedRespObj);
}

return (
  <div>
    <button
      onClick(() => {
        mutate(ADD_MOVIE, {update: movieUpdate})
        .then(resp => console.log(resp))
      })
    >Add Movie</button>
  </div>
);`}
      </CodeBlock>
      <br />
      <h4>Recap & Next Up</h4>
      <p>
        In this chapter we covered how to send mutations using{' '}
        <code className="obsidianInline">mutate</code>. To round out the Basics
        section, we'll examine some common errors you might find when using{' '}
        <code className="obsidianInline">obsidian</code>.
      </p>
    </div>
  );
};

export default Mutations;
