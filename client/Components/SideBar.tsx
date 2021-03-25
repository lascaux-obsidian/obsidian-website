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
      button: any;
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
  
  const [open, setOpen] = (React as any).useState(null);

  const createSidebarStyle = () => {
    let styleObj = { height: '94%', position: 'relative', top: '0%' };
    if ((window as any).innerWidth < 600) {
      styleObj = open ? { height: '70%', position: 'absolute', top: '30%' } : { height: '20%', position: 'absolute', top: '75%' };
    }
    const homeAbout = { backgroundColor: 'rgba(0,0,0,0)' };

    return page === 'home'|| page ==='about' ? Object.assign(styleObj, homeAbout) : styleObj;
  };

  const sidebarStyle = createSidebarStyle();

  return (
    <div
      className='sidebar'
      // style={page === 'home'|| page==='about' ? { backgroundColor: 'rgba(0,0,0,0)' } : {}}
      style={sidebarStyle}
    >
      <div className='codeLinks'>
        <a href='https://github.com/open-source-labs/obsidian'>
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
          page === 'home'|| page ==='about' || page === 'demo'
            ? { backgroundColor: 'rgba(0,0,0,0)', overflow: 'visible', opacity: 0, display: 'none' }
            : {}
        } onClick={() => setOpen(!open)}>
        { open ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
          </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>}
      </button>
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
