import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      button: any;
      hr: any;
    }
  }
}

const AboutContext = (props: any) => {
  const { user } = props;
  return (
    <div id='docsTOC' style={{ height: '100%' }}>
      <div className='list-group' style={{ height: '100%' }}>
        <h4
          className={`list-group-item list-group-item-action 
        `}
        >
          About
        </h4>

        <div
          className='list-group-item'
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <h5>{user.info}</h5>

          <div className='social-button'>
            <a
              href={user.linkedin}
              className='fab fa-linkedin fa-5x'
              target='_blank'
            ></a>
            <a
              href={user.github}
              className='fab fa-github fa-5x'
              target='_blank'
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContext;
