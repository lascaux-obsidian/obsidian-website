import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const DemoContext = (props: any) => {

  return (
    <div>DEMO CONTEXT</div>
  )
}

export default DemoContext;
