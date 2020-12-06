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

    info:
      'Alonso Garza is a full-stack software engineer from Austin, Texas. Alonso specializes in React, Node.js, Express, and is passionate about solving complex problems and working in teams. Outside of coding, he loves to travel around Latin America and scuba dive!',
    linkedin: 'https://www.linkedin.com/in/e-alonso-garza/',
    github: 'https://github.com/Alonsog66',
  },

  {
    firstName: 'Travis',
    lastName: 'Frank',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462593/Obsidian/image_1_c7sggv.jpg',
    info:
      'Travis is a software engineer at Place Exchange focused on building scalable backend solutions. When he isn’t coding he enjoys playing board games, eating copious amounts of sushi, and conducting pit orchestras.',
    linkedin: 'https://linkedin.com/in/travis-m-frank',
    github: 'https://github.com/TravisFrankMTG',
  },
  {
    firstName: 'Matt',
    lastName: 'Meigs',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600811069/Obsidian/IMG_2543_vrhknw.jpg',
    info:
      'Matt is a software engineer interested in clear and responsive frontend web design and algorithmic optimization through the full stack. He’s an expat from the Deep South, a lover of far-flung travel, and a former Broadway actor.',
    linkedin: 'https://www.linkedin.com/in/matt-meigs/',
    github: 'https://github.com/mmeigs',
  },
  {
    firstName: 'Burak',
    lastName: 'Caliskan',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462610/Obsidian/92C676E9-C9C4-4CFB-80A9-876B30C94732_copy_vfsnjl.jpg',
    info:
      'Burak is a software engineer focused on developing full stack applications. Curious and constantly finding ways to use new ideas to solve problems and provide delight. For fun, he enjoys outdoor activities, traveling, and exploring new cuisines.',
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
