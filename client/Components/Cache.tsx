// import { React } from '../../deps.ts';
// import NestedCache from './NestedCache.tsx';

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       div: any;
//       p: any;
//     }
//   }
// }

// const Cache = (props: any) => {
//   const { cache } = props;

//   function cacheDisplay() {
//     return Object.entries(cache).reduce((acc: any, pair: any, i) => {
//       if (typeof pair[1] === 'object') {
//         const insidePair = [];
//         for (const key in pair[1]) {
//           insidePair.push(
//             <p key={`keyPair${i}`}>
//               <span style={{ color: '#cc99ff' }}>
//                 {' '}
//                 {JSON.stringify(key)} :{' '}
//               </span>{' '}
//               {JSON.stringify(pair[1][key])}, <br />
//             </p>
//           );
//         }
//         acc.push(
//           <p key={`pair${i}`}>
//             <span style={{ color: '#ff66ff' }}>
//               {JSON.stringify(pair[0])} :{' '}
//             </span>{' '}
//             {'{'}
//             {insidePair} {'}'}
//             <br />
//           </p>
//         );
//       }

//       console.log('acc', acc);
//       return acc;
//     }, []);
//   }
//   const cachedPair = cacheDisplay();

//   return (
//     <>
//       {'{'}
//       {cachedPair}
//       {'}'}
//     </>
//   );
// };

// export default Cache;



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
        <p key={`pair${i}`}>
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