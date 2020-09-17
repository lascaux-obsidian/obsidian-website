import { React } from '../../deps.ts';
import Carousel from './Carousel.jsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const About = (props: any) => {
  return (
    <div id='about'>
      <Carousel />
    </div>
  );
};

export default About;
