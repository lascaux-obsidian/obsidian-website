import { React } from '../../deps.ts';
import Team from './Team.jsx';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}





const About = (props: any) => {
  return (
    <>
      <div className="mainContainer">

          
          <div className="devGrid">     
          <Team/>
          </div>
          </div>
  

      <SideBar page={props.page}  />
    </>
  );
};

export default About;
