import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      h4: any;
      h6: any;
      p: any;
    }
  }
}

const DemoContext = (props: any) => {
  return (
    <div id='docsTOC'>
      <div className='list-group'>
        <h4
          className={`list-group-item list-group-item-action 
          `}
        >
          Demo Guide
        </h4>

        <div className='list-group-item'>
        <h6>Execute A Query</h6>
          <div className='list-group'>
            <p
              className={`list-group-item list-group-item-action 
              
          `}
            >
              Utilize the input fields on the left to make a GraphQL query or mutation.
            </p>
          </div>
        </div>

        <div className='list-group-item'>
          <h6>Response</h6>
          <div className='list-group'>
            <p
              className={`list-group-item list-group-item-action 
          `}
            >
              Moments after the query is excecuted, the raw response from the
              GraphQL API is displayed.
            </p>
          </div>
        </div>
        <div className='list-group-item'>
          <h6>Cache</h6>
          <div className='list-group'>
            <p
              className={`list-group-item list-group-item-action 
          `}
            >
              Finally, we can see our destructured query and responses which are
              currently stored in a Redis cache. If you query for a specific
              property that is stored in the cache, the Obsidian algorithm will
              find and return it. Eliminating the need to query the database again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoContext;
