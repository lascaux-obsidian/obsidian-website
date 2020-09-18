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
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462327/Obsidian/alonso_tjoj05.jpg',
  },
  {
    firstName: 'Travis',
    lastName: 'Frank',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462327/Obsidian/alonso_tjoj05.jpg',
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
