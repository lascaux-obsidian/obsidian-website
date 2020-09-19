import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      p: any;
    }
  }
}

const NestedCache = (props: any) => {
  const { cache } = props;

  const cachedPair: any = [];

  Object.entries(cache).forEach(pair => {
    if (pair[1] instanceof Object) {
      cachedPair.push(<div>{pair[0]} : <NestedCache cache={pair} /></div>)
    } else {
      cachedPair.push(<p className="tab">{pair[0]} : {JSON.stringify(pair[1])}</p>)
    }  
  })

  return (
    <div className="nested">
      {'{'} {cachedPair}
      {'}'}
    </div>
  );
};

export default NestedCache;
