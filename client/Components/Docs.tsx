import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const Docs = (props: any) => {

  return (
    <div>WE'RE IN DOCS</div>
  )
}

export default Docs;