import { React } from '../deps.ts';
import NavBar from './Components/NavBar.tsx';
import MainContainer from './Components/MainContainer.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const App = () => {
  const [page, setPage] = (React as any).useState('home');

  return (
      <div className='app'>
        <NavBar setPage={setPage} />
        <MainContainer page={page} />
      </div>
  );
};

export default App;