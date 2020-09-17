import { React } from '../../deps.ts';
import ObsidianLogo from './ObsidianLogo.tsx';

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
    <div className="homePage">
      {/* <img src="static/logo.svg" alt="obsidianLogo" className="animate__animated animate__fadeInDown" id="logo"/> */}
      <ObsidianLogo />
    </div>
  )
}

export default Main;