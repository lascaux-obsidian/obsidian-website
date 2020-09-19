import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const MainContext = (props: any) => {
  return <div></div>;
};

export default MainContext;
