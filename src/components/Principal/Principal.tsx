import React from 'react';
import './Principal.css';
import {ReactComponent as Linkedin} from "../../icons/linkedin.svg";
import {ReactComponent as Github} from "../../icons/github.svg";
import {ReactComponent as Email} from "../../icons/email.svg";
import { Link } from '../../models/SocialMedia.model';

interface Props {
  socialMedia: Link[];
}

const Principal: React.FunctionComponent<Props> = ({socialMedia}) => {
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
    <section className="App-principal">
      <div className="App-title-box">
        <h1 className="App-title">Noelia Frontón García</h1>
        <h2 className="App-subtitle">Front-End Developer</h2>
        <p className="App-description">Desarrolladora web con conocimientos en diseño</p>
        <ul className="App-list App-social">
          {renderListOfSocialMedia(socialMedia)}
        </ul>
      </div>
    </section>
  );
}

export default Principal;
