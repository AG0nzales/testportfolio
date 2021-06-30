import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IProject, IService } from "./type";
import {IoMdConstruct} from 'react-icons/io';
import {AiFillMobile} from 'react-icons/ai';


export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Works",
    about:
      "Currenlty in progress in <b> Next.js</b>,<b>Tailwind</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Progressing in Backend",
    about:
      "Progressing in handling database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiFillMobile,
    title: "In progress Mobile Developer",
    about:
      "Currently progressing in the field of Mobile devlopment mainly <b>Flutter </b> and <b>React Native</b> ",
  },
  {
    Icon: IoMdConstruct,
    title: "In Progress",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: IoMdConstruct,
    title: "In Progress",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! ",
  },
  {
    Icon: IoMdConstruct,
    title: "In Progress",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const projects:IProject[] = [
  {
    id: 1,
    name: 'Quiz App',
    description: 'This is a simple Quiz App',
    image_path: '/images/quiz.png',
    deployed_url: '',
    github_url: '',
    category: ['react'],
    key_techs: ['React', 'Socket.io']
  },
  {
    id: 2,
    name: 'To be listed',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['next'],
    key_techs: ['next', 'next']
  },
  {
    id: 3,
    name: 'To be listed',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['django'],
    key_techs: ['next', 'tailwind']
  },
  {
    id: 4,
    name: 'To be listed',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['react'],
    key_techs: ['React', 'Socket.io']
  },
  {
    id: 5,
    name: 'To be listed',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['django'],
    key_techs: ['next', 'tailwind']
  },
  {
    id: 6,
    name: 'To be listed',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['django'],
    key_techs: ['next', 'tailwind']
  },
  {
    id: 7,
    name: 'To be listed yes',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['django'],
    key_techs: ['next', 'tailwind']
  },
  {
    id: 8,
    name: 'To be listed yes',
    description: 'Soon to be posted',
    image_path: '/images/proxy.jpg',
    deployed_url: '',
    github_url: '',
    category: ['django'],
    key_techs: ['next', 'tailwind']
  },
]

// import { RiComputerLine} from 'react-icons/ri'
// import { IService } from './type'



// export const services: IService[] = [
//   {
//     title: "Frontend Works",
//     about: "lorem....",
//     Icon: RiComputerLine,
//   },
//   {
//     title: "Frontend Works",
//     about: "lorem....",
//     Icon: RiComputerLine,
//   }
// ]