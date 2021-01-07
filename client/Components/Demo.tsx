import { React, useObsidian } from '../../deps.ts';
import SideBar from './SideBar.tsx';
import Cache from './Cache.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      br: any;
      pre: any;
      code: any;
      label: any;
      select: any;
      option: any;
      p: any;
      input: any;
    }
  }
}

const Demo = (props: any) => {
  const [response, setResponse] = (React as any).useState('');
  const [queryTime, setQueryTime] = (React as any).useState(0);

  const { gather, cache, clearCache } = useObsidian();
  console.log('cache from react', cache);
  const [country, setCountry] = (React as any).useState('4425');
  const [name, setName] = (React as any).useState(false);
  const [population, setPopulation] = (React as any).useState(false);
  const [flag, setFlag] = (React as any).useState(false);
  const [borders, setBorders] = (React as any).useState(false);

  const bordersQuery = `
        borders {
          _id
          name
          capital
      }
  `;
  const flagQuery = `
        flag {
          _id
          emoji
      }
  `;

  const query = `{
    Country (_id: "${country}")
    {
        _id${name ? '\n        name' : ''}${
    population ? '\n        population' : ''
  }${flag ? flagQuery : ''}${borders ? bordersQuery : ''}
    }
  }
  `.trim();
  const fetchData = (e: any) => {
    const start = Date.now();
    gather(query, {
      endpoint: 'https://countries-274616.ew.r.appspot.com',
      sessionStore: false,
    }).then((resp: any) => {
      setQueryTime(Date.now() - start);
      console.log('response', resp);
      if (!Array.isArray(resp.data.Country))
        resp.data.Country = [resp.data.Country];
      setResponse(JSON.stringify(resp.data));
    });
  };

  return (
    <>
      <div className="mainContainer">
        <div id="demo-block">
          <div className="demoInput">
            <div className="buildQuery">
              <h2 className="buildQueryTitle">Build A Query</h2>
              <br></br>
              <label htmlFor="country">Choose a country: </label>
              <select
                name="country"
                id="country"
                onChange={(e: any) =>
                  setCountry(e.target.value.substr(e.target.value.length - 4))
                }
              >
                <option value="United States of America #4425">
                  United States
                </option>
                <option value="Peru #3297">Peru</option>
                <option value="France #1528">France</option>
                <option value="Iraq #2071">Iraq</option>
              </select>
              <p className="optionsForCountry">
                What info would you like to request about this country?
              </p>
              <input
                type="checkbox"
                id="name"
                name="name"
                value="name"
                onChange={(e: any) => {
                  setName(!name);
                }}
              ></input>
              <label htmlFor="name">Name of Country</label>
              <br></br>
              <input
                type="checkbox"
                id="population"
                name="population"
                value="population"
                onChange={(e: any) => {
                  setPopulation(!population);
                }}
              ></input>
              <label htmlFor="population">Population</label>
              <br></br>
              <input
                type="checkbox"
                id="flag"
                name="flag"
                value="flag"
                onChange={(e: any) => {
                  setFlag(!flag);
                }}
              ></input>
              <label htmlFor="flag">Flag</label>
              <br></br>
              <input
                type="checkbox"
                id="borders"
                name="borders"
                value="borders"
                onChange={(e: any) => {
                  setBorders(!borders);
                }}
              ></input>
              <label htmlFor="borders">Border Countries</label>
              <br></br>

              <button id="fetchBtn" onClick={fetchData}>
                Fetch
              </button>

              <code className="code-block query-timer" id="code-black">
                {`Request Timer: ${queryTime}ms`}
              </code>
            </div>
            <div className="showQuery">
              <pre className="pre-block" id="stretchQuery">
                Query:
                <code className="code-block" id="code-black">
                  {query}
                </code>
              </pre>
            </div>
          </div>
          <br></br>
          <pre className="pre-block">
            Response:
            <code className="code-block" id="code-yellow">
              {response}
            </code>
          </pre>
          <button onClick={clearCache}>Clear Cache</button>

          <pre className="pre-block">
            Cache:
            <code className="code-block" id="code-pink">
              <Cache key="cache" cache={cache} />
            </code>
          </pre>
          <div className="apiLink">
            <p>
              API used in this demo:{' '}
              <a href="https://github.com/lennertVanSever/graphcountries">
                https://github.com/lennertVanSever/graphcountries
              </a>
            </p>
          </div>
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;
