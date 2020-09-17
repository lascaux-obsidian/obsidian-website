import { React } from '../../deps.ts';
import { useObsidian } from '../../ObsidianWrapper.jsx';
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

// Peru 3297
// Iraq 2071
// China 973
// India 1995
// France 1528

// `{
//   Country (_id: "4425") {
//     _id
//     name
//     population
//     flag {
//       _id
//       emoji
//     }
//     borders {
//       _id
//       name
//       capital
//     }
//   }
// }
// `

const Demo = (props: any) => {
  const [query, setQuery] = (React as any).useState(
    `{
        Country (_id: "4425") {
          _id
          name
          population
          flag {
            _id
            emoji
          }
          borders {
            _id
            name
            capital
          }
        }
      }
      `
  );
  const [response, setResponse] = (React as any).useState('');
  const { fetcher } = useObsidian();

  const [country, setCountry] = (React as any).useState('United States of America');
  const [name, setName] = (React as any).useState(false);
  const [population, setPopulation] = (React as any).useState(false);
  const [flag, setFlag] = (React as any).useState(false);
  const [borders, setBorders] = (React as any).useState(false);

  const fetchData = (e: any) => {
    fetcher(query, {
      endpoint: 'https://countries-274616.ew.r.appspot.com',
      destructure: true,
    }).then((resp: any) => setResponse(JSON.stringify(resp.data)));
  };

  // const buildQuery = () => {

  // }
  

  return (
    <>
      <div className='mainContainer'>
        <label htmlFor="country">Choose a country: </label>
        <select name="country" id="country">
          <option value="United States of America" selected onClick={() => {setCountry('United States of America')}}>United States</option>
          <option value="Peru" onClick={() => {setCountry('Peru')}}>Peru</option>
          <option value="France" onClick={() => {setCountry('France')}}>France</option>
          <option value="Iraq" onClick={() => {setCountry('Iraq')}}>Iraq</option>
        </select>
        <p>What info would you like to request about this country?</p>
        <input type="checkbox" id="name" name="name" value="name"></input>
        <label htmlFor="name">Name of Country</label><br></br>
        <input type="checkbox" id="population" name="population" value="population"></input>
        <label htmlFor="population">Population</label><br></br>
        <input type="checkbox" id="flag" name="flag" value="flag"></input>
        <label htmlFor="flag">Flag</label><br></br>
        <input type="checkbox" id="borders" name="borders" value="borders"></input>
        <label htmlFor="borders">Border Countries</label><br></br>
        
        <button>Send Query</button>
      

        <div>
          <p>{query}</p>
        </div>
        Query:{query}
        <br></br>
        Response:{response}
        <br></br>
        <button onClick={fetchData}>Fetch</button>
        <pre style={{ width: '150px', height: '300px'}}>{response}<code class="language-css"></code></pre>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;
