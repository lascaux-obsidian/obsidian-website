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

  Object.entries(cache).forEach((pair, i) => {
    if (pair[1] instanceof Object) {
      cachedPair.push(<p>{pair[0]} : <NestedCache key={`NestedCache--${i}`} cache={pair[1]} /></p>)
    } else {
      cachedPair.push(<p className="tab">{pair[0]} : {JSON.stringify(pair[1])}</p>)
    }  
  })

  return (
    <div className="nested">
      {'{'}{cachedPair}{'}'}
    </div>
  );
};

export default NestedCache;
