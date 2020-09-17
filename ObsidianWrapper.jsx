import React from 'https://dev.jspm.io/react@16.13.1'; // from deps

import clientStorage from 'https://deno.land/x/obsidian@v0.1.1/ObsidianWrapper/clientStorage.js';

import normalizeResult from 'https://deno.land/x/obsidian@v0.1.1/src/normalize.js';
import destructureQueries from 'https://deno.land/x/obsidian@v0.1.1/src/destructureQueries.js';


// Context will be used to create a custom provider for the application
export const cacheContext = React.createContext();

// Declaration of custom Obsidian Wrapper
function ObsidianWrapper(props) {
  const [cache, setCache] = React.useState(clientStorage);

  // Primary function, provides access to fetching and caching capabilities
  async function fetcher(query, options = {}) {
    // Desctructuring of optional parameters, default values are defined and may be over written
    const {
      endpoint = '/graphql',
      pollInterval = null,
      destructure = true,
    } = options;
    if (destructure) {
      console.log('initial state', window.__INITIAL_STATE__.obsidianSchema);
      const obsidianSchema = window.__INITIAL_STATE__.obsidianSchema;
      /* COMMENT OUT THESE LINES FOR SERVER CACHE */
      const obsidianReturn = await destructureQueries(query, obsidianSchema);
      // // Conditional to check if query is stored in global cache
      if (obsidianReturn) {
        console.log('--------------');
        console.log('Found it in the cache!!');
        console.log('--------------');
        // Returning cached response as a promise
        return new Promise(
          (resolve, reject) => resolve(obsidianReturn)
          // This can be uncommeted to store cache in session storage
          // resolve(JSON.parse(sessionStorage.getItem(query)))
        );
      }
    } else {
      if (cache[query]) {
        console.log('--------------');
        console.log('Found it in the cache!!');
        console.log('--------------');
        return new Promise((resolve, reject) => resolve(cache[query]));
      }
    }
    // If not found in cache, query is excecuted

    /* COMMENT OUT THESE LINES FOR SERVER CACHE */

    // Conditional check, if poll interval has been defined
    if (pollInterval) {
      console.log(
        `Setting ${
          pollInterval / 1000
        } second poll interval for graphql request`
      );
      // Initiation of reocurring fetch request
      setInterval(() => {
        console.log('--------------');
        console.log('Fetching query with poll interval');
        fetchData(query, endpoint);
      }, pollInterval);
    }
    console.log('--------------');
    console.log('Fetching Data');
    // Excection of fetch
    return await fetchData(query, endpoint, destructure);
    /* COMMENT OUT THESE LINES FOR SERVER CACHE */

    /* COMMENT OUT THESE LINES FOR SERVER CACHE */
  }
  // Function to update the global cache with new response data
  function updateCache(query, response) {
    console.log('BEFORE: ', cache);
    // Declaring new object with new data to store in cache
    const newObj = Object.assign(cache, { [query]: response });
    // React hook to update global cache object
    setCache(newObj);
    console.log('AFTER: ', newObj);
    console.log('CACHEEE: ', cache);
    // Can be uncommeted to store data in session storage
    // sessionStorage.setItem(query, JSON.stringify(response));
  }
  // Excecutes graphql fetch request
  async function fetchData(query, endpoint, destructure) {
    try {
      const respJSON = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const resp = await respJSON.json();
      // Excecute function to update the cache with new response
      if (destructure) {
        const obsidianSchema = window.__INITIAL_STATE__.obsidianSchema;
        /* COMMENT OUT THESE LINES FOR SERVER CACHE */
        normalizeResult(query, resp, obsidianSchema);
        /* COMMENT OUT THESE LINES FOR SERVER CACHE */
      } else {
        updateCache(query, resp);
      }

      return resp;
    } catch (e) {
      console.log(e);
    }
  }
  // Returning Provider React component that allows consuming components to subscribe to context changes
  return <cacheContext.Provider value={{ cache, fetcher }} {...props} />;
}
// Declaration of custom hook to allow access to provider
function useObsidian() {
  // React useContext hook to access the global provider by any of the consumed components
  return React.useContext(cacheContext);
}
// Exporting of Custom wrapper and hook to access wrapper cache
export { ObsidianWrapper, useObsidian };
