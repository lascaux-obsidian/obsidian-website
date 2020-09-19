import { React } from '../../deps.ts';
import Carousel from './Carousel.jsx';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const users = [
  {
    firstName: 'Alonso',
    lastName: 'Garza',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600479739/Obsidian/WhatsApp_Image_2020-09-18_at_8.38.09_PM_pgshgj.jpg',

    info: 'Hello there! Did you read my book "Jane Austin: The Alonso Story"?',
    linkedin: 'https://www.linkedin.com/in/e-alonso-garza/',
    github: 'https://github.com/Alonsog66',
  },

  {
    firstName: 'Travis',
    lastName: 'Frank',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462593/Obsidian/image_1_c7sggv.jpg',
    info: 'Hello there! Did you read my book "Dont forget your tie!"?',
    linkedin: 'https://www.linkedin.com/in/travis-frank-89a526a5/',
    github: 'https://github.com/TravisFrankMTG',
  },
  {
    firstName: 'Matt',
    lastName: 'Meigs',
    image: '/static/matt.jpeg',
    info:
      'Hello there! Did you read my book "Appropriate book names for everyone!"?',
    linkedin: 'https://www.linkedin.com/in/matt-meigs/',
    github: 'https://github.com/mmeigs',
  },
  {
    firstName: 'Burak',
    lastName: 'Caliskan',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462610/Obsidian/92C676E9-C9C4-4CFB-80A9-876B30C94732_copy_vfsnjl.jpg',
    info: 'Hello there! Did you read my book "B is for Burak"?',
    linkedin: 'https://www.linkedin.com/in/burakcaliskan/',
    github: 'https://github.com/CaliskanBurak',
  },
];

const About = (props: any) => {
  const [currentIndx, setUser] = (React as any).useState(0);
  const changeUser = (index: any, change: any) => {
    const newIndex = index + change;
    if (newIndex < 0 || newIndex === users.length) return;
    else setUser(newIndex);
  };
  return (
    <>
      <div className='mainContainer'>
        <div id='about' className='animate__animated animate__fadeInDown'>
          <Carousel
            changeUser={changeUser}
            index={currentIndx}
            user={users[currentIndx]}
          />
        </div>
      </div>

      <SideBar page={props.page} user={users[currentIndx]} />
    </>
  );
};

export default About;
