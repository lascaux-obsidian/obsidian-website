import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      p: any;
    }
  }
}

const CachePair = (props: any) => {
  const { pair } = props;

  const cachedPair = [];

  if (pair[1] instanceof Object) {
  cachedPair.push(<p>{pair[0]} : {JSON.stringify(pair[1])}</p>)
  } else {
    cachedPair.push(<p>{pair[0]} : {pair[1]}</p>)
  }

  return (
    <>
      {cachedPair}
    </>
  );
};

export default CachePair;
