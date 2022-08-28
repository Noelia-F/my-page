import React from 'react';
import './Principal.css';
import {ReactComponent as Linkedin} from "../../icons/linkedin.svg";
import {ReactComponent as Github} from "../../icons/github.svg";
import {ReactComponent as Email} from "../../icons/email.svg";

function Principal() {
  return (
    <section className="App-principal">
      <div className="App-title-box">
        <h1 className="App-title">Noelia Frontón García</h1>
        <h2 className="App-subtitle">Front-End Developer</h2>
        <p className="App-description">Desarrolladora web con conocimientos en diseño</p>
        <ul className="App-list App-social">
          <li className="App-item" aria-label='linkedin'>
            <Linkedin className="App-icon"/>
          </li>
          <li className="App-item" aria-label='github'>
            <Github className="App-icon"/>
          </li>
          <li className="App-item" aria-label='email'>
            <Email className="App-icon"/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Principal;
