import { Link } from "../models/SocialMedia.model";

export const NAV_LINKS: Link[] = [
  {
    id: 'nav-principal', 
    path: '#',
    name: 'Principal',
  },
  {
    id: 'nav-projects', 
    path: '#',
    name: 'Proyectos',
  },
  {
    id: 'nav-career', 
    path: '#',
    name: 'Trayectoria',
  },
  {
    id: 'nav-knowledge', 
    path: '#',
    name: 'Conocimientos',
  },
];

export const SOCIAL_MEDIA_LINKS: Link[] =  [
  {
    id: 'linkedin',
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/noeliafronton/',
  },
  {
    id: 'github',
    name: 'Github',
    path: 'https://github.com/Noelia-F',
  },
  {
    id: 'email',
    name: 'Email',
    path: 'mailto:noelia.fronton.g@gmail.com',
  },
];