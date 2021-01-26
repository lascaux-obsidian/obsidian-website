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

  function cacheDisplay() {
    return Object.entries(cache).reduce((acc: any, pair: any, i) => {
      if (typeof pair[1] === 'object') {
        const insidePair = [];
        for (const key in pair[1]) {
          insidePair.push(
            <p key={`keyPair${i}`}>
              <span style={{ color: '#cc99ff' }}>
                {' '}
                {JSON.stringify(key)} :{' '}
              </span>{' '}
              {JSON.stringify(pair[1][key])}, <br />
            </p>
          );
        }
        acc.push(
          <p key={`pair${i}`}>
            <span style={{ color: '#ff66ff' }}>
              {JSON.stringify(pair[0])} :{' '}
            </span>{' '}
            {'{'}
            {insidePair} {'}'}
            <br />
          </p>
        );
      }

      console.log('acc', acc);
      return acc;
    }, []);
  }
  const cachedPair = cacheDisplay();

  return (
    <>
      {'{'}
      {cachedPair}
      {'}'}
    </>
  );
};

export default Cache;
