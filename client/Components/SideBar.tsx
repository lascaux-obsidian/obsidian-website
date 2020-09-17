import { React } from '../../deps.ts';
import DocsContext from './SideBarContext/DocsContext.tsx';
import MainContext from './SideBarContext/MainContext.tsx';
import AboutContext from './SideBarContext/AboutContext.tsx';
import DemoContext from './SideBarContext/DemoContext.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      img: any;
      h4: any;
      a: any;
    }
  }
}


const NavBar = (props: any) => {
  const { page } = props;

  let curContext;

  if (page === 'home') curContext = <MainContext />
  if (page === 'about') curContext = <AboutContext />
  if (page === 'demo') curContext = <DemoContext />
  if (page === 'docs') curContext = <DocsContext />

  return (
    <div className="sidebar">
      <div className="codeLinks">
        <a href="https://github.com/oslabs-beta/obsidian">
          <div className="codeLinkDiv">
            <img id="githubLogo" src="../static/github-icon.svg" alt="GitHub Logo" />
            <h4>GitHub</h4>
          </div>
        </a>
        <a href="https://deno.land/x/obsidian">
          <div className="codeLinkDiv">
            <img src="../static/Deno-Logo.svg" alt="Deno Logo" />
            <h4>deno.land</h4>
          </div>
        </a>
      </div>
      <div className="sideContent">
        {curContext}
      </div>
    </div>
  );
}

export default NavBar;
