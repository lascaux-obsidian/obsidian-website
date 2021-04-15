import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      br: any;
      pre: any;
      code: any;
      label: any;
      select: any;
      option: any;
      p: any;
      input: any;
    }
  }
}

const Demo = (props: any) => {
  


  return (
    <>
      <div className='mainContainer'>
        {/* <div id='demo-block'> */}
          <iframe src='http://demonstration.obsidian.land/'height="100%" width="100%"></iframe>
        {/* </div> */}
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;
