import { React } from '../../deps.ts';
import NestedCache from './NestedCache.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      p: any;
    }
  }
}

const Cache = (props: any) => {
  const { cache } = props;

  const cachedPair: any = [];

  Object.entries(cache).forEach((pair, i, arr) => {
    if (pair[1] instanceof Object) {
      if (i === arr.length) {
        //   cachedPair.push(
        //     <div className='p'>
        //       <p className='key'>{pair[0]} : </p>
        //       <NestedCache key={`nestedCache${i}`} cache={pair[1]} />
        //     </div>
        //   );
        // } else {
        //   cachedPair.push(
        //     <div className='p'>
        //       {pair[0]} : <NestedCache key={`nestedCache2${i}`} cache={pair[1]} />
        //     </div>
        //   );
      }
    } else {
      cachedPair.push(
        <p>
          {pair[0]} : {pair[1]},
        </p>
      );
    }
  });

  return (
    <>
      {'{'}
      {cachedPair}
      {'}'}
    </>
  );
};

export default Cache;
