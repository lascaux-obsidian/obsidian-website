import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      h5: any;
      button: any;
      svg: any;
      path: any;
    }
  }
}

const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '15%',
  height: '100%',
  maxHeight: '550px',
  maxWidth: '140px',
  padding: '15px',
}

const buttonStyle = {
  borderRadius: '6px',
  // border: '1px solid #EBEBEC',
  backgroundColor: '#737780',
  padding: '6% 3%',
}


const NavBar = (props: any) => {
  return (
    <div style={navStyle}>
      <button className="homeBtn" style={buttonStyle}>
        <svg width="80%" height="80%" viewBox="0 0 16 16" className="bi bi-house-fill" fill="#EBEBEC" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>
      </button>
      <button style={buttonStyle}>
        <svg width="80%" height="80%" viewBox="0 0 16 16" className="bi bi-person-lines-fill" fill="#EBEBEC" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <button style={buttonStyle}>
        <svg width="80%" height="80%" viewBox="0 0 16 16" className="bi bi-laptop" fill="#EBEBEC" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
          <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
        </svg>
      </button>
      <button style={buttonStyle}>
        <svg width="80%" height="80%" viewBox="0 0 16 16" className="bi bi-file-earmark-text" fill="#EBEBEC" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
          <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
          <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
    </div>
  );
}

export default NavBar;