import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const Main = (props: any) => {

  return (
    <div>WE'RE IN MAIN</div>
  )
}

export default Main;