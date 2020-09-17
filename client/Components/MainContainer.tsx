import { React, BrowserRouter, Switch, Route, Link } from '../../deps.ts';
import NavBar from './NavBar.tsx';

import { mainContainerStyle } from '../style.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      p: any;
      h5: any;
      button: any;
    }
  }
}

const MainContainer = (props: any) => {

  return (
    <div style={mainContainerStyle}>
      {/* <BrowserRouter>
        <NavBar />
        <Link to='/'>Go Home</Link>
        <Link to='/bios'>Go to About</Link>

        <Switch>
          <Route path='/'>
            <p style={{color: 'white'}}>We're HOME</p>
          </Route>
          <Route path='/bios'>
            <p style={{color: 'white'}}>We're in BIOS</p>
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default MainContainer;