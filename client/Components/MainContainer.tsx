import { React } from '../../deps.ts';
import NavBar from './NavBar.tsx';

import { mainContainerStyle } from '../style.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      p: any;
      h5: any;
      button: any;
    }
  }
}

const MainContainer = (props: any) => {

  return (
    <div className="mainContainer">

    </div>
  );
}

export default MainContainer;