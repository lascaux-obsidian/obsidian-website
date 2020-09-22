import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
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
          <h6>Build A Query</h6>
          <div className='list-group'>
            <p
              className={`list-group-item list-group-item-action 
              
          `}
            >
              This block provides the ability to construct a query. Select a
              country and properties that you desire and note that a GraphQL
              query is constructed with your inputs.
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
              currently stored in this application. If you query for a specific
              property that is stored in the cache, the Obsidian algorithm will
              find and return it. Eliminating the need to query the API once
              again.
            </p>
          </div>
        </div>
        <div className='list-group-item'>
          <h6>Note</h6>
          <div className='list-group'>
            <p
              className={`list-group-item list-group-item-action 
          `}
            >
              The cache also stores entire queries and responses to improve
              lookup time. These are not displated in the code block to improve
              readabiliy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoContext;
