import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const About = (props: any) => {

  return (
    <div>WE'RE IN ABOUT</div>
  )
}

export default About;