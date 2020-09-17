import { React } from '../../deps.ts';
import { useObsidian } from '../../ObsidianWrapper.jsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      br: any;
    }
  }
}

const Demo = (props: any) => {
  const [query, setQuery] = (React as any).useState(
    `{
      countries {
        name
        code
        emoji
      }
    }
    `
  );
  const [response, setResponse] = (React as any).useState('');
  const { fetcher } = useObsidian();

  const fetchData = (e: any) => {
    fetcher(query, {
      endpoint: 'https://countries.trevorblades.com',
      destructure: false,
    }).then((resp: any) => setResponse(JSON.stringify(resp.data)));
  };

  return (
    <div>
      Query:{query}
      <br></br>
      Response:{response}
      <br></br>
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
};

export default Demo;
