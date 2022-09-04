import React from 'react';
import './Social-media.css';
import {ReactComponent as Linkedin} from "../../icons/linkedin.svg";
import {ReactComponent as Github} from "../../icons/github.svg";
import {ReactComponent as Email} from "../../icons/email.svg";
import { Link } from '../../models/Link.model';

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

const SocialMedia: React.FunctionComponent = () => {
  const renderListOfSocialMedia = (socialMedia: Link[]) => {
    return socialMedia.map(social => {
      return (
        <li className="App-item" aria-label={social.id} key={social.id}>
          <a target="_blank" rel="noreferrer" href={social.path}>
            {getSocialMediaComponent(social)}
          </a>
        </li>)
    });
  }
  const getSocialMediaComponent = (social: Link) => {
    if(social.id === 'linkedin') {
      return (<Linkedin className="App-icon"/>)
    } else if (social.id === 'github') {
      return (<Github className="App-icon"/>)
    } else {
      return (<Email className="App-icon"/>)
    }
  }
  return (
    <ul className="App-social">
      {renderListOfSocialMedia(SOCIAL_MEDIA_LINKS)}
    </ul>
  );
}

export default SocialMedia;
