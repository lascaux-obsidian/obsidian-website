import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      iframe: any;
    }
  }
}

const Demo = (props: any) => {
  

  return (
    <>
      <div className='mainContainer'>
      <iframe src="http://demo.obsidian.land/?" width="100%" height="100%"></iframe>
      
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Demo;

