import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}


const DocsContext = (props: any) => {

  return (
    <div>DOCS CONTEXT</div>
  )
}

export default DocsContext;
