import React from 'react';
import './SocialMedia.css';
import {ReactComponent as Linkedin} from "../../assets/icons/linkedin.svg";
import {ReactComponent as Github} from "../../assets/icons/github.svg";
import {ReactComponent as Email} from "../../assets/icons/email.svg";
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

type ColorName = 'principal' | 'contrast';

interface Props {
  color: ColorName;
}

const SocialMedia: React.FunctionComponent<Props> = ({color}) => {
  const renderListOfSocialMedia = (socialMedia: Link[]) => {
    return socialMedia.map(social => {
      return (
        <li className='App-item' aria-label={social.id} key={social.id}>
          <a target="_blank" rel="noreferrer" href={social.path}>
            {getSocialMediaComponent(social, color)}
          </a>
        </li>)
    });
  }
  const getSocialMediaComponent = (social: Link, color: ColorName) => {
    if(social.id === 'linkedin') {
      return (<Linkedin className={`App-icon App-icon--${color}`}/>)
    } else if (social.id === 'github') {
      return (<Github className={`App-icon App-icon--${color}`}/>)
    } else {
      return (<Email className={`App-icon App-icon--${color}`}/>)
    }
  }
  return (
    <ul className="App-social">
      {renderListOfSocialMedia(SOCIAL_MEDIA_LINKS)}
    </ul>
  );
}

export default SocialMedia;
