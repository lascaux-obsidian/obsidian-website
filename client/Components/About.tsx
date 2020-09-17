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
    <div id='about' className='animate__animated animate__fadeInDown'>
      <Carousel />
    </div>
  );
};

export default About;
