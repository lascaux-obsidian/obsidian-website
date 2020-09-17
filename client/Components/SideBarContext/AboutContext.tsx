import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const AboutContext = (props: any) => {

  return (
    <div>ABOUT CONTEXT</div>
  )
}

export default AboutContext;
