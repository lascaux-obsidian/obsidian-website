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
      if(pair[0] === 'ROOT_MUTATION' || pair[0] === 'ROOT_QUERY') return;
      cachedPair.push(
        <p key={`pair${i}`}>
          {pair[0]} : , <NestedCache key ={`NestedCache-${i}`} cache={pair[1]}/>
        </p>
      );
  });

  return (
    <>
      {'{'}{cachedPair}{'}'}
    </>
  );
};

export default Cache;