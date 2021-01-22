import { React } from '../../deps.ts';
import DocsContext from './SideBarContext/DocsContext.tsx';
import MainContext from './SideBarContext/MainContext.tsx';
import AboutContext from './SideBarContext/AboutContext.jsx';
import DemoContext from './SideBarContext/DemoContext.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      img: any;
      h4: any;
      a: any;
      hr: any;
      footer: any;
    }
  }
}

const NavBar = (props: any) => {
  const { page, docsPage, setDocsPage } = props;

  let curContext;

  if (page === 'home') curContext = <MainContext />;
  if (page === 'about') curContext = <AboutContext/> ;
  if (page === 'demo') curContext = <DemoContext />;
  if (page === 'docs')
    curContext = <DocsContext docsPage={docsPage} setDocsPage={setDocsPage} />;
  
  const [open, setOpen] = (React as any).useState(false);

  const sidebarStyle = () => {
    const styleObj = open ? { height: '70%' } : { height: '20%' };
    const homeAbout = { backgroundColor: 'rgba(0,0,0,0)' };

    return page === 'home'|| page==='about' ? Object.assign(styleObj, homeAbout) : styleObj;
  };

  return (
    <div
      className='sidebar'
      // style={page === 'home'|| page==='about' ? { backgroundColor: 'rgba(0,0,0,0)' } : {}}
      style={sidebarStyle()}
    >
      <div className='codeLinks'>
        <a href='https://github.com/oslabs-beta/obsidian'>
          <div className='codeLinkDiv'>
            <img
              id='githubLogo'
              src='../static/github-icon.svg'
              alt='GitHub Logo'
            />
            <h4>GitHub</h4>
          </div>
        </a>
        <a href='https://deno.land/x/obsidian'>
          <div className='codeLinkDiv'>
            <img id='denoImg' src='../static/Deno-Logo.svg' alt='Deno Logo' />
            <h4>deno.land</h4>
          </div>
        </a>
      </div>
      <button id='mobile-collapse' style={
          page === 'home'|| page==='about'
            ? { backgroundColor: 'rgba(0,0,0,0)', overflow: 'visible' }
            : {}
        } onClick={() => setOpen(!open)}>^</button>
      <div
        className='sideContent'
        style={
          page === 'home'|| page==='about'
            ? { backgroundColor: 'rgba(0,0,0,0)', overflow: 'visible' }
            : {}
        }
      >
        {curContext}
      </div>
    </div>
  );
};

export default NavBar;
