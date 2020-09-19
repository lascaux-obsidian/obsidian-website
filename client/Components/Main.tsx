import { React } from '../../deps.ts';
import ObsidianLogo from './ObsidianLogo.tsx';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      img: any;
    }
  }
}

const Main = (props: any) => {
  return (
    <>
      <div className='mainContainerLogo'>
        <div className='homePage'>
          {/* <img src="static/logo.svg" alt="obsidianLogo" className="animate__animated animate__fadeInDown" id="logo"/> */}
          <ObsidianLogo />
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Main;
