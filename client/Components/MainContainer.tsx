import { React } from '../../deps.ts';
import Main from './Main.tsx';
import About from './About.tsx';
// import Demo from './Demo.tsx';
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
  if (page === 'home') curPage = <Main page={props.page} />;
  if (page === 'about') curPage = <About page={props.page} />;
  // if (page === 'demo') curPage = <Demo page={props.page} />;
  if (page === 'docs') curPage = <Docs page={props.page} />;

  return <>{curPage}</>;
};

export default MainContainer;
