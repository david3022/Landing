
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Technologies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End",
    icon: html,
    iconBg: "#383E56",
    //date: "November 2022-Present day",
    points: [
      "Html 5",
      "CSS 3",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Redux Toolkit",
      "Tailwind CSS",
      ,
    ],
  },
  {
    title: "Backend ",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "February 2023 - June 2023",
    points: [
      "Javascript",
      "Node",
      "Express",
    ],
  },
  {
    title: "Data Base",
    icon: mongodb,
    iconBg: "#383E56",
    date: "June 2023- October 2023",
    points: [
      "MongoDB",
      "Sequalize",
    ],
  },
  {
    title: "Others",
    icon: git,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present day",
    points: [
      "Git",
      "Figma",
      "Docker",
      "Three JS",
    ],
  },
];


const projects = [
  {
    name: "Amazon Clon",
    description:
      "The Amazon's UI homepage, allowing users to add items to the favorites section or shopping cart.This project shows effective use of modern web technologies.  Click HERE",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/david3022/Amazon_better_NextJS.git",
    source_code_link2: "https://amazon-nxt-js.vercel.app",
  },
  {
    name: "Restaurant",
    description:
      "Restaurant SPA with an large list of menus,allowing you to select a preference to retrieve ingredient descriptions from an API or filter them.  Click HERE",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Html & Css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/david3022/Restorant",
    source_code_link2: "https://restorant-nine.vercel.app",
  },
  {
    name: "Tetris Game",
    description:
      "Classic Tetris video game project where drawing skills and programming logic for piece rotation and collision are put into practice.  Click HERE",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/david3022/Tetris02.git",
    source_code_link2: "https://tetris02-david3022s-projects.vercel.app",
  },
];

export { services, technologies, experiences, projects };

   
