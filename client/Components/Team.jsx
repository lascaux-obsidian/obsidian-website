import { React } from '../../deps.ts';
import TeamMember from './TeamMember.jsx';

const users = [
  {
    firstName: 'Esma',
    lastName: 'Sahraoui',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609992320/IMG_2063_htwead.jpg',
    info:
      'Esma is a full-stack software engineer with a passion for building servers as well as building responsive user interfaces for web applications. In her free time, she is driven by traveling to discover new cultures and kayaking across rivers.',
    linkedin: 'https://www.linkedin.com/in/esma-sahraoui/',
    github: 'https://github.com/EsmaShr',
  },
  {
    firstName: 'Derek',
    lastName: 'Miller',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609990785/Derek-headshot_ofzix3.jpg',
    info:
      'Derek is a full-stack software engineer with a focus on the MERN tech stack. Outside of coding he loves boardgames and rock climbing.',
    linkedin: 'https://www.linkedin.com/in/dsymiller',
    github: 'https://github.com/dsymiller',
  },
  {
    firstName: 'Eric',
    lastName: 'Marcatoma',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609989762/AE476873-B676-4D4D-AF9A-548B386F7AD7_1_201_a_mxvsgu.jpg',
    info:
      'Eric is a software engineer from NYC who focuses on front-end development. During his spare time he loves to go to the gym, play basketball and trying new restaurants in his city.',
    linkedin: 'https://www.linkedin.com/in/ericmarc159',
    github: 'https://github.com/ericmarc159',
  },
  {
    firstName: 'Lourent',
    lastName: 'Flores',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609990832/headshot_e4ijvy.png',
    info:
      'Lourent is a full-stack software engineer specializing in React and Node.js, with a passion for learning new technologies and optimizing frontend web design.',
    linkedin: 'https://www.linkedin.com/in/lourent-flores/',
    github: 'https://github.com/lourentflores',
  },
  {
    firstName: 'Spencer',
    lastName: 'Stockton',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609994346/obsidianpic_gzxcqe.jpg',
    info:
      'Spencer is a software engineer that enjoys working on solving complex problems across the entire tech stack.  When he is not programming, you can find him running on the East River or attending a concert around NYC.',
    linkedin: 'https://www.linkedin.com/in/spencer-stockton-643823a4/',
    github: 'https://github.com/tonstock',
  },
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

const teamMembers = users.map((user, i) => (
  <TeamMember key={`TeamMember-${i}`} user={user} />
));
function Team() {
  return (
    <section className='team-section text-center'>
      <h1>Contributors</h1>
      <div className='row'>{teamMembers}</div>
    </section>
  );
}

export default Team;
