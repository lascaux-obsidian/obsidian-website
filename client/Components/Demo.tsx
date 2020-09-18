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
    }
  }
}
const code = `{
  countries {
    name
    code
    emoji
  }
}
`.trim();

const Demo = (props: any) => {
  const [query, setQuery] = (React as any).useState(code);
  const [response, setResponse] = (React as any).useState('');
  const { fetcher } = useObsidian();

  const fetchData = (e: any) => {
    fetcher(query, {
      endpoint: 'https://countries.trevorblades.com',
      destructure: false,
    }).then((resp: any) => setResponse(JSON.stringify(resp.data)));
  };

  return (
    <>
      <div className='mainContainer'>
        <div id='demo-block'>
          Query:{query}
          <br></br>
          <pre className='pre-block'>
            <code className='code-block'>{code}</code>
          </pre>
          <button onClick={fetchData}>Fetch</button>
          Response:{response}
          <pre className='pre-block'>
            <code className='code-block'>{code}</code>
          </pre>
          <br></br>
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;
