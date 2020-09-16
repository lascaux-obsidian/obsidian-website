import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      h5: any;
      button: any;
    }
  }
}

const MainContainer = (props: any) => {

  return (
    <div>
      Main Container...
    </div>
  );
}

export default MainContainer;