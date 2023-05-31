//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiLinkedin
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/tailwind.png';
import SkillImg6 from './assets/img/skills/mysql.png';
import SkillImg7 from './assets/img/skills/django.png'; 
import SkillImg8 from './assets/img/skills/git.png';


// navigation
export const navigation = [
  {
    name: 'Inicio',
    href: 'inicio',
  },
  {
    name: 'Sobre Mi',
    href: 'sobremi',
  },
  {
    name: 'Portfolio',
    href: 'portfolio',
  },
  {
    name: 'Contacto',
    href: 'contacto',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/elias_giannantonio/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/eliasgiannantonio',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/elias-giannantonio/',
  },
];

// projects
export const proyectosData = [
  {
    id: '1',
    image: Project1,
    name: 'CBA FLY',
    category: 'Diseño UI/UX',
    href: "https://cbafly-3f52e.web.app/inicio"
  },
  {
    id: '2',
    image: Project2,
    name: 'Runthecode',
    category: 'Desarrollo Web',
    href: "https://poetic-faun-d9c6de.netlify.app/index.html"
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'Diseño UI/UX',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const proyectosNav = [
  {
    name: 'todos',
  },
  {
    name: 'Diseño UI/UX',
  },
  {
    name: 'Desarrollo web',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes alguna pregunta?',
    subtitle: 'Estoy aquí para ayudarte',
    description: 'Envíame un correo a giannantonioelias@gmail.com',
  },
];
