import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const MainContext = (props: any) => {

  return (
    <div>MAIN CONTEXT</div>
  )
}

export default MainContext;
