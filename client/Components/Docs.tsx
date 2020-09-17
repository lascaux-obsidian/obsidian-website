import { React } from '../../deps.ts';
import QuickStart from './DocPages/QuickStart.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const Docs = (props: any) => {

  return (
    <div>
      <QuickStart />
    </div>
  )
}

export default Docs;
