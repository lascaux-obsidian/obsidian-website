import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const Demo = (props: any) => {

  return (
    <div>WE'RE IN DEMO</div>
  )
}

export default Demo;