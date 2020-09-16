import { React } from '../deps.ts';
// import NavBar from './Components/NavBar.tsx';
// import MainContainer from './Components/MainContainer.tsx';
import { mainContainerStyle } from './style.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
    }
  }
}

const App = () => {
  return <div style={mainContainerStyle}>Hola Mundo!</div>;
};

export default App;
