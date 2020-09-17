import { React } from '../../deps.ts';
import Main from './Main.tsx';
import About from './About.tsx';
import Demo from './Demo.tsx';
import Docs from './Docs.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const MainContainer = (props: any) => {
  const { page } = props;

  let curPage;

  if (page === 'home') curPage = <Main />
  if (page === 'about') curPage = <About />
  if (page === 'demo') curPage = <Demo />
  if (page === 'docs') curPage = <Docs />


  return (
    <div className="mainContainer">
      {curPage}
    </div>
  );
}

export default MainContainer;
