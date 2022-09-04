import React from 'react';
import './Home.css';
import SocialMedia from '../../components/Social-media/Social-media';
import Button from '../../components/Button/Button';

const Home: React.FunctionComponent = () => {
  return (
    <section className="App-section">
      <div className='App-main__content'>
        <article className="App-title-box">
          <h1 className="App-title">Noelia Frontón García</h1>
          <h2 className="App-subtitle">Front-End Developer</h2>
          <p className="App-description">Desarrolladora web con conocimientos en diseño</p>
          <SocialMedia />
        </article>
      </div>
      <div className='App-main__button'>
        <Button shape="circular" label="&#10148;" />
      </div>
    </section>
  );
}

export default Home;
