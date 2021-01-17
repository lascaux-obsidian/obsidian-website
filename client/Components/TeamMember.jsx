import { React } from '../../deps.ts';

const TeamMember = ({
  user: { firstName, lastName, image, info, linkedin, github },
}) => {
  return (
    <div class='col-lg-3 col-md-6 mb-lg-0 mb-5'>
      <div class='avatar mx-auto'>
        <div
          className='slideContent z-depth-1'
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
        <h5 class='font-weight-bold mt-4 mb-3'>{`${firstName} ${lastName}`}</h5>
        <ul class='list-unstyled mb-0'>
          <a class='p-2 fa-lg fb-ic' href={github}>
            <i class='fab fa-github '></i>
          </a>

          <a class='p-2 fa-lg tw-ic' href={linkedin}>
            <i class='fab fa-linkedin '> </i>
          </a>
        </ul>
        <p class='grey-text'>{info}</p>
      </div>
    </div>
  );
};
export default TeamMember;
