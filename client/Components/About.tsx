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
    <div className="animate__animated animate__fadeInDown">WE'RE IN ABOUT</div>
  )
}

export default About;