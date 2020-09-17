import { React } from '../../deps.ts';
import Main from './Main.tsx';
import About from './About.tsx';
import Demo from './Demo.tsx';
import Docs from './Docs.tsx';

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
  const { page } = props;

  if (page === 'home') {
    return (
      <div className="mainContainer">
        <Main />
      </div>
    );
  } else if (page === 'about') {
    return (
      <div className="mainContainer">
        <About />
      </div>
    );
  } else if (page === 'demo') {
    return (
      <div className="mainContainer">
        <Demo />
      </div>
    );
  } else if (page === 'docs') {
    return (
      <div className="mainContainer">
        <Docs />
      </div>
    );
  }
}

export default MainContainer;