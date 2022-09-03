import React from 'react';
import './Principal.css';
import SocialMedia from '../Social-media/Social-media';
import Button from '../Button/Button';

const Principal: React.FunctionComponent = () => {
  return (
    <section className="App-principal">
      <div className='App-principal__content'>
        <article className="App-title-box">
          <h1 className="App-title">Noelia Frontón García</h1>
          <h2 className="App-subtitle">Front-End Developer</h2>
          <p className="App-description">Desarrolladora web con conocimientos en diseño</p>
          <SocialMedia />
        </article>
      </div>
      <div className='App-principal__button'>
        <Button shape="circular" label="&#10148;" />
      </div>
    </section>
  );
}

export default Principal;
