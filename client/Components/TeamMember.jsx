import { React } from '../../deps.ts';

const TeamMember = ({ person: { image, firstName, lastName, github } }) => {
  const gitHubHandle = github.split('/').pop();
  return (
    <div className='developerBio col-lg-3 col-md-6 mb-lg-0 mb-5'>
      {/* <div class='avatar mx-auto'>
        <img className='developerImage' src={image} />
      </div> */}
      <div
        className='slideContent'
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
      <p className='developerName'>{`${firstName} ${lastName}`}</p>
      <a className='githubLink' target='blank' href={github}>
        @{gitHubHandle}
      </a>
    </div>
  );
};
export default TeamMember;
