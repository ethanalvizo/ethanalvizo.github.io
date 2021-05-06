import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ethan',
  subtitle: "I'm a Full-Stack Web Developer",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a biomedical engineering student at the University of Waterloo currently seeking opportunities for Fall 2021.",
  paragraphTwo: 'I have a strong passion for web development but I am interested in learning about all types of tech!',
  paragraphThree: "I've developed the MVP for 2 startup companies and quickly picked up the technologies needed on the way. I've played multiple roles and worn many hats in my time at these companies, as a result, I can make meaningful contributions in a wide variety of teams.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Budget Tracker',
    info: 'Budget Tracker records and displays user trends in expenses through various graphs to easily identify high spending areas. It allows for individual customization and user preferences to suit the app to their needs.',
    info2: 'The app features an authenthication system and a NoSQL database developed through Google Firebase.',
    url: '',
    repo: 'https://github.com/ethanalvizo/expense-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Resume Creator',
    info: 'Resume Creator saves users the time and effort of customizing their own resume format by allowing them to input their own information in the template.',
    info2: 'This app features a live view of the resume as they input details and the ability to export it as a pdf for actual use',
    url: '',
    repo: 'https://github.com/ethanalvizo/resume-template', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};