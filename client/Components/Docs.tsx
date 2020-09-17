import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const Docs = (props: any) => {
  return (
    <>
      <div className='mainContainer'>
        <div>WE'RE IN DOCS</div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Docs;
