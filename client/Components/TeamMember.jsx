import { React } from '../../deps.ts';

const TeamMember = ({
  user: { firstName, lastName, image, info, linkedin, github },
}) => {
  return (
    <div className='col-lg-3 col-md-6 mb-lg-0 mb-5'>
      <div className='avatar mx-auto'>
        <div
          rel='prefetch'
          className='slideContent z-depth-1'
          style={{
            backgroundColor: 'black',
            backgroundImage: `url('${image}')`,
          }}
        ></div>
        <h5 className='font-weight-bold mt-4 mb-3'>{`${firstName} ${lastName}`}</h5>
        <ul className='list-unstyled mb-0'>
          <a className='p-2 fa-lg fb-ic' href={github}>
            <i className='fab fa-github '></i>
          </a>

          <a className='p-2 fa-lg tw-ic' href={linkedin}>
            <i className='fab fa-linkedin '> </i>
          </a>
        </ul>
        <p className='grey-text'>{info}</p>
      </div>
    </div>
  );
};
export default TeamMember;
