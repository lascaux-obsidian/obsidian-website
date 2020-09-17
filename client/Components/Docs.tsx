import { React } from '../../deps.ts';
import QuickStart from './DocPages/QuickStart.tsx';
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
        <div>
          <QuickStart />
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Docs;
