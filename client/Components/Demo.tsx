import { React, useObsidian } from '../../deps.ts';
// import { useObsidian } from '../../ObsidianWrapper.jsx';
import SideBar from './SideBar.tsx';

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
  const { fetcher, cache } = useObsidian();

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
    fetcher(query, {
      endpoint: 'https://countries-274616.ew.r.appspot.com',
      destructure: true,
    }).then((resp: any) =>
      setTimeout(setResponse(JSON.stringify(resp.data)), 1000)
    );
  };
  return (
    <>
      <div className='mainContainer'>
        <div id='demo-block'>
          <br></br>

          <br></br>
          <label htmlFor='country'>Choose a country: </label>
          <select
            name='country'
            id='country'
            onChange={(e: any) =>
              setCountry(e.target.value.substr(e.target.value.length - 4))
            }
          >
            <option value='United States of America #4425'>
              United States
            </option>
            <option value='Peru #3297'>Peru</option>
            <option value='France #1528'>France</option>
            <option value='Iraq #2071'>Iraq</option>
          </select>
          <p>What info would you like to request about this country?</p>
          <label htmlFor='name'>Name of Country</label>
          <input
            type='checkbox'
            id='name'
            name='name'
            value='name'
            onChange={(e: any) => {
              setName(!name);
            }}
          ></input>
          <br></br>
          <label htmlFor='population'>Population</label>
          <input
            type='checkbox'
            id='population'
            name='population'
            value='population'
            onChange={(e: any) => {
              setPopulation(!population);
            }}
          ></input>
          <br></br>
          <label htmlFor='flag'>Flag</label>
          <input
            type='checkbox'
            id='flag'
            name='flag'
            value='flag'
            onChange={(e: any) => {
              setFlag(!flag);
            }}
          ></input>
          <br></br>
          <label htmlFor='borders'>Border Countries</label>
          <input
            type='checkbox'
            id='borders'
            name='borders'
            value='borders'
            onChange={(e: any) => {
              setBorders(!borders);
            }}
          ></input>
          <br></br>
          <button onClick={fetchData}>Fetch</button>
          <pre className='pre-block'>
            Query:
            <code className='code-block'>{query}</code>
          </pre>
          <br></br>
          <pre className='pre-block'>
            Response:
            <code className='code-block'>{response}</code>
          </pre>
          <pre className='pre-block'>
            Cache:
            <code className='code-block'>{JSON.stringify(cache)}</code>
          </pre>
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;
