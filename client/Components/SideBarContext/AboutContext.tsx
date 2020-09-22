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
    <div id='docsTOC'>
      <div className='list-group'>
        <h4
          className={`list-group-item list-group-item-action 
        `}
        >
          About
        </h4>

        <div className='list-group-item'>
          <h6>{user.info}</h6>

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
